import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizSettingsPanelBar } from './quiz-settings-panel-bar';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('QuizSettingsPanelBar', () => {
  let component: QuizSettingsPanelBar;
  let fixture: ComponentFixture<QuizSettingsPanelBar>;
  let quizStoreService: QuizStoreService;
  let navigationService: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanelBar, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: { isDarkThemeActive: signal(false) },
        },
        {
          provide: QuizStoreService,
          useValue: {
            delay: signal(3),
            questions: signal(10),
            isQuizValid: signal(true),
            generateQuizList: jasmine.createSpy('generateQuizList'),
          },
        },
        {
          provide: SelectionStoreService,
          useValue: { totalCount: signal(5) },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanelBar);
    component = fixture.componentInstance;
    quizStoreService = TestBed.inject(QuizStoreService);
    navigationService = TestBed.inject(NavigationService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleOpenEvent', () => {
    it('should emit toggleOpen output', () => {
      spyOn(component.toggleOpen, 'emit');

      component.toggleOpenEvent();

      expect(component.toggleOpen.emit).toHaveBeenCalled();
    });
  });

  describe('startQuiz', () => {
    it('should generate quiz list and navigate to quiz', () => {
      component.startQuiz();

      expect(quizStoreService.generateQuizList).toHaveBeenCalled();
      expect(navigationService.navigate).toHaveBeenCalledWith('quiz');
    });
  });
});
