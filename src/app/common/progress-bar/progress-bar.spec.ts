import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  let component: ProgressBar;
  let fixture: ComponentFixture<ProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBar],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    component.stop();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial state', () => {
    it('should have timerPercent at 100', () => {
      expect(component.timerPercent()).toBe(100);
    });

    it('should have skipTransition at false', () => {
      expect(component.skipTransition()).toBeFalse();
    });
  });

  describe('start', () => {
    it('should set timerPercent to 100 on start', () => {
      component.start(5000);

      expect(component.timerPercent()).toBe(100);
    });

    it('should not restart if already running', () => {
      spyOn(window, 'requestAnimationFrame').and.callThrough();
      component.start(5000);
      const callCount = (window.requestAnimationFrame as jasmine.Spy).calls.count();

      component.start(5000);

      expect((window.requestAnimationFrame as jasmine.Spy).calls.count()).toBe(callCount);
    });
  });

  describe('stop', () => {
    it('should cancel animation frame', () => {
      spyOn(window, 'cancelAnimationFrame');
      component.start(5000);

      component.stop();

      expect(window.cancelAnimationFrame).toHaveBeenCalled();
    });

    it('should do nothing if not running', () => {
      spyOn(window, 'cancelAnimationFrame');

      component.stop();

      expect(window.cancelAnimationFrame).not.toHaveBeenCalled();
    });
  });

  describe('reset', () => {
    it('should reset timerPercent to 100', () => {
      component.timerPercent.set(50);

      component.reset(3000);

      expect(component.timerPercent()).toBe(100);
    });

    it('should set skipTransition to true then back to false', async () => {
      component.reset(3000);

      expect(component.skipTransition()).toBeTrue();

      await new Promise<void>(resolve => {
        requestAnimationFrame(() => resolve());
      });

      expect(component.skipTransition()).toBeFalse();
    });

    it('should stop before resetting', () => {
      spyOn(component, 'stop');

      component.reset(3000);

      expect(component.stop).toHaveBeenCalled();
    });

    it('should keep previous duration if none provided', () => {
      component.start(5000);
      component.stop();

      component.reset();

      expect(component.timerPercent()).toBe(100);
    });
  });

  describe('completion', () => {
    it('should emit completed when timer reaches 0', (done: DoneFn) => {
      component.completed.subscribe(() => {
        expect(component.timerPercent()).toBe(0);
        done();
      });

      component.start(1);
    });
  });
});
