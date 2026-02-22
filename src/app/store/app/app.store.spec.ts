import { Component, PLATFORM_ID, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { AppStore } from './app.store';
import { DARK, EN, FR, KANIT, LIGHT, SARABUN, SRIRACHA } from '../../shared/constants';

const STORAGE_KEY = 'thai-flashcard-config';

@Component({ template: '', standalone: true })
class NoopComponent {}

describe('AppStore', () => {
  let translateService: jasmine.SpyObj<TranslateService>;
  let fixture: ComponentFixture<NoopComponent>;
  let addSpy: jasmine.Spy;
  let removeSpy: jasmine.Spy;

  function setup(platformId = 'browser'): void {
    addSpy = spyOn(document.documentElement.classList, 'add');
    removeSpy = spyOn(document.documentElement.classList, 'remove');

    TestBed.configureTestingModule({
      imports: [NoopComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: TranslateService, useValue: jasmine.createSpyObj('TranslateService', ['use', 'instant']) },
        { provide: PLATFORM_ID, useValue: platformId },
      ],
    });

    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  }

  async function createStore(): Promise<InstanceType<typeof AppStore>> {
    const store = TestBed.inject(AppStore);
    fixture = TestBed.createComponent(NoopComponent);
    await fixture.whenStable();
    return store;
  }

  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  describe('initial state', () => {
    beforeEach(() => setup());

    it('should have default values', async () => {
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
      expect(store.thaiFont()).toBe(SARABUN);
      expect(store.language()).toBe(EN);
      expect(store.activeTab()).toBe(0);
    });
  });

  describe('computed signals', () => {
    beforeEach(() => setup());

    it('should return moon icon and isDarkThemeActive false for light theme', async () => {
      const store = await createStore();
      expect(store.themeIcon()).toBe('icons/moon.svg');
      expect(store.isDarkThemeActive()).toBeFalse();
    });

    it('should return sun icon and isDarkThemeActive true for dark theme', async () => {
      const store = await createStore();
      store.toggleTheme();
      expect(store.themeIcon()).toBe('icons/sun.svg');
      expect(store.isDarkThemeActive()).toBeTrue();
    });
  });

  describe('methods', () => {
    beforeEach(() => setup());

    it('toggleTheme should switch light to dark', async () => {
      const store = await createStore();
      store.toggleTheme();
      expect(store.theme()).toBe(DARK);
    });

    it('toggleTheme should switch dark to light', async () => {
      const store = await createStore();
      store.toggleTheme();
      store.toggleTheme();
      expect(store.theme()).toBe(LIGHT);
    });

    it('switchFont should set the font', async () => {
      const store = await createStore();
      store.switchFont(KANIT);
      expect(store.thaiFont()).toBe(KANIT);
    });

    it('switchLanguage should set language and call translateService.use', async () => {
      const store = await createStore();
      store.switchLanguage(FR);
      expect(store.language()).toBe(FR);
      expect(translateService.use).toHaveBeenCalledWith(FR);
    });

    it('toggleLanguage should toggle EN to FR', async () => {
      const store = await createStore();
      store.toggleLanguage();
      expect(store.language()).toBe(FR);
      expect(translateService.use).toHaveBeenCalledWith(FR);
    });

    it('toggleLanguage should toggle FR to EN', async () => {
      const store = await createStore();
      store.toggleLanguage();
      store.toggleLanguage();
      expect(store.language()).toBe(EN);
      expect(translateService.use).toHaveBeenCalledWith(EN);
    });

    it('changeTab should set active tab', async () => {
      const store = await createStore();
      store.changeTab(2);
      expect(store.activeTab()).toBe(2);
    });
  });

  describe('localStorage hydration (browser)', () => {
    beforeEach(() => setup('browser'));

    it('should restore all valid fields', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: DARK, thaiFont: KANIT, language: FR, activeTab: 2 }));
      const store = await createStore();
      expect(store.theme()).toBe(DARK);
      expect(store.thaiFont()).toBe(KANIT);
      expect(store.language()).toBe(FR);
      expect(store.activeTab()).toBe(2);
      expect(translateService.use).toHaveBeenCalledWith(FR);
    });

    it('should restore light theme', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: LIGHT }));
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
    });

    it('should restore sarabun font', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ thaiFont: SARABUN }));
      const store = await createStore();
      expect(store.thaiFont()).toBe(SARABUN);
    });

    it('should restore sriracha font', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ thaiFont: SRIRACHA }));
      const store = await createStore();
      expect(store.thaiFont()).toBe(SRIRACHA);
    });

    it('should restore en language', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ language: EN }));
      const store = await createStore();
      expect(store.language()).toBe(EN);
    });

    it('should not call translateService.use without saved language', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: DARK }));
      await createStore();
      expect(translateService.use).not.toHaveBeenCalled();
    });

    it('should ignore invalid values and keep defaults', async () => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme: 'invalid', thaiFont: 123, language: null, activeTab: -1 })
      );
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
      expect(store.thaiFont()).toBe(SARABUN);
      expect(store.language()).toBe(EN);
      expect(store.activeTab()).toBe(0);
    });

    it('should return defaults when no valid properties found', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ foo: 'bar' }));
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
    });

    it('should handle invalid JSON gracefully', async () => {
      localStorage.setItem(STORAGE_KEY, 'not json');
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
    });

    it('should handle non-numeric activeTab', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeTab: 'abc' }));
      const store = await createStore();
      expect(store.activeTab()).toBe(0);
    });

    it('should handle empty localStorage', async () => {
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
    });
  });

  describe('theme class effect', () => {
    beforeEach(() => setup());

    it('should remove dark class for light theme', async () => {
      await createStore();
      expect(removeSpy).toHaveBeenCalledWith(DARK);
    });

    it('should add dark class when theme is dark', async () => {
      const store = await createStore();
      store.toggleTheme();
      await fixture.whenStable();
      expect(addSpy).toHaveBeenCalledWith(DARK);
    });
  });

  describe('localStorage persistence effect', () => {
    beforeEach(() => setup());

    it('should save initial state to localStorage', async () => {
      await createStore();
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.theme).toBe(LIGHT);
      expect(saved.thaiFont).toBe(SARABUN);
      expect(saved.language).toBe(EN);
      expect(saved.activeTab).toBe(0);
    });

    it('should update localStorage when state changes', async () => {
      const store = await createStore();
      store.toggleTheme();
      await fixture.whenStable();
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      expect(saved.theme).toBe(DARK);
    });
  });

  describe('server-side rendering', () => {
    beforeEach(() => setup('server'));

    it('should not hydrate from localStorage', async () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: DARK }));
      const store = await createStore();
      expect(store.theme()).toBe(LIGHT);
    });
  });
});
