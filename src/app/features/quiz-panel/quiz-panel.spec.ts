import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPanel } from './quiz-panel';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { QuizFormat } from '../../shared/models';
import { LATIN, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('QuizPanel', () => {
  let component: QuizPanel;
  let fixture: ComponentFixture<QuizPanel>;

  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;
  let quizServiceSpy: jasmine.SpyObj<QuizService>;

  beforeEach(async () => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);
    quizServiceSpy = jasmine.createSpyObj('QuizService', ['generateQuizList'], {
      quizSettings: signal<QuizFormat>({
        display: LATIN,
        questions: 10,
        selected: [],
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [],
      }),
      isValid: signal(true),
    });

    await TestBed.configureTestingModule({
      imports: [QuizPanel, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: NavigationService,
          useValue: navigationServiceSpy,
        },
        {
          provide: QuizService,
          useValue: quizServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate quiz list and navigate correctly', () => {
    component.startQuiz();

    expect(quizServiceSpy.generateQuizList).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledWith('quiz');
  });
});
