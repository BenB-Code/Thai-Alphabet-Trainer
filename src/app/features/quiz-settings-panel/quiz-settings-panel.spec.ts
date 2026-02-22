import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizSettingsPanel } from './quiz-settings-panel';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('QuizSettingsPanel', () => {
  let component: QuizSettingsPanel;
  let fixture: ComponentFixture<QuizSettingsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanel, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            activeTab: signal(0),
            isDarkThemeActive: signal(false),
            thaiFont: signal('sarabun'),
            language: signal('en'),
            theme: signal('light'),
            themeIcon: signal('icons/moon.svg'),
            translate: jasmine.createSpy().and.returnValue(''),
            switchFont: jasmine.createSpy(),
            changeTab: jasmine.createSpy(),
          },
        },
        {
          provide: QuizStoreService,
          useValue: {
            delay: signal(3),
            display: signal('thai'),
            questions: signal(10),
            isQuizValid: signal(true),
            updateDelay: jasmine.createSpy(),
            updateDisplay: jasmine.createSpy(),
            updateQuestions: jasmine.createSpy(),
            generateQuizList: jasmine.createSpy(),
          },
        },
        {
          provide: SelectionStoreService,
          useValue: { totalCount: signal(5) },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleOpen', () => {
    it('should open when closed', () => {
      component.toggleOpen();

      expect(component.isOpen()).toBeTrue();
    });

    it('should close when open', () => {
      component.toggleOpen();
      component.toggleOpen();

      expect(component.isOpen()).toBeFalse();
    });
  });
});
