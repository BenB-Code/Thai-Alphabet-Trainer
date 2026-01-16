import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPanel } from './quiz-panel';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizPanel', () => {
  let component: QuizPanel;
  let fixture: ComponentFixture<QuizPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPanel],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
