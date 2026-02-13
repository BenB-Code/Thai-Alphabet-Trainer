import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSwitchSelector } from './font-switch-selector';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FontSwitchSelector', () => {
  let component: FontSwitchSelector;
  let fixture: ComponentFixture<FontSwitchSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSwitchSelector],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FontSwitchSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
