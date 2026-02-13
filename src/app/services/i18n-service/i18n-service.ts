import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../shared/models';
import { EN, FR } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly translateService = inject<TranslateService>(TranslateService);

  private readonly _activeLanguage = signal<Languages>(EN);

  activeLanguage = this._activeLanguage.asReadonly();

  switchLanguage(language: Languages) {
    this._activeLanguage.set(language);
    this.translateService.use(language);
  }

  toggleLanguage() {
    const activeLanguage = this._activeLanguage() === EN ? FR : EN;
    this.switchLanguage(activeLanguage);
  }
}
