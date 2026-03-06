import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { LettersCategoryHeader } from '../letters-category-header/letters-category-header';
import { LettersCard } from '../letters-card/letters-card';
import { SymbolCategoriesType, ThaiSymbolType } from '../../shared/types';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';

@Component({
  selector: 'app-letters-category-container',
  imports: [LettersCategoryHeader, LettersCard],
  templateUrl: './letters-category-container.html',
  styleUrl: './letters-category-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-color]': 'color()',
  },
})
export class LettersCategoryContainer {
  private readonly letterUtilsService = inject(LetterUtilsService);

  category = input.required<SymbolCategoriesType>();
  list = input.required<ThaiSymbolType[]>();
  color = computed(() => this.letterUtilsService.getLetterColor(this.category()));

  isOpen = signal(true);

  toggleOpen(): void {
    this.isOpen.update(v => !v);
  }
}
