import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingsPanelContent } from './quiz-settings-panel-content';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('QuizSettingsPanelContent', () => {
  let component: QuizSettingsPanelContent;
  let fixture: ComponentFixture<QuizSettingsPanelContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSettingsPanelContent, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSettingsPanelContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
