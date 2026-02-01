import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz } from './quiz';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { THAI_CONSONANTS } from '../../data';
import { IN_PROGRESS, LATIN, MIXED, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;

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
      size: jasmine.createSpy().and.returnValue(0),
      state: jasmine.createSpy().and.returnValue(IN_PROGRESS),
      canGoBack: jasmine.createSpy().and.returnValue(false),
      canGoForward: jasmine.createSpy().and.returnValue(true),
    });

    await TestBed.configureTestingModule({
      imports: [Quiz, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: QuizService,
          useValue: quizServiceSpy,
        },
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
