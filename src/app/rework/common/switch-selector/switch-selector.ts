import { ChangeDetectionStrategy, Component, input, output, signal, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-switch-selector',
  imports: [NgTemplateOutlet],
  templateUrl: './switch-selector.html',
  styleUrl: './switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchSelector {
  dark = input(false);
  labelTemplate = input<TemplateRef<unknown>>();
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
