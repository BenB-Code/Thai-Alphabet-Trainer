import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHeader } from './quiz-header';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { LATIN, QUIZ_FORM_BASE_CONF } from '../../shared/constants';
import { QuizFormat } from '../../shared/models';

describe('QuizHeader', () => {
  let component: QuizHeader;
  let fixture: ComponentFixture<QuizHeader>;

  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;
  let prepServiceSpy: jasmine.SpyObj<QuizPreparationService>;
  let sessionServiceSpy: jasmine.SpyObj<QuizSessionService>;

  beforeEach(async () => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);
    prepServiceSpy = jasmine.createSpyObj('QuizPreparationService', [], {
      quizSettings: signal<QuizFormat>({
        display: LATIN,
        questions: 1,
        selected: [],
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [],
      }),
    });
    sessionServiceSpy = jasmine.createSpyObj('QuizSessionService', ['reset'], {
      index: signal(0),
    });

    await TestBed.configureTestingModule({
      imports: [QuizHeader, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: NavigationService,
          useValue: navigationServiceSpy,
        },
        {
          provide: QuizPreparationService,
          useValue: prepServiceSpy,
        },
        {
          provide: QuizSessionService,
          useValue: sessionServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigation', () => {
    component.exit();

    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
  });
});
