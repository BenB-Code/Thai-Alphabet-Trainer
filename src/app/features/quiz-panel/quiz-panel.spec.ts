import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPanel } from './quiz-panel';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { QuizFormat } from '../../shared/models';
import { LATIN, QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('QuizPanel', () => {
  let component: QuizPanel;
  let fixture: ComponentFixture<QuizPanel>;

  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;
  let prepServiceSpy: jasmine.SpyObj<QuizPreparationService>;
  let sessionServiceSpy: jasmine.SpyObj<QuizSessionService>;

  beforeEach(async () => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);
    prepServiceSpy = jasmine.createSpyObj('QuizPreparationService', ['generateQuizList'], {
      quizSettings: signal<QuizFormat>({
        display: LATIN,
        questions: 10,
        selected: [],
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [],
      }),
      isValid: signal(true),
    });
    sessionServiceSpy = jasmine.createSpyObj('QuizSessionService', ['reset']);

    await TestBed.configureTestingModule({
      imports: [QuizPanel, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: QuizPreparationService, useValue: prepServiceSpy },
        { provide: QuizSessionService, useValue: sessionServiceSpy },
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

    expect(prepServiceSpy.generateQuizList).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledWith('quiz');
  });
});
