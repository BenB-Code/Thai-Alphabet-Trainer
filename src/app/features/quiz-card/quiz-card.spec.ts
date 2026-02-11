import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCard } from './quiz-card';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { THAI_CONSONANTS } from '../../data';
import { LATIN, MIXED, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('QuizCard', () => {
  let component: QuizCard;
  let fixture: ComponentFixture<QuizCard>;

  let prepServiceSpy: jasmine.SpyObj<QuizPreparationService>;
  let sessionServiceSpy: jasmine.SpyObj<QuizSessionService>;

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

    sessionServiceSpy = jasmine.createSpyObj('QuizSessionService', ['toggleFlip'], {
      index: signal(0),
      flipped: signal(true),
      cardAnimation: signal(null),
    });

    await TestBed.configureTestingModule({
      imports: [QuizCard, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        { provide: QuizPreparationService, useValue: prepServiceSpy },
        { provide: QuizSessionService, useValue: sessionServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
