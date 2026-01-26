import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPanelForm } from './quiz-panel-form';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('QuizPanelForm', () => {
  let component: QuizPanelForm;
  let fixture: ComponentFixture<QuizPanelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPanelForm, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPanelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set questions value to minimum', () => {
    component.quiz.patchValue({ questions: -5 });

    expect(component.quiz.value.questions).toEqual(component.baseValues.questions.min);
  });

  it('should set questions value to maximum', () => {
    component.quiz.patchValue({ questions: 999 });

    expect(component.quiz.value.questions).toEqual(component.baseValues.questions.max);
  });
});
