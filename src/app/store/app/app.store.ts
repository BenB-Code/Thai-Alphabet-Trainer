import { computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { TranslateService } from '@ngx-translate/core';
import { DARK, EN, FR, IPA, KANIT, LIGHT, MOON, RTGS, SARABUN, SRIRACHA, SUN } from '../../shared/constants';
import { FontType, LanguagesType, PronunciationsType, ThemeType } from '../../shared/types';

interface AppState {
  theme: ThemeType;
  thaiFont: FontType;
  pronunciation: PronunciationsType;
  language: LanguagesType;
  activeTab: number;
}

const STORAGE_KEY = 'thai-flashcard-config';

const INITIAL_STATE: AppState = {
  theme: LIGHT,
  thaiFont: SARABUN,
  pronunciation: RTGS,
  language: EN,
  activeTab: 0,
};

function isTheme(value: unknown): value is ThemeType {
  return value === LIGHT || value === DARK;
}

function isFont(value: unknown): value is FontType {
  return value === SARABUN || value === KANIT || value === SRIRACHA;
}

function isLanguage(value: unknown): value is LanguagesType {
  return value === EN || value === FR;
}

function isPronunciation(value: unknown): value is PronunciationsType {
  return value === RTGS || value === IPA;
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
    if (isPronunciation(parsed.pronunciation)) state.pronunciation = parsed.pronunciation;
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

    switchFont(font: FontType): void {
      patchState(store, { thaiFont: font });
    },

    switchPronunciation(pronunciation: PronunciationsType): void {
      patchState(store, { pronunciation: pronunciation });
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

        effect(() => {
          saveToStorage({
            theme: store.theme(),
            thaiFont: store.thaiFont(),
            pronunciation: store.pronunciation(),
            language: store.language(),
            activeTab: store.activeTab(),
          });
        });
      }

      effect(() => {
        const theme = store.theme();
        if (theme === DARK) {
          document.documentElement.classList.add(DARK);
        } else {
          document.documentElement.classList.remove(DARK);
        }
      });
    },
  })
);
