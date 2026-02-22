import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizSettingsPanelContent } from './quiz-settings-panel-content';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { QUIZ_FORM_BASE_CONF } from '../../shared/constants';

describe('QuizSettingsPanelContent', () => {
  let component: QuizSettingsPanelContent;
  let fixture: ComponentFixture<QuizSettingsPanelContent>;
  let quizStoreService: QuizStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanelContent, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            language: signal('en'),
            translate: jasmine.createSpy('translate').and.callFake((key: string) => key),
          },
        },
        {
          provide: QuizStoreService,
          useValue: {
            delay: signal(3),
            display: signal('thai'),
            questions: signal(10),
            updateDelay: jasmine.createSpy('updateDelay'),
            updateDisplay: jasmine.createSpy('updateDisplay'),
            updateQuestions: jasmine.createSpy('updateQuestions'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanelContent);
    component = fixture.componentInstance;
    quizStoreService = TestBed.inject(QuizStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delayList', () => {
    it('should have 5 delay options', () => {
      expect(component.delayList.length).toBe(5);
    });
  });

  describe('delayChange', () => {
    it('should update delay with the corresponding value', () => {
      component.delayChange(0);

      expect(quizStoreService.updateDelay).toHaveBeenCalledWith(QUIZ_FORM_BASE_CONF.delay[0]);
    });
  });

  describe('displayChange', () => {
    it('should update display with the corresponding value', () => {
      component.displayChange(1);

      expect(quizStoreService.updateDisplay).toHaveBeenCalledWith(QUIZ_FORM_BASE_CONF.display[1].value);
    });
  });

  describe('questionsChange', () => {
    it('should clamp value to min', () => {
      const event = { target: { value: '0' } } as unknown as Event;

      component.questionsChange(event);

      expect(quizStoreService.updateQuestions).toHaveBeenCalledWith(QUIZ_FORM_BASE_CONF.questions.min);
    });

    it('should clamp value to max', () => {
      const event = { target: { value: '9999' } } as unknown as Event;

      component.questionsChange(event);

      expect(quizStoreService.updateQuestions).toHaveBeenCalledWith(QUIZ_FORM_BASE_CONF.questions.max);
    });

    it('should pass valid value through', () => {
      const event = { target: { value: '25' } } as unknown as Event;

      component.questionsChange(event);

      expect(quizStoreService.updateQuestions).toHaveBeenCalledWith(25);
    });
  });

  describe('displayList', () => {
    it('should compute display list from QUIZ_FORM_BASE_CONF', () => {
      const list = component.displayList();

      expect(list.length).toBe(QUIZ_FORM_BASE_CONF.display.length);
    });
  });
});
