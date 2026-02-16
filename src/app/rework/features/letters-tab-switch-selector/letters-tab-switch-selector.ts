import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { ThemeService } from '../../services/theme-service/theme-service';
import { TranslatePipe } from '@ngx-translate/core';
import { LARGE } from '../../shared/constants';
import { TabsService } from '../../services/tabs-service/tabs-service';

@Component({
  selector: 'app-letters-tab-switch-selector',
  imports: [SwitchSelector, TranslatePipe],
  templateUrl: './letters-tab-switch-selector.html',
  styleUrl: './letters-tab-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabSwitchSelector {
  protected readonly themeService = inject(ThemeService);
  protected readonly tabsService = inject(TabsService);

  protected readonly LARGE = LARGE;
}
