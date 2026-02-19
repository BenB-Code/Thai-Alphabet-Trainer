import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TabsService } from '../../services/tabs-service/tabs-service';
import { LettersCategoryContainer } from '../letters-category-container/letters-category-container';
import { AppStoreService } from '../../store/app/app-store.service';
import { ConsonantClass, ThaiCharacter, VowelType } from '../../../shared/models';

@Component({
  selector: 'app-letters-tabs',
  imports: [LettersCategoryContainer],
  templateUrl: './letters-tabs.html',
  styleUrl: './letters-tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabs {
  protected readonly appStoreService = inject(AppStoreService);
  private readonly tabsService = inject(TabsService);

  protected readonly tabEntries = computed(() =>
    this.tabsService.getTabsConfig().map(tab => ({
      id: tab.tabSwitchConfig.id,
      categories: Object.entries(tab.payload) as [ConsonantClass | VowelType, ThaiCharacter[]][],
    }))
  );
}
