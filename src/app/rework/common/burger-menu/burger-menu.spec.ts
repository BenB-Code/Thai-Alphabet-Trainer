import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenu } from './burger-menu';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BurgerMenu', () => {
  let component: BurgerMenu;
  let fixture: ComponentFixture<BurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerMenu],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
