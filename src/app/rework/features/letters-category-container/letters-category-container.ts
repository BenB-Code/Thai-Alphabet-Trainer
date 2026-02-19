import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ConsonantClass, ThaiCharacter, VowelType } from '../../../shared/models';
import { LettersCategoryHeader } from '../letters-category-header/letters-category-header';
import { LettersCard } from '../letters-card/letters-card';

@Component({
  selector: 'app-letters-category-container',
  imports: [LettersCategoryHeader, LettersCard],
  templateUrl: './letters-category-container.html',
  styleUrl: './letters-category-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCategoryContainer {
  category = input.required<ConsonantClass | VowelType>();
  list = input.required<ThaiCharacter[]>();
}
