import { ChangeDetectionStrategy, Component, input, linkedSignal, output, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { LARGE, MEDIUM, SMALL } from '../../shared/constants';
import { SwitchSelectorItem } from '../../shared/types';

@Component({
  selector: 'app-switch-selector',
  imports: [NgTemplateOutlet],
  templateUrl: './switch-selector.html',
  styleUrl: './switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchSelector {
  darkMode = input(false);
  size = input<typeof SMALL | typeof MEDIUM | typeof LARGE>(MEDIUM);
  labelTemplate = input<TemplateRef<unknown>>();
  initialIndex = input(0);
  list = input<readonly SwitchSelectorItem[]>([]);

  activeItem = output<number>();
  activeIndex = linkedSignal(() => this.initialIndex());

  protected readonly SMALL = SMALL;
  protected readonly MEDIUM = MEDIUM;
  protected readonly LARGE = LARGE;

  activate(id: number) {
    this.activeIndex.set(id);
    this.activeItem.emit(id);
  }
}
