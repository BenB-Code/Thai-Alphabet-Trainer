import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diacritics } from './diacritics';

describe('Diacritics', () => {
  let component: Diacritics;
  let fixture: ComponentFixture<Diacritics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diacritics],
    }).compileComponents();

    fixture = TestBed.createComponent(Diacritics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
