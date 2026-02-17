import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ThaiCharacter } from '../../../shared/models';
import { LettersCategoryHeader } from '../letters-category-header/letters-category-header';

@Component({
  selector: 'app-letters-category-container',
  imports: [JsonPipe, LettersCategoryHeader],
  templateUrl: './letters-category-container.html',
  styleUrl: './letters-category-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCategoryContainer {
  category = input.required<string>();
  list = input.required<ThaiCharacter[]>();
}
