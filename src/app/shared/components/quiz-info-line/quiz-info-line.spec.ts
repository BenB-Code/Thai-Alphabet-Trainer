import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection, signal } from '@angular/core';

import { QuizInfoLine } from './quiz-info-line';

@Component({
  imports: [QuizInfoLine],
  template: `<app-quiz-info-line [label]="label()">{{ content }}</app-quiz-info-line>`,
})
class TestHostComponent {
  label = signal('Test label');
  content = 'Test content';
}

describe('QuizInfoLine', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const quizInfoLine = fixture.nativeElement.querySelector('app-quiz-info-line');

    expect(quizInfoLine).toBeTruthy();
  });

  it('should display the label with colon', () => {
    const span = fixture.nativeElement.querySelector('.label');

    expect(span.textContent).toContain('Test label :');
  });

  it('should project the content', () => {
    const p = fixture.nativeElement.querySelector('p');

    expect(p.textContent).toContain('Test content');
  });

  it('should update when label changes', async () => {
    hostComponent.label.set('New label');
    await fixture.whenStable();

    const span = fixture.nativeElement.querySelector('.label');

    expect(span.textContent).toContain('New label :');
  });
});
