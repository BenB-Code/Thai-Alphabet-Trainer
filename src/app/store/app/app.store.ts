import { computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>({
    theme: LIGHT,
    thaiFont: SARABUN,
    language: EN,
    activeTab: 0,
  }),
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

      effect(() => {
        const theme = store.theme();
        if (theme === DARK) {
          document.documentElement.classList.add(DARK);
        } else {
          document.documentElement.classList.remove(DARK);
        }
      });

      effect(() => {
        const font = store.thaiFont();
        const list = document.getElementsByClassName('thai');
        Array.from(list).forEach(item => {
          item.classList.remove(SARABUN, KANIT, SRIRACHA);
          item.classList.add(font);
        });
      });
    },
  })
);
