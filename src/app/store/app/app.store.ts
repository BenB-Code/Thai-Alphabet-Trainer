import { computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { FontsType, Languages, ThemeType } from '../../shared/types';
import { DARK, EN, FR, KANIT, LIGHT, MOON, SARABUN, SRIRACHA, SUN } from '../../shared/constants';
import { TranslateService } from '@ngx-translate/core';

interface AppState {
  theme: ThemeType;
  thaiFont: FontsType;
  language: Languages;
  activeTab: number;
}

const STORAGE_KEY = 'thai-flashcard-config';

const INITIAL_STATE: AppState = {
  theme: LIGHT,
  thaiFont: SARABUN,
  language: EN,
  activeTab: 0,
};

function isTheme(value: unknown): value is ThemeType {
  return value === LIGHT || value === DARK;
}

function isFont(value: unknown): value is FontsType {
  return value === SARABUN || value === KANIT || value === SRIRACHA;
}

function isLanguage(value: unknown): value is Languages {
  return value === EN || value === FR;
}

function loadFromStorage(): Partial<AppState> | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    const state: Partial<AppState> = {};

    if (isTheme(parsed.theme)) state.theme = parsed.theme;
    if (isFont(parsed.thaiFont)) state.thaiFont = parsed.thaiFont;
    if (isLanguage(parsed.language)) state.language = parsed.language;
    if (typeof parsed.activeTab === 'number' && parsed.activeTab >= 0) state.activeTab = parsed.activeTab;

    return Object.keys(state).length > 0 ? state : null;
  } catch {
    return null;
  }
}

function saveToStorage(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>(INITIAL_STATE),
  withComputed(({ theme }) => ({
    themeIcon: computed(() => (theme() === DARK ? `icons/${SUN}.svg` : `icons/${MOON}.svg`)),
    isDarkThemeActive: computed(() => theme() === DARK),
  })),
  withMethods((store, translateService = inject(TranslateService)) => ({
    toggleTheme(): void {
      patchState(store, { theme: store.theme() === LIGHT ? DARK : LIGHT });
    },

    switchFont(font: FontsType): void {
      patchState(store, { thaiFont: font });
    },

    switchLanguage(lang: Languages): void {
      patchState(store, { language: lang });
      translateService.use(lang);
    },

    toggleLanguage(): void {
      const next = store.language() === EN ? FR : EN;
      patchState(store, { language: next });
      translateService.use(next);
    },

    changeTab(index: number): void {
      patchState(store, { activeTab: index });
    },
  })),
  withHooks({
    onInit(store) {
      const document = inject(DOCUMENT);
      const platformId = inject(PLATFORM_ID);
      const translateService = inject(TranslateService);
      const isBrowser = isPlatformBrowser(platformId);

      if (isBrowser) {
        const saved = loadFromStorage();
        if (saved) {
          patchState(store, saved);
          if (saved.language) {
            translateService.use(saved.language);
          }
        }
      }

      effect(() => {
        const theme = store.theme();
        if (theme === DARK) {
          document.documentElement.classList.add(DARK);
        } else {
          document.documentElement.classList.remove(DARK);
        }
      });

      if (isBrowser) {
        effect(() => {
          saveToStorage({
            theme: store.theme(),
            thaiFont: store.thaiFont(),
            language: store.language(),
            activeTab: store.activeTab(),
          });
        });
      }
    },
  })
);
