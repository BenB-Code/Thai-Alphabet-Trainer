import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { DARK, KANIT, LIGHT, MOON, SARABUN, SRIRACHA, SUN } from '../../shared/constants';
import { FontsType, ThemeType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  theme = signal<{ color: ThemeType; icon: string }>({ color: LIGHT, icon: `icons/${MOON}.svg` });
  isDarkThemeActive = computed(() => this.theme().color === DARK);
  thaiFont = signal<FontsType>(KANIT);

  constructor() {
    effect(() => {
      this.changeTheme();
    });

    effect(() => {
      this.changeFont();
    });
  }

  switchThaiFont(font: FontsType) {
    this.thaiFont.set(font);
  }

  toggleTheme() {
    this.theme.update(theme =>
      theme.color === LIGHT ? { color: DARK, icon: `icons/${SUN}.svg` } : { color: LIGHT, icon: `icons/${MOON}.svg` }
    );
  }

  private changeFont() {
    const list = this.document.getElementsByClassName('thai');
    Array.from(list).forEach(item => {
      item.classList.remove(SARABUN, KANIT, SRIRACHA);
      item.classList.add(this.thaiFont());
    });
  }

  private changeTheme() {
    if (this.theme().color === DARK) {
      this.document.documentElement.classList.add(DARK);
    } else {
      this.document.documentElement.classList.remove(DARK);
    }
  }
}
