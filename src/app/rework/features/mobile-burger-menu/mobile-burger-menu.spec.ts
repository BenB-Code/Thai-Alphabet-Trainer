import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBurgerMenu } from './mobile-burger-menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('MobileBurgerMenu', () => {
  let component: MobileBurgerMenu;
  let fixture: ComponentFixture<MobileBurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileBurgerMenu, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileBurgerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
