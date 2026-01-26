import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPanelRecap } from './quiz-panel-recap';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('QuizPanelRecap', () => {
  let component: QuizPanelRecap;
  let fixture: ComponentFixture<QuizPanelRecap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPanelRecap, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPanelRecap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
