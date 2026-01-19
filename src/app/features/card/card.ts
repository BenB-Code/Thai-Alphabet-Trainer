import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';
import { StateService } from '../../services/state-service/state-service';
import { COLORS, PRIMARY } from '../../shared/constants';

@Component({
  selector: 'app-card',
  imports: [MatCard, MatCardContent],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-color]': 'color()',
  },
})
export class Card {
  protected readonly stateService: StateService = inject<StateService>(StateService);

  letter = input.required<ThaiConsonant | ThaiVowel>();
  color = input<COLORS>(PRIMARY);
  isActive = computed(() => this.stateService.total().has(this.letter()));

  toggleLetter(): void {
    this.stateService.toggleLetter(this.letter());
  }
}
