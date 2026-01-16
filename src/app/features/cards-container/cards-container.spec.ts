import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContainer } from './cards-container';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CardsContainer', () => {
  let component: CardsContainer;
  let fixture: ComponentFixture<CardsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsContainer],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
