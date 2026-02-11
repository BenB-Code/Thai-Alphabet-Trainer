import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN, FR } from '../../shared/constants';
import { Languages } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly translateService = inject<TranslateService>(TranslateService);

  private readonly _activeLanguage = signal<Languages>(this.detectLanguage());

  activeLanguage = this._activeLanguage.asReadonly();

  switchLanguage(language: Languages) {
    this._activeLanguage.set(language);
    this.translateService.use(language);
  }

  private detectLanguage(): Languages {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === FR ? FR : EN;
  }
}
