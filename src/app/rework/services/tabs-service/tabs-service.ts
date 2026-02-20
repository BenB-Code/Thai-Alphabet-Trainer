import { inject, Injectable } from '@angular/core';
import { DataService } from '../../../services/data-service/data-service';
import { TabsConfig } from '../../shared/interfaces';
import { SwitchSelectorItem } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private readonly dataService = inject(DataService);

  private readonly _tabsConfig: TabsConfig[] = [
    {
      tabSwitchConfig: {
        label: {
          display: true,
          text: 'buttons.all',
        },
        icon: {
          display: false,
          path: '',
          alt: '',
          right: false,
        },
        class: 'letter-tab-switch-selector',
        id: 0,
      },
      payload: this.dataService.getAll(),
    },
    {
      tabSwitchConfig: {
        label: {
          display: true,
          text: 'app.consonants',
        },
        icon: {
          display: false,
          path: '',
          alt: '',
          right: false,
        },
        class: 'letter-tab-switch-selector',
        id: 1,
      },
      payload: this.dataService.getAllConsonantsSorted(),
    },
    {
      tabSwitchConfig: {
        label: {
          display: true,
          text: 'app.vowels',
        },
        icon: {
          display: false,
          path: '',
          alt: '',
          right: false,
        },
        id: 2,
        class: 'letter-tab-switch-selector',
      },
      payload: this.dataService.getAllVowelsSorted(),
    },
  ];

  readonly tabsConfig: readonly TabsConfig[] = this._tabsConfig;
  readonly tabsSwitchConfig: readonly SwitchSelectorItem[] = this._tabsConfig.map(tabConf => tabConf.tabSwitchConfig);
}
