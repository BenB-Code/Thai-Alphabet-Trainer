import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
