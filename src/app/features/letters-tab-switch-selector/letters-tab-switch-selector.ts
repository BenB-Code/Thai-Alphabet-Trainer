import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { TranslatePipe } from '@ngx-translate/core';
import { TabsService } from '../../services/tabs-service/tabs-service';
import { AppStoreService } from '../../store/app/app-store.service';
import { LARGE } from '../../shared/constants';

@Component({
  selector: 'app-letters-tab-switch-selector',
  imports: [SwitchSelector, TranslatePipe],
  templateUrl: './letters-tab-switch-selector.html',
  styleUrl: './letters-tab-switch-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabSwitchSelector {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly tabsService = inject(TabsService);

  protected readonly LARGE = LARGE;
}
