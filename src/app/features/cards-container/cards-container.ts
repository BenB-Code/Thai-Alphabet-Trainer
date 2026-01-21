import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';
import { Card } from '../card/card';
import { COLORS, PRIMARY } from '../../shared/constants';

@Component({
  selector: 'app-cards-container',
  imports: [Card],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsContainer {
  list = input.required<ThaiConsonant[] | ThaiVowel[]>();
  color = input<COLORS>(PRIMARY);
}
