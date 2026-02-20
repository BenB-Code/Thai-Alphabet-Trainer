import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingsPanel } from './quiz-settings-panel';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizSettingsPanel', () => {
  let component: QuizSettingsPanel;
  let fixture: ComponentFixture<QuizSettingsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanel],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
