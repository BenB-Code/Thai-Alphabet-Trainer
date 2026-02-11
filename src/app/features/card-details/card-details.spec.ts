import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetails } from './card-details';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CardDetails', () => {
  let component: CardDetails;
  let fixture: ComponentFixture<CardDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetails],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
