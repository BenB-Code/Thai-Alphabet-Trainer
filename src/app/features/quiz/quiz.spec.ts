import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal, WritableSignal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { Quiz } from './quiz';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { ProgressBar } from '../../common/progress-bar/progress-bar';
import { FINISHED, IN_PROGRESS, PAUSE } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;
  let quizStoreService: QuizStoreService;

  const mockCard = { ...THAI_CONSONANTS[0], display: 'thai' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: { isDarkThemeActive: signal(false), thaiFont: signal('sarabun'), language: signal('en') },
        },
        {
          provide: QuizStoreService,
          useValue: {
            start: jasmine.createSpy('start'),
            next: jasmine.createSpy('next'),
            delay: signal(3),
            delayMs: signal(3000),
            progressState: signal(PAUSE),
            index: signal(0),
            currentCard: signal(mockCard),
            isFlipped: signal(false),
            cardAnimation: signal(null),
            canGoBack: signal(false),
            canGoForward: signal(true),
            isPaused: signal(true),
            isInProgress: signal(false),
            progress: signal({ current: 1, total: 10 }),
            reset: jasmine.createSpy(),
            previous: jasmine.createSpy(),
            toggleFlip: jasmine.createSpy(),
            togglePause: jasmine.createSpy(),
          },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz);
    component = fixture.componentInstance;
    quizStoreService = TestBed.inject(QuizStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call start on construction', () => {
    expect(quizStoreService.start).toHaveBeenCalled();
  });

  describe('onTimerComplete', () => {
    it('should call next on the quiz store', () => {
      component.onTimerComplete();

      expect(quizStoreService.next).toHaveBeenCalled();
    });
  });

  describe('progressState effect', () => {
    it('should navigate to result when state is FINISHED', async () => {
      const navigationService = TestBed.inject(NavigationService);

      (quizStoreService.progressState as WritableSignal<string>).set(FINISHED);
      await fixture.whenStable();

      expect(navigationService.navigate).toHaveBeenCalledWith('result');
    });

    it('should start progress bar when state is IN_PROGRESS', async () => {
      const progressBar = fixture.debugElement.query(By.directive(ProgressBar)).componentInstance as ProgressBar;
      spyOn(progressBar, 'start');

      (quizStoreService.progressState as WritableSignal<string>).set(IN_PROGRESS);
      await fixture.whenStable();

      expect(progressBar.start).toHaveBeenCalledWith(3000);
    });

    it('should reset progress bar when index changes during IN_PROGRESS', async () => {
      const progressBar = fixture.debugElement.query(By.directive(ProgressBar)).componentInstance as ProgressBar;
      spyOn(progressBar, 'reset');
      spyOn(progressBar, 'start');

      (quizStoreService.index as WritableSignal<number>).set(1);
      (quizStoreService.progressState as WritableSignal<string>).set(IN_PROGRESS);
      await fixture.whenStable();

      expect(progressBar.reset).toHaveBeenCalled();
      expect(progressBar.start).toHaveBeenCalledWith(3000);
    });
  });
});
