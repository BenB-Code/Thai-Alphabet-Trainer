import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { DARK, LIGHT, MOON, SUN } from '../../shared/constants';
import { ThemeType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  theme = signal<{ color: ThemeType; icon: string }>({ color: LIGHT, icon: `icons/${MOON}.svg` });

  constructor() {
    effect(() => {
      if (this.theme().color === DARK) {
        this.document.documentElement.classList.add(DARK);
      } else {
        this.document.documentElement.classList.remove(DARK);
      }
    });
  }

  toggleTheme() {
    this.theme.update(theme =>
      theme.color === LIGHT ? { color: DARK, icon: `icons/${SUN}.svg` } : { color: LIGHT, icon: `icons/${MOON}.svg` }
    );
  }
}
