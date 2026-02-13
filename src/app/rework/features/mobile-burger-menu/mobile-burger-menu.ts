import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { ThemeService } from '../../services/theme-service/theme-service';
import { BurgerMenu } from '../../common/burger-menu/burger-menu';
import { ContactService } from '../../services/contact.service/contact.service';
import { FontSwitchSelector } from '../font-switch-selector/font-switch-selector';

@Component({
  selector: 'app-mobile-burger-menu',
  imports: [Button, TranslatePipe, BurgerMenu, FontSwitchSelector],
  templateUrl: './mobile-burger-menu.html',
  styleUrl: './mobile-burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileBurgerMenu {
  protected readonly i18nService = inject(I18nService);
  protected readonly themeService = inject(ThemeService);
  protected readonly contactService = inject(ContactService);
}
