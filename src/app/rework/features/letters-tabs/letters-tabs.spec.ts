import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersTabs } from './letters-tabs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LettersTabs', () => {
  let component: LettersTabs;
  let fixture: ComponentFixture<LettersTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersTabs],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
