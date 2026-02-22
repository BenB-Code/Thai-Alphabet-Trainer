import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { BurgerMenu } from './burger-menu';
import { TranslateModule } from '@ngx-translate/core';

describe('BurgerMenu', () => {
  let component: BurgerMenu;
  let fixture: ComponentFixture<BurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerMenu, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleMenu', () => {
    it('should open menu when closed', () => {
      component.toggleMenu();

      expect(component['isBurgerOpen']()).toBeTrue();
    });

    it('should close menu when open', () => {
      component.toggleMenu();
      component.toggleMenu();

      expect(component['isBurgerOpen']()).toBeFalse();
    });
  });

  describe('onClickOutside', () => {
    it('should close menu when clicking outside', () => {
      component.toggleMenu();
      const outsideElement = document.createElement('div');
      document.body.appendChild(outsideElement);

      component.onClickOutside(outsideElement);

      expect(component['isBurgerOpen']()).toBeFalse();
      outsideElement.remove();
    });

    it('should not close menu when clicking inside', () => {
      component.toggleMenu();

      component.onClickOutside(fixture.nativeElement);

      expect(component['isBurgerOpen']()).toBeTrue();
    });

    it('should do nothing when menu is already closed', () => {
      const outsideElement = document.createElement('div');
      document.body.appendChild(outsideElement);

      component.onClickOutside(outsideElement);

      expect(component['isBurgerOpen']()).toBeFalse();
      outsideElement.remove();
    });
  });
});
