import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { ThemeService } from '../../services/theme-service/theme-service';
import { DataService } from '../../../services/data-service/data-service';
import { TranslatePipe } from '@ngx-translate/core';
import { LARGE } from '../../shared/constants';

@Component({
  selector: 'app-letters-tab-switch-selector',
  imports: [SwitchSelector, TranslatePipe],
  templateUrl: './letters-tab-switch-selector.html',
  styleUrl: './letters-tab-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabSwitchSelector {
  protected readonly themeService = inject(ThemeService);
  protected readonly dataService = inject(DataService);

  tabsList = [
    {
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
      id: 0,
      count: this.dataService.getAllConsonants().length,
      class: 'letter-tab-switch-selector',
    },
    {
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
      count: this.dataService.getAllVowels().length,
      class: 'letter-tab-switch-selector',
    },
  ];

  selectActive(index: number) {
    console.log(index);
  }

  protected readonly LARGE = LARGE;
}
