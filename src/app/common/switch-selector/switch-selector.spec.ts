import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSelector } from './switch-selector';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SwitchSelector', () => {
  let component: SwitchSelector;
  let fixture: ComponentFixture<SwitchSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchSelector],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
