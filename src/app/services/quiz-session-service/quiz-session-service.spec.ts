import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { QuizSessionService } from './quiz-session-service';
import { QuizPreparationService } from '../quiz-preparation-service/quiz-preparation-service';
import { QuizTimerService } from '../quiz-timer-service/quiz-timer-service';
import { FINISHED, IN_PROGRESS, LATIN, PAUSE } from '../../shared/constants';
import { QuizFormat } from '../../shared/models';

describe('QuizSessionService', () => {
  let service: QuizSessionService;
  let prepServiceSpy: jasmine.SpyObj<QuizPreparationService>;
  let timerServiceSpy: jasmine.SpyObj<QuizTimerService>;

  beforeEach(() => {
    prepServiceSpy = jasmine.createSpyObj('QuizPreparationService', [], {
      quizSettings: signal<QuizFormat>({
        display: LATIN,
        questions: 2,
        selected: [],
        delay: 2,
        randomized: [],
      }),
    });
    timerServiceSpy = jasmine.createSpyObj('QuizTimerService', ['start', 'stop', 'reset'], {
      timerPercent: signal(100),
      skipTransition: signal(false),
    });

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: QuizPreparationService, useValue: prepServiceSpy },
        { provide: QuizTimerService, useValue: timerServiceSpy },
      ],
    });
    service = TestBed.inject(QuizSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('starts the session and triggers the timer', () => {
    prepServiceSpy.quizSettings.set({
      ...prepServiceSpy.quizSettings(),
      questions: 1,
    });

    service.start();

    expect(service.progressState()).toEqual(IN_PROGRESS);
    expect(timerServiceSpy.start).toHaveBeenCalledTimes(1);
    expect(timerServiceSpy.start).toHaveBeenCalledWith(2000, jasmine.any(Function));

    const onTimeout = timerServiceSpy.start.calls.mostRecent().args[1];
    onTimeout();
  });

  it('resets the session state and timer', () => {
    service.reset();

    expect(service.index()).toEqual(0);
    expect(service.flipped()).toEqual(false);
    expect(service.cardAnimation()).toBeNull();
    expect(service.progressState()).toEqual(PAUSE);
    expect(timerServiceSpy.reset).toHaveBeenCalledWith(2000);
  });

  it('toggles flip and pauses or resumes the timer', () => {
    prepServiceSpy.quizSettings.set({
      ...prepServiceSpy.quizSettings(),
      questions: 1,
    });

    service.toggleFlip();
    expect(service.flipped()).toEqual(true);
    expect(service.progressState()).toEqual(PAUSE);
    expect(timerServiceSpy.stop).toHaveBeenCalledTimes(1);

    service.toggleFlip();
    expect(service.flipped()).toEqual(false);
    expect(timerServiceSpy.start).toHaveBeenCalledTimes(1);

    const onTimeout = timerServiceSpy.start.calls.mostRecent().args[1];
    onTimeout();
  });

  it('toggles pause and resumes when flipped', () => {
    prepServiceSpy.quizSettings.set({
      ...prepServiceSpy.quizSettings(),
      questions: 1,
    });

    service.toggleFlip();
    expect(service.flipped()).toEqual(true);

    service.togglePause();
    expect(service.flipped()).toEqual(false);
    expect(timerServiceSpy.start).toHaveBeenCalledTimes(1);

    const onTimeout = timerServiceSpy.start.calls.mostRecent().args[1];
    onTimeout();
  });

  it('toggles pause when not flipped', () => {
    prepServiceSpy.quizSettings.set({
      ...prepServiceSpy.quizSettings(),
      questions: 1,
    });

    service.start();
    timerServiceSpy.start.calls.reset();

    service.togglePause();
    expect(timerServiceSpy.stop).toHaveBeenCalledTimes(1);

    service.togglePause();
    expect(timerServiceSpy.start).toHaveBeenCalledTimes(1);

    const onTimeout = timerServiceSpy.start.calls.mostRecent().args[1];
    onTimeout();
  });

  it('marks finished when trying to go past the last question', () => {
    prepServiceSpy.quizSettings.set({
      ...prepServiceSpy.quizSettings(),
      questions: 1,
    });
    service.reset();

    service.next();

    expect(service.progressState()).toEqual(FINISHED);
    expect(timerServiceSpy.stop).toHaveBeenCalledTimes(1);
  });

  it('navigates to the next card and restarts the timer', () => {
    jasmine.clock().install();

    service.next();
    expect(timerServiceSpy.reset).toHaveBeenCalledTimes(1);

    jasmine.clock().tick(300);

    expect(service.index()).toEqual(1);
    expect(timerServiceSpy.start).toHaveBeenCalledTimes(1);

    const onTimeout = timerServiceSpy.start.calls.mostRecent().args[1];
    onTimeout();

    jasmine.clock().uninstall();
  });

  it('navigates to the previous card', () => {
    jasmine.clock().install();

    service.next();
    jasmine.clock().tick(300);

    service.previous();
    jasmine.clock().tick(300);

    expect(service.index()).toEqual(0);

    jasmine.clock().uninstall();
  });
});
