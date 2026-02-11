import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersTab } from './letters-tab';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('LettersTab', () => {
  let component: LettersTab;
  let fixture: ComponentFixture<LettersTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersTab, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keepOrder - it should return 0', () => {
    expect(component.keepOrder()).toBe(0);
  });
});
