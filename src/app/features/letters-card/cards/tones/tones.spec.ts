import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tones } from './tones';

describe('Tones', () => {
  let component: Tones;
  let fixture: ComponentFixture<Tones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tones],
    }).compileComponents();

    fixture = TestBed.createComponent(Tones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
