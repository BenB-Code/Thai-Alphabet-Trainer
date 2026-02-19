import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ConsonantClass, ThaiCharacter, VowelType } from '../../../shared/models';
import { LettersCategoryHeader } from '../letters-category-header/letters-category-header';
import { LettersCard } from '../letters-card/letters-card';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';

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

  category = input.required<ConsonantClass | VowelType>();
  list = input.required<ThaiCharacter[]>();
  color = computed(() => this.letterUtilsService.getLetterColor(this.category()));
}
