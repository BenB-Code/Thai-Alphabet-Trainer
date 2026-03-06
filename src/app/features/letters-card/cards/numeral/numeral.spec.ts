import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numeral } from './numeral';

describe('Numeral', () => {
  let component: Numeral;
  let fixture: ComponentFixture<Numeral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numeral],
    }).compileComponents();

    fixture = TestBed.createComponent(Numeral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
