import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  clicked = output();

  text = input<string | null>();
  icon = input<string | null>(null);
  alt = input<string>('');
  uppercase = input(false);
  dark = input(false);
}
