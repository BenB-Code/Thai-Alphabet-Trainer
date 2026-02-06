import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { QuizTimerService } from './quiz-timer-service';

describe('QuizTimerService', () => {
  let service: QuizTimerService;
  let rafCallback: FrameRequestCallback | null;
  let now: number;

  beforeEach(() => {
    rafCallback = null;
    now = 0;

    spyOn(window, 'requestAnimationFrame').and.callFake(callback => {
      rafCallback = callback;
      return 1;
    });
    spyOn(window, 'cancelAnimationFrame').and.callFake(() => {
      return;
    });
    spyOn(performance, 'now').and.callFake(() => now);

    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(QuizTimerService);
  });

  it('starts and counts down until timeout', () => {
    const onTimeout = jasmine.createSpy('onTimeout');

    now = 1;
    service.start(1000, onTimeout);

    expect(service.timerPercent()).toEqual(100);
    expect(rafCallback).not.toBeNull();

    now = 501;
    rafCallback?.(0);
    expect(Math.round(service.timerPercent())).toEqual(50);

    now = 1001;
    rafCallback?.(0);
    expect(service.timerPercent()).toEqual(0);
    expect(onTimeout).toHaveBeenCalledTimes(1);
  });

  it('stops and cancels the animation frame', () => {
    service.start(1000, () => {
      return;
    });
    service.stop();

    expect(window.cancelAnimationFrame).toHaveBeenCalledTimes(1);
  });

  it('resets the timer percent and clears skipTransition', () => {
    service.reset(1000);

    expect(service.timerPercent()).toEqual(100);
    expect(service.skipTransition()).toEqual(true);

    rafCallback?.(0);
    expect(service.skipTransition()).toEqual(false);
  });

  it('does not start a new frame when already running', () => {
    const onTimeout = jasmine.createSpy('onTimeout');

    service.start(1000, onTimeout);
    rafCallback = null;
    service.start(1000, onTimeout);

    expect(rafCallback).toBeNull();
  });

  it('handles the first frame when lastTick is zero', () => {
    const onTimeout = jasmine.createSpy('onTimeout');

    now = 0;
    service.start(1000, onTimeout);

    rafCallback?.(0);
    expect(service.timerPercent()).toEqual(100);
    expect(onTimeout).not.toHaveBeenCalled();
  });
});
