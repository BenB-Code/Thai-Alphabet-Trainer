import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNav } from './quiz-nav';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { FINISHED, IN_PROGRESS } from '../../shared/constants';

describe('QuizNav', () => {
  let component: QuizNav;
  let fixture: ComponentFixture<QuizNav>;

  let sessionServiceSpy: jasmine.SpyObj<QuizSessionService>;
  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    sessionServiceSpy = jasmine.createSpyObj('QuizSessionService', ['next', 'previous', 'togglePause'], {
      progressState: signal(IN_PROGRESS),
      canGoBack: signal(false),
      canGoForward: signal(true),
    });
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [QuizNav],
      providers: [
        provideZonelessChangeDetection(),
        { provide: QuizSessionService, useValue: sessionServiceSpy },
        { provide: NavigationService, useValue: navigationServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate to result page', () => {
    sessionServiceSpy.progressState.update(() => FINISHED);
    fixture.detectChanges();

    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledWith('result');
  });
});
