import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Colors, ThaiConsonant, ThaiVowel } from '../../shared/models';
import { StateService } from '../../services/state-service/state-service';
import { FINAL, MEDIAL, PRIMARY } from '../../shared/constants';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';

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
  private readonly letterUtils: LetterUtilsService = inject<LetterUtilsService>(LetterUtilsService);

  protected readonly MEDIAL = MEDIAL;
  protected readonly FINAL = FINAL;

  letter = input.required<ThaiConsonant | ThaiVowel>();
  color = input<Colors>(PRIMARY);
  clickable = input<boolean>(true);

  isActive = computed((): boolean =>
    this.stateService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  protected readonly isOutdated = computed(() => this.letterUtils.isOutdated(this.letter()));
  protected readonly transliteration = computed(() => this.letterUtils.getTransliteration(this.letter()));
  protected readonly vowelPosition = computed(() => this.letterUtils.getVowelPosition(this.letter()));

  toggleLetter(): void {
    this.stateService.toggleLetter(this.letter());
  }
}
