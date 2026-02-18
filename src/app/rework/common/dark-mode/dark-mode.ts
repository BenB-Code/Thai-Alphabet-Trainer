import { Directive, inject } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme-service';

@Directive({
  selector: '[appDarkMode]',
  host: {
    '[class.dark]': 'themeService.isDarkThemeActive()',
  },
})
export class DarkMode {
  protected readonly themeService = inject(ThemeService);
}
