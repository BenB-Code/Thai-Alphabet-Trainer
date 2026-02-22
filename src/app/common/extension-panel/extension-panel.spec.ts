import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ExtensionPanel } from './extension-panel';

describe('ExtensionPanel', () => {
  let component: ExtensionPanel;
  let fixture: ComponentFixture<ExtensionPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionPanel],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtensionPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('open state', () => {
    it('should not have open class by default', () => {
      const container = fixture.nativeElement.querySelector('.container');

      expect(container.classList.contains('open')).toBeFalse();
    });

    it('should add open class when open is true', async () => {
      fixture.componentRef.setInput('open', true);
      await fixture.whenStable();
      const container = fixture.nativeElement.querySelector('.container');

      expect(container.classList.contains('open')).toBeTrue();
    });
  });
});
