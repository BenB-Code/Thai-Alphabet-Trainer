import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template rendering', () => {
    it('should display title', async () => {
      fixture.componentRef.setInput('title', 'Test Title');
      await fixture.whenStable();
      const title = fixture.nativeElement.querySelector('.title');

      expect(title.textContent).toContain('Test Title');
    });

    it('should display subtitle', async () => {
      fixture.componentRef.setInput('subtitle', 'Test Subtitle');
      await fixture.whenStable();
      const subtitle = fixture.nativeElement.querySelector('.subtitle');

      expect(subtitle.textContent).toContain('Test Subtitle');
    });

    it('should default title to empty string', () => {
      const title = fixture.nativeElement.querySelector('.title');

      expect(title.textContent.trim()).toBe('');
    });
  });
});
