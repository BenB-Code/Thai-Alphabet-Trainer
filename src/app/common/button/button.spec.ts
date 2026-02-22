import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicked output', () => {
    it('should emit when button is clicked', () => {
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
    it('should set --color CSS variable from color input', async () => {
      fixture.componentRef.setInput('color', '--primary');
      await fixture.whenStable();

      expect(fixture.nativeElement.style.getPropertyValue('--color')).toBe('var(--primary)');
    });

    it('should default --color to --accent', () => {
      expect(fixture.nativeElement.style.getPropertyValue('--color')).toBe('var(--accent)');
    });
  });
});
