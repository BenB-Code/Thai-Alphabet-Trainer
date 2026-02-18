import { inject, Injectable, signal } from '@angular/core';
import { DataService } from '../../../services/data-service/data-service';
import { TabsConfig } from '../../shared/interfaces';
import { SwitchSelectorItem } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  protected readonly dataService = inject(DataService);

  private readonly _tabsConfig: TabsConfig[] = [
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
        id: 0,
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
        id: 1,
        class: 'letter-tab-switch-selector',
      },
      payload: this.dataService.getAllVowelsSorted(),
    },
  ];

  activeTab = signal(0);

  changeActiveTab(index: number): void {
    this.activeTab.set(index);
  }

  getTabsConfig(): readonly TabsConfig[] {
    return this._tabsConfig;
  }

  getTabsSwitchConfig(): readonly SwitchSelectorItem[] {
    return this._tabsConfig.map(tabConf => tabConf.tabSwitchConfig);
  }
}
