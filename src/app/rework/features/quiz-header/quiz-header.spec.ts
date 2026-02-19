import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHeader } from './quiz-header';

describe('QuizHeader', () => {
  let component: QuizHeader;
  let fixture: ComponentFixture<QuizHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
