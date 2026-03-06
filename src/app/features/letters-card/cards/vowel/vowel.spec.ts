import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vowel } from './vowel';

describe('Vowel', () => {
  let component: Vowel;
  let fixture: ComponentFixture<Vowel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vowel],
    }).compileComponents();

    fixture = TestBed.createComponent(Vowel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
