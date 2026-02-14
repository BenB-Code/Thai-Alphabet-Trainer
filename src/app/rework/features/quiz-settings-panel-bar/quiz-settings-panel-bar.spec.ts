import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingsPanelBar } from './quiz-settings-panel-bar';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizSettingsPanelBar', () => {
  let component: QuizSettingsPanelBar;
  let fixture: ComponentFixture<QuizSettingsPanelBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanelBar, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanelBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
