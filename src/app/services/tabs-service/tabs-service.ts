import { inject, Injectable } from '@angular/core';
import { SwitchSelectorItem, TabsConfig } from '../../shared/interfaces';
import { DataService } from '../data-service/data-service';

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
      payload: this.dataService.allSymbolsSorted(),
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
      payload: this.dataService.consonantsSortedByCategory(),
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
      payload: this.dataService.vowelsSortedByCategory(),
    },
    // TODO add tones when datas are more relevants
    // {
    //   tabSwitchConfig: {
    //     label: {
    //       display: true,
    //       text: 'app.tones',
    //     },
    //     icon: {
    //       display: false,
    //       path: '',
    //       alt: '',
    //       right: false,
    //     },
    //     id: 3,
    //     class: 'letter-tab-switch-selector',
    //   },
    //   payload: this.dataService.tonesSortedByCategory(),
    // },
    {
      tabSwitchConfig: {
        label: {
          display: true,
          text: 'app.numerals',
        },
        icon: {
          display: false,
          path: '',
          alt: '',
          right: false,
        },
        id: 4,
        class: 'letter-tab-switch-selector',
      },
      payload: this.dataService.numeralsSortedByCategory(),
    },
    {
      tabSwitchConfig: {
        label: {
          display: true,
          text: 'app.diacritics',
        },
        icon: {
          display: false,
          path: '',
          alt: '',
          right: false,
        },
        id: 5,
        class: 'letter-tab-switch-selector',
      },
      payload: this.dataService.diacriticsSortedByCategory(),
    },
  ];

  readonly tabsConfig: readonly TabsConfig[] = this._tabsConfig;
  readonly tabsSwitchConfig: readonly SwitchSelectorItem[] = this._tabsConfig.map(tabConf => tabConf.tabSwitchConfig);
}
