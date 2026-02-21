import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { Header } from '../../common/header/header';
import { TranslatePipe } from '@ngx-translate/core';
import { FontSwitchSelector } from '../font-switch-selector/font-switch-selector';
import { MobileBurgerMenu } from '../mobile-burger-menu/mobile-burger-menu';
import { ContactService } from '../../services/contact.service/contact.service';
import { MEDIUM, SMALL } from '../../shared/constants';
import { AppStoreService } from '../../store/app/app-store.service';

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

  protected readonly appStoreService = inject(AppStoreService);
  protected readonly contactService = inject(ContactService);
  protected readonly SMALL = SMALL;
  protected readonly MEDIUM = MEDIUM;
}
