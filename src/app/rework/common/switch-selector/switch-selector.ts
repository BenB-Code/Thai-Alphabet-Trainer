import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-switch-selector',
  imports: [],
  templateUrl: './switch-selector.html',
  styleUrl: './switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchSelector {
  dark = input(false);
  list = input<
    {
      label: {
        display: boolean;
        text: string;
      };
      icon: {
        display: boolean;
        path: string;
        alt: string;
        right: boolean;
      };
      id: number;
      class: string;
    }[]
  >([
    {
      label: {
        display: true,
        text: '',
      },
      icon: {
        display: true,
        path: '',
        alt: '',
        right: false,
      },
      id: 0,
      class: '',
    },
  ]);

  activeItem = output<number>();
  activeIndex = signal(0);

  activate(id: number) {
    this.activeIndex.set(id);
    this.activeItem.emit(id);
  }
}
