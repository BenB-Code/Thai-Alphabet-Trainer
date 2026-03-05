import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { Header } from '../../common/header/header';
import { FontSwitchSelector } from '../font-switch-selector/font-switch-selector';
import { MobileBurgerMenu } from '../mobile-burger-menu/mobile-burger-menu';
import { AppStoreService } from '../../store/app/app-store.service';
import { DesktopBurgerMenu } from '../desktop-burger-menu/desktop-burger-menu';
import { MEDIUM } from '../../shared/constants';
import { PronunciationSwitchSelector } from '../pronunciation-switch-selector/pronunciation-switch-selector';

@Component({
  selector: 'app-thai-header',
  imports: [Button, Header, MobileBurgerMenu, FontSwitchSelector, PronunciationSwitchSelector, DesktopBurgerMenu],
  templateUrl: './thai-header.html',
  styleUrl: './thai-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThaiHeader {
  title = 'Thai';
  subtitle = 'Flashcards';

  protected readonly appStoreService = inject(AppStoreService);
  protected readonly MEDIUM = MEDIUM;
}
