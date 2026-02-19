import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { FontSwitchItem } from '../../shared/types';
import { LARGE, KANIT, SARABUN, SRIRACHA } from '../../shared/constants';

@Component({
  selector: 'app-font-switch-selector',
  imports: [SwitchSelector],
  templateUrl: './font-switch-selector.html',
  styleUrl: './font-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontSwitchSelector {
  private readonly appStoreService = inject(AppStoreService);

  readonly fontsList: FontSwitchItem[] = [
    {
      label: { display: true, text: '\u0E01' },
      icon: { display: false, path: '', alt: '', right: false },
      id: 0,
      class: SARABUN,
    },
    {
      label: { display: true, text: '\u0E01' },
      icon: { display: false, path: '', alt: '', right: false },
      id: 1,
      class: KANIT,
    },
    {
      label: { display: true, text: '\u0E01' },
      icon: { display: false, path: '', alt: '', right: false },
      id: 2,
      class: SRIRACHA,
    },
  ];

  activeId(id: number) {
    this.appStoreService.switchFont(this.fontsList[id].class);
  }

  protected readonly LARGE = LARGE;
}
