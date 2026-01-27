import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN } from '../../shared/constants';
import { Languages } from '../../shared/models/languages.type';

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
}
