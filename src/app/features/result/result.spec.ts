import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Result } from './result';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('Result', () => {
  let component: Result;
  let fixture: ComponentFixture<Result>;
  let navigationService: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Result, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            thaiFont: signal('sarabun'),
            language: signal('en'),
          },
        },
        {
          provide: QuizStoreService,
          useValue: {
            questions: signal(10),
            randomized: signal([]),
          },
        },
        {
          provide: NavigationService,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Result);
    component = fixture.componentInstance;
    navigationService = TestBed.inject(NavigationService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goBack', () => {
    it('should navigate to home', () => {
      component.goBack();

      expect(navigationService.navigate).toHaveBeenCalledWith('');
    });
  });
});
