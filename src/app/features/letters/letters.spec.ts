import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Letters } from './letters';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('Letters', () => {
  let component: Letters;
  let fixture: ComponentFixture<Letters>;
  let appStoreService: AppStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Letters, TranslateModule.forRoot()],
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
          useValue: {
            selected: signal([]),
            totalCount: signal(0),
            toggleLetter: jasmine.createSpy(),
            selectByCategory: jasmine.createSpy(),
            deselectByCategory: jasmine.createSpy(),
            toggleByCategory: jasmine.createSpy(),
            getCountByCategory: jasmine.createSpy().and.returnValue(0),
          },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Letters);
    component = fixture.componentInstance;
    appStoreService = TestBed.inject(AppStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeTab(0) on construction', () => {
    expect(appStoreService.changeTab).toHaveBeenCalledWith(0);
  });
});
