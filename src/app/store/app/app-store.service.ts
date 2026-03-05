import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppStore } from './app.store';
import { FontType, LanguagesType, PronunciationsType } from '../../shared/types';

@Injectable({ providedIn: 'root' })
export class AppStoreService {
  private readonly store = inject(AppStore);
  private readonly translateService = inject(TranslateService);

  readonly theme = this.store.theme;
  readonly thaiFont = this.store.thaiFont;
  readonly pronunciation = this.store.pronunciation;
  readonly language = this.store.language;
  readonly activeTab = this.store.activeTab;
  readonly themeIcon = this.store.themeIcon;
  readonly isDarkThemeActive = this.store.isDarkThemeActive;

  toggleTheme(): void {
    this.store.toggleTheme();
  }

  switchFont(font: FontType): void {
    this.store.switchFont(font);
  }

  switchPronunciation(pronunciation: PronunciationsType): void {
    this.store.switchPronunciation(pronunciation);
  }

  switchLanguage(lang: LanguagesType): void {
    this.store.switchLanguage(lang);
  }

  toggleLanguage(): void {
    this.store.toggleLanguage();
  }

  changeTab(index: number): void {
    this.store.changeTab(index);
  }

  translate(key: string): string {
    return this.translateService.instant(key);
  }
}
