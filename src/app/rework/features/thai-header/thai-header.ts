import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { Header } from '../../common/header/header';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { ThemeService } from '../../services/theme-service/theme-service';
import { TranslatePipe } from '@ngx-translate/core';
import { DARK } from '../../shared/constants';

@Component({
  selector: 'app-thai-header',
  imports: [Button, Header, TranslatePipe],
  templateUrl: './thai-header.html',
  styleUrl: './thai-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThaiHeader {
  title = 'Thai';
  subtitle = 'Flashcards';

  protected readonly i18nService = inject(I18nService);
  protected readonly themeService = inject(ThemeService);

  sendMail(): void {
    window.open('mailto:contact@thai-flashcards.app', '_self');
  }

  protected readonly DARK = DARK;
}
