import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Button } from '../button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { DARK } from '../../shared/constants';

@Component({
  selector: 'app-burger-menu',
  imports: [Button, TranslatePipe],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenu {
  protected isBurgerOpen = signal(false);
  protected readonly DARK = DARK;

  dark = input(false);
  right = input(false);

  toggleMenu() {
    this.isBurgerOpen.update(isOpen => !isOpen);
  }
}
