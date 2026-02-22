import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { QuizNavigation } from './quiz-navigation';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';

describe('QuizNavigation', () => {
  let component: QuizNavigation;
  let fixture: ComponentFixture<QuizNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizNavigation],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: { isDarkThemeActive: signal(false) },
        },
        {
          provide: QuizStoreService,
          useValue: {
            canGoBack: signal(false),
            canGoForward: signal(true),
            delay: signal(3),
            isPaused: signal(false),
            isInProgress: signal(true),
            next: jasmine.createSpy(),
            previous: jasmine.createSpy(),
            togglePause: jasmine.createSpy(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
