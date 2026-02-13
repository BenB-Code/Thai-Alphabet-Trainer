import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { DARK, KANIT, LIGHT, MOON, SARABUN, SRIRACHA, SUN } from '../../shared/constants';
import { FontsType, ThemeType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  theme = signal<{ color: ThemeType; icon: string }>({ color: LIGHT, icon: `icons/${MOON}.svg` });
  font = signal<FontsType>(SARABUN);

  constructor() {
    effect(() => {
      this.changeTheme();
      this.changeFont();
    });
  }

  switchFont(font: FontsType) {
    this.font.set(font);
  }

  toggleTheme() {
    this.theme.update(theme =>
      theme.color === LIGHT ? { color: DARK, icon: `icons/${SUN}.svg` } : { color: LIGHT, icon: `icons/${MOON}.svg` }
    );
  }

  private changeFont() {
    this.document.documentElement.classList.remove(SARABUN, KANIT, SRIRACHA);
    this.document.documentElement.classList.add(this.font());
  }

  private changeTheme() {
    if (this.theme().color === DARK) {
      this.document.documentElement.classList.add(DARK);
    } else {
      this.document.documentElement.classList.remove(DARK);
    }
  }
}
