import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNav } from './quiz-nav';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizNav', () => {
  let component: QuizNav;
  let fixture: ComponentFixture<QuizNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizNav],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
