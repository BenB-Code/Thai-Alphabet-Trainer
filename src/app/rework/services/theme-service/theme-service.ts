import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { DARK, KANIT, LIGHT, MOON, SARABUN, SRIRACHA, SUN } from '../../shared/constants';
import { FontsType, ThemeType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  theme = signal<ThemeType>(LIGHT);
  themeIcon = computed(() => (this.theme() === DARK ? `icons/${SUN}.svg` : `icons/${MOON}.svg`));
  isDarkThemeActive = computed(() => this.theme() === DARK);
  thaiFont = signal<FontsType>(SARABUN);

  constructor() {
    effect(() => {
      const theme = this.theme();
      if (theme === DARK) {
        this.document.documentElement.classList.add(DARK);
      } else {
        this.document.documentElement.classList.remove(DARK);
      }
    });

    effect(() => {
      const font = this.thaiFont();
      const list = this.document.getElementsByClassName('thai');
      Array.from(list).forEach(item => {
        item.classList.remove(SARABUN, KANIT, SRIRACHA);
        item.classList.add(font);
      });
    });
  }

  switchThaiFont(font: FontsType) {
    this.thaiFont.set(font);
  }

  toggleTheme() {
    this.theme.update(theme => (theme === LIGHT ? DARK : LIGHT));
  }
}
