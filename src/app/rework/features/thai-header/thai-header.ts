import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { Header } from '../../common/header/header';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { ThemeService } from '../../services/theme-service/theme-service';
import { TranslatePipe } from '@ngx-translate/core';
import { FontSwitchSelector } from '../font-switch-selector/font-switch-selector';
import { MobileBurgerMenu } from '../mobile-burger-menu/mobile-burger-menu';
import { ContactService } from '../../services/contact.service/contact.service';

@Component({
  selector: 'app-thai-header',
  imports: [Button, Header, TranslatePipe, MobileBurgerMenu, FontSwitchSelector],
  templateUrl: './thai-header.html',
  styleUrl: './thai-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThaiHeader {
  title = 'Thai';
  subtitle = 'Flashcards';

  protected readonly i18nService = inject(I18nService);
  protected readonly contactService = inject(ContactService);
  protected readonly themeService = inject(ThemeService);
}
