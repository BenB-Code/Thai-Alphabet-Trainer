import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { InfoBubble } from './info-bubble';

describe('InfoBubble', () => {
  let component: InfoBubble;
  let fixture: ComponentFixture<InfoBubble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBubble],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBubble);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('info', 'test info');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with showInfos false', () => {
    expect(component.showInfos()).toBeFalse();
  });

  describe('toggleInfos', () => {
    it('should toggle showInfos to true', () => {
      component.toggleInfos();

      expect(component.showInfos()).toBeTrue();
    });

    it('should toggle showInfos back to false', () => {
      component.toggleInfos();
      component.toggleInfos();

      expect(component.showInfos()).toBeFalse();
    });
  });

  describe('onClick', () => {
    it('should toggle infos and stop propagation', () => {
      const event = new MouseEvent('click');
      spyOn(event, 'stopPropagation');

      component.onClick(event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.showInfos()).toBeTrue();
    });
  });

  describe('onTouch', () => {
    it('should toggle infos and prevent default', () => {
      const event = new TouchEvent('touchstart');
      spyOn(event, 'preventDefault');
      spyOn(event, 'stopPropagation');

      component.onTouch(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component.showInfos()).toBeTrue();
    });
  });

  describe('onTouchOutside', () => {
    it('should close infos', () => {
      component.toggleInfos();

      component.onTouchOutside();

      expect(component.showInfos()).toBeFalse();
    });
  });
});
