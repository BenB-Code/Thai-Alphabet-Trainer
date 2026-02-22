import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { Button } from '../button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  imports: [Button, TranslatePipe],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenu {
  private readonly elementRef = inject(ElementRef);

  protected isBurgerOpen = signal(false);

  right = input(false);
  darkMode = input(false);

  toggleMenu() {
    this.isBurgerOpen.update(isOpen => !isOpen);
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: EventTarget | null) {
    if (this.isBurgerOpen() && !this.elementRef.nativeElement.contains(target)) {
      this.isBurgerOpen.set(false);
    }
  }
}
