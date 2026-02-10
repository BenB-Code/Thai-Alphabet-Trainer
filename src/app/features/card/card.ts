import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Colors, ThaiConsonant, ThaiVowel } from '../../shared/models';
import { StateService } from '../../services/state-service/state-service';
import { FINAL, MEDIAL, PRIMARY } from '../../shared/constants';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  imports: [MatCard, MatCardContent, MatIconModule, MatTooltipModule, TranslatePipe],
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

  protected readonly MEDIAL = MEDIAL;
  protected readonly FINAL = FINAL;

  letter = input.required<ThaiConsonant | ThaiVowel>();
  color = input<Colors>(PRIMARY);
  clickable = input<boolean>(true);

  isActive = computed((): boolean =>
    this.stateService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  toggleLetter(): void {
    this.stateService.toggleLetter(this.letter());
  }

  isOutdated() {
    const letter = this.letter();
    return 'outdated' in letter && letter.outdated;
  }

  hasTransliteration() {
    const letter = this.letter();
    if ('transliteration' in letter) {
      return letter.transliteration;
    }
    return false;
  }

  hasVowelPosition() {
    const letter = this.letter();
    if ('position' in letter) {
      return letter.position;
    }
    return false;
  }
}
