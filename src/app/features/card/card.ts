import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Colors, ThaiConsonant, ThaiVowel } from '../../shared/models';
import { StateService } from '../../services/state-service/state-service';
import { PRIMARY } from '../../shared/constants';
import { I18nService } from '../../services/i18n-service/i18n-service';

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
  protected readonly i18nService: I18nService = inject<I18nService>(I18nService);

  letter = input.required<ThaiConsonant | ThaiVowel>();
  color = input<Colors>(PRIMARY);

  isActive = computed((): boolean =>
    this.stateService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  toggleLetter(): void {
    this.stateService.toggleLetter(this.letter());
  }
}
