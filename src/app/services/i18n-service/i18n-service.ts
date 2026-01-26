import { inject, Injectable, signal } from '@angular/core';
import { EN, LANGUAGES } from '../../shared/constants';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly translateService = inject<TranslateService>(TranslateService);

  private readonly _activeLanguage = signal<LANGUAGES>(EN);

  activeLanguage = this._activeLanguage.asReadonly();

  switchLanguage(language: LANGUAGES) {
    this._activeLanguage.set(language);
    this.translateService.use(language);
  }
}
