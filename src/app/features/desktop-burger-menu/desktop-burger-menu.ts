import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { BurgerMenu } from '../../common/burger-menu/burger-menu';
import { ContactService } from '../../services/contact.service/contact.service';
import { MEDIUM, SMALL } from '../../shared/constants';
import { AppStoreService } from '../../store/app/app-store.service';

@Component({
  selector: 'app-desktop-burger-menu',
  imports: [Button, TranslatePipe, BurgerMenu],
  templateUrl: './desktop-burger-menu.html',
  styleUrl: './desktop-burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopBurgerMenu {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly contactService = inject(ContactService);
  protected readonly SMALL = SMALL;
  protected readonly MEDIUM = MEDIUM;
}
