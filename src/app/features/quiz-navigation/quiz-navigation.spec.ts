import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNavigation } from './quiz-navigation';

describe('QuizNavigation', () => {
  let component: QuizNavigation;
  let fixture: ComponentFixture<QuizNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
