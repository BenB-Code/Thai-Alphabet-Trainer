import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCard } from './quiz-card';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { THAI_CONSONANTS } from '../../data';
import { LATIN, MIXED, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('QuizCard', () => {
  let component: QuizCard;
  let fixture: ComponentFixture<QuizCard>;

  let quizServiceSpy: jasmine.SpyObj<QuizService>;

  beforeEach(async () => {
    quizServiceSpy = jasmine.createSpyObj('QuizService', [], {
      quizSettings: jasmine.createSpy().and.returnValue({
        display: LATIN,
        questions: 1,
        selected: [THAI_CONSONANTS],
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [{ ...THAI_CONSONANTS[0], display: MIXED }],
      }),
      index: jasmine.createSpy().and.returnValue(0),
    });

    await TestBed.configureTestingModule({
      imports: [QuizCard, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: QuizService,
          useValue: quizServiceSpy,
        },
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
