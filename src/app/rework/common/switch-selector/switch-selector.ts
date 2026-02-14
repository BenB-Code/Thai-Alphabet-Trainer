import { ChangeDetectionStrategy, Component, input, output, signal, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { LARGE, MEDIUM, SMALL } from '../../shared/constants';

@Component({
  selector: 'app-switch-selector',
  imports: [NgTemplateOutlet],
  templateUrl: './switch-selector.html',
  styleUrl: './switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchSelector {
  size = input<typeof SMALL | typeof MEDIUM | typeof LARGE>(MEDIUM);
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

  protected readonly SMALL = SMALL;
  protected readonly MEDIUM = MEDIUM;
  protected readonly LARGE = LARGE;

  activate(id: number) {
    this.activeIndex.set(id);
    this.activeItem.emit(id);
  }
}
