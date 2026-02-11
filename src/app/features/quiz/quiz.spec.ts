import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz } from './quiz';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { QuizTimerService } from '../../services/quiz-timer-service/quiz-timer-service';
import { THAI_CONSONANTS } from '../../data';
import { IN_PROGRESS, LATIN, MIXED, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;

  let prepServiceSpy: jasmine.SpyObj<QuizPreparationService>;
  let sessionServiceSpy: jasmine.SpyObj<QuizSessionService>;
  let timerServiceSpy: jasmine.SpyObj<QuizTimerService>;

  beforeEach(async () => {
    prepServiceSpy = jasmine.createSpyObj('QuizPreparationService', [], {
      quizSettings: signal({
        display: LATIN,
        questions: 1,
        selected: [THAI_CONSONANTS],
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [{ ...THAI_CONSONANTS[0], display: MIXED }],
      }),
    });

    sessionServiceSpy = jasmine.createSpyObj(
      'QuizSessionService',
      ['start', 'toggleFlip', 'next', 'previous', 'togglePause'],
      {
        index: signal(0),
        progressState: signal(IN_PROGRESS),
        canGoBack: signal(false),
        canGoForward: signal(true),
        flipped: signal(false),
        cardAnimation: signal(null),
      }
    );
    timerServiceSpy = jasmine.createSpyObj('QuizTimerService', [], {
      timerPercent: signal(100),
      skipTransition: signal(false),
    });

    await TestBed.configureTestingModule({
      imports: [Quiz, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        { provide: QuizPreparationService, useValue: prepServiceSpy },
        { provide: QuizSessionService, useValue: sessionServiceSpy },
        { provide: QuizTimerService, useValue: timerServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
