import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { ColorsType, ConsonantClassType, VowelLengthType } from '../../shared/types';
import { SMALL } from '../../shared/constants';

@Component({
  selector: 'app-letters-category-header',
  imports: [Button, TranslatePipe],
  templateUrl: './letters-category-header.html',
  styleUrl: './letters-category-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-color]': 'color()',
  },
})
export class LettersCategoryHeader {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly selectionStoreService = inject(SelectionStoreService);

  category = input.required<ConsonantClassType | VowelLengthType>();
  count = input.required<number>();
  color = input.required<ColorsType>();
  isOpen = input(true);
  toggleOpen = output();

  categoryCount = computed(() => this.selectionStoreService.getCountByCategory(this.category()));

  selectAll() {
    this.selectionStoreService.selectByCategory(this.category());
  }
  deselectAll() {
    this.selectionStoreService.deselectByCategory(this.category());
  }
  toggleSelection() {
    this.selectionStoreService.toggleByCategory(this.category());
  }

  protected readonly SMALL = SMALL;
}
