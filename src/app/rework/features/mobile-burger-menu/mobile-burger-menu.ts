import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenu } from '../../common/burger-menu/burger-menu';
import { ContactService } from '../../services/contact.service/contact.service';
import { FontSwitchSelector } from '../font-switch-selector/font-switch-selector';
import { SMALL } from '../../shared/constants';
import { AppStoreService } from '../../store/app/app-store.service';

@Component({
  selector: 'app-mobile-burger-menu',
  imports: [Button, TranslatePipe, BurgerMenu, FontSwitchSelector],
  templateUrl: './mobile-burger-menu.html',
  styleUrl: './mobile-burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileBurgerMenu {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly contactService = inject(ContactService);
  protected readonly SMALL = SMALL;
}
