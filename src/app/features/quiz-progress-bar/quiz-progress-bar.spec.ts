import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressBar } from './quiz-progress-bar';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizProgressBar', () => {
  let component: QuizProgressBar;
  let fixture: ComponentFixture<QuizProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizProgressBar],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
