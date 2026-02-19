import { Directive, inject } from '@angular/core';
import { AppStoreService } from '../../store/app/app-store.service';

@Directive({
  selector: '[appDarkMode]',
  host: {
    '[class.dark]': 'appStoreService.isDarkThemeActive()',
  },
})
export class DarkMode {
  protected readonly appStoreService = inject(AppStoreService);
}
