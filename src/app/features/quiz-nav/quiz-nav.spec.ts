import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNav } from './quiz-nav';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { FINISHED, IN_PROGRESS } from '../../shared/constants';

describe('QuizNav', () => {
  let component: QuizNav;
  let fixture: ComponentFixture<QuizNav>;

  let quizServiceSpy: jasmine.SpyObj<QuizService>;
  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    quizServiceSpy = jasmine.createSpyObj(
      'QuizService',
      ['canGoBack', 'decrProgress', 'canGoForward', 'incrProgress'],
      {
        state: signal(IN_PROGRESS),
      }
    );
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [QuizNav],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: QuizService,
          useValue: quizServiceSpy,
        },
        {
          provide: NavigationService,
          useValue: navigationServiceSpy,
        },
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
    quizServiceSpy.state.update(() => FINISHED);
    fixture.detectChanges();

    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
    expect(navigationServiceSpy.navigate).toHaveBeenCalledWith('result');
  });
});
