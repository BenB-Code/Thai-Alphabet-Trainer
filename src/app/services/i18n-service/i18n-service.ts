import { Injectable, signal } from '@angular/core';
import { EN, LANGUAGES } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly _activeLanguage = signal<LANGUAGES>(EN);

  activeLanguage = this._activeLanguage.asReadonly();
}
