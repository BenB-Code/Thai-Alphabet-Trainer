import { TestBed } from '@angular/core/testing';
import { Component, PLATFORM_ID, provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppStoreService } from './app-store.service';
import { DARK, EN, FR, KANIT, LIGHT, SARABUN } from '../../shared/constants';

@Component({ template: '', standalone: true })
class NoopComponent {}

describe('AppStoreService', () => {
  let service: AppStoreService;
  let translateService: TranslateService;

  beforeEach(async () => {
    localStorage.clear();
    spyOn(document.documentElement.classList, 'add');
    spyOn(document.documentElement.classList, 'remove');

    TestBed.configureTestingModule({
      imports: [NoopComponent, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection(), { provide: PLATFORM_ID, useValue: 'browser' }],
    });

    service = TestBed.inject(AppStoreService);
    translateService = TestBed.inject(TranslateService);
    const fixture = TestBed.createComponent(NoopComponent);
    await fixture.whenStable();
  });

  afterEach(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('signal delegations', () => {
    it('should expose theme', () => {
      expect(service.theme()).toBe(LIGHT);
    });

    it('should expose thaiFont', () => {
      expect(service.thaiFont()).toBe(SARABUN);
    });

    it('should expose language', () => {
      expect(service.language()).toBe(EN);
    });

    it('should expose activeTab', () => {
      expect(service.activeTab()).toBe(0);
    });

    it('should expose themeIcon', () => {
      expect(service.themeIcon()).toBe('icons/moon.svg');
    });

    it('should expose isDarkThemeActive', () => {
      expect(service.isDarkThemeActive()).toBeFalse();
    });
  });

  describe('toggleTheme', () => {
    it('should toggle theme', () => {
      service.toggleTheme();
      expect(service.theme()).toBe(DARK);
    });
  });

  describe('switchFont', () => {
    it('should switch font', () => {
      service.switchFont(KANIT);
      expect(service.thaiFont()).toBe(KANIT);
    });
  });

  describe('switchLanguage', () => {
    it('should switch language', () => {
      service.switchLanguage(FR);
      expect(service.language()).toBe(FR);
    });
  });

  describe('toggleLanguage', () => {
    it('should toggle language', () => {
      service.toggleLanguage();
      expect(service.language()).toBe(FR);
    });
  });

  describe('changeTab', () => {
    it('should change active tab', () => {
      service.changeTab(1);
      expect(service.activeTab()).toBe(1);
    });
  });

  describe('translate', () => {
    it('should delegate to translateService.instant', () => {
      spyOn(translateService, 'instant').and.returnValue('translated');
      expect(service.translate('key')).toBe('translated');
      expect(translateService.instant).toHaveBeenCalledWith('key');
    });
  });
});
