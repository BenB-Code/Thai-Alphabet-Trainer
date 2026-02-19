import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Button } from '../../common/button/button';
import { SMALL } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { Colors, ConsonantClass, VowelType } from '../../../shared/models';
import { DarkMode } from '../../directives/dark-mode/dark-mode';

@Component({
  selector: 'app-letters-category-header',
  imports: [Button, TranslatePipe, DarkMode],
  templateUrl: './letters-category-header.html',
  styleUrl: './letters-category-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-color]': 'color()',
  },
})
export class LettersCategoryHeader {
  protected readonly selectionStoreService = inject(SelectionStoreService);

  category = input.required<ConsonantClass | VowelType>();
  count = input.required<number>();
  color = input.required<Colors>();
  isOpen = input(true);
  toggleOpen = output();

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
