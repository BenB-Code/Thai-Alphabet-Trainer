import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicked output', () => {
    it('should emit when card is clicked', () => {
      spyOn(component.clicked, 'emit');
      const button = fixture.nativeElement.querySelector('button');

      button.click();

      expect(component.clicked.emit).toHaveBeenCalled();
    });

    it('should not emit when disabled', async () => {
      spyOn(component.clicked, 'emit');
      fixture.componentRef.setInput('disabled', true);
      await fixture.whenStable();
      const button = fixture.nativeElement.querySelector('button');

      button.click();

      expect(component.clicked.emit).not.toHaveBeenCalled();
    });
  });

  describe('host binding', () => {
    it('should set --card-color CSS variable from color input', async () => {
      fixture.componentRef.setInput('color', 'red');
      await fixture.whenStable();

      expect(fixture.nativeElement.style.getPropertyValue('--card-color')).toBe('red');
    });
  });

  describe('template classes', () => {
    it('should add active class when isActive is true', async () => {
      fixture.componentRef.setInput('isActive', true);
      await fixture.whenStable();
      const button = fixture.nativeElement.querySelector('button');

      expect(button.classList.contains('active')).toBeTrue();
    });

    it('should add clickable class by default', () => {
      const button = fixture.nativeElement.querySelector('button');

      expect(button.classList.contains('clickable')).toBeTrue();
    });

    it('should not have clickable class when clickable is false', async () => {
      fixture.componentRef.setInput('clickable', false);
      await fixture.whenStable();
      const button = fixture.nativeElement.querySelector('button');

      expect(button.classList.contains('clickable')).toBeFalse();
    });
  });
});
