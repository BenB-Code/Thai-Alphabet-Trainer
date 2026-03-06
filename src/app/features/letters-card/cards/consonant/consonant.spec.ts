import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consonant } from './consonant';

describe('Consonant', () => {
  let component: Consonant;
  let fixture: ComponentFixture<Consonant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consonant],
    }).compileComponents();

    fixture = TestBed.createComponent(Consonant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
