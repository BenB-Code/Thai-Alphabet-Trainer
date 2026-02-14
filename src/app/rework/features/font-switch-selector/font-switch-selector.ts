import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { ThemeService } from '../../services/theme-service/theme-service';
import { FontsType } from '../../shared/types';

@Component({
  selector: 'app-font-switch-selector',
  imports: [SwitchSelector],
  templateUrl: './font-switch-selector.html',
  styleUrl: './font-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontSwitchSelector {
  private readonly themeService = inject(ThemeService);

  fontsList = [
    {
      label: {
        display: true,
        text: 'ก',
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 0,
      class: 'sarabun',
    },
    {
      label: {
        display: true,
        text: 'ก',
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 1,
      class: 'kanit',
    },
    {
      label: {
        display: true,
        text: 'ก',
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 2,
      class: 'sriracha',
    },
  ];

  activeId(id: number) {
    this.themeService.switchThaiFont(this.fontsList[id].class as FontsType);
  }
}
