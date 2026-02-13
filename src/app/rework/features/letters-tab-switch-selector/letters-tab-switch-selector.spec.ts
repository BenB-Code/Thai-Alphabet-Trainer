import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersTabSwitchSelector } from './letters-tab-switch-selector';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LettersTabSwitchSelector', () => {
  let component: LettersTabSwitchSelector;
  let fixture: ComponentFixture<LettersTabSwitchSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersTabSwitchSelector, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersTabSwitchSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
