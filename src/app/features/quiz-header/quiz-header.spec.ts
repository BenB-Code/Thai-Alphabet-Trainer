import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { QuizHeader } from './quiz-header';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('QuizHeader', () => {
  let component: QuizHeader;
  let fixture: ComponentFixture<QuizHeader>;
  let quizStoreService: QuizStoreService;
  let navigationService: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizHeader],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: { isDarkThemeActive: signal(false) },
        },
        {
          provide: QuizStoreService,
          useValue: {
            progress: signal({ current: 3, total: 10 }),
            reset: jasmine.createSpy('reset'),
          },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizHeader);
    component = fixture.componentInstance;
    quizStoreService = TestBed.inject(QuizStoreService);
    navigationService = TestBed.inject(NavigationService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('quit', () => {
    it('should reset quiz and navigate to home', () => {
      component.quit();

      expect(quizStoreService.reset).toHaveBeenCalled();
      expect(navigationService.navigate).toHaveBeenCalledWith('');
    });
  });
});
