import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  title = input<string>('');
  subtitle = input<string>(' ');
  titleClicked = output();

  titleClick() {
    this.titleClicked.emit();
  }
}
