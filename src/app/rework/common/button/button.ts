import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LARGE, MEDIUM, SMALL } from '../../shared/constants';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--color]': '"var(" + color() + ")"',
  },
})
export class Button {
  clicked = output();

  text = input<string | null>();
  icon = input<string | null>(null);
  alt = input<string>('');
  uppercase = input(false);
  dark = input(false);
  rightIcon = input(false);
  disabled = input(false);
  size = input<typeof SMALL | typeof MEDIUM | typeof LARGE>(MEDIUM);
  inverted = input(false);
  color = input('--accent');
}
