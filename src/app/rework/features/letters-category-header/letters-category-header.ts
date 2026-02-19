import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Button } from '../../common/button/button';
import { SMALL } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectionStoreService } from '../../store/selection/selection-store.service';

@Component({
  selector: 'app-letters-category-header',
  imports: [Button, TranslatePipe],
  templateUrl: './letters-category-header.html',
  styleUrl: './letters-category-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCategoryHeader {
  protected readonly selectionStoreService = inject(SelectionStoreService);

  category = input.required<string>();
  count = input.required<number>();
  protected readonly SMALL = SMALL;
}
