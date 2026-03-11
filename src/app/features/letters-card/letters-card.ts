import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';
import { ColorsType, ThaiSymbolType } from '../../shared/types';
import { TRANSPARENT } from '../../shared/constants';
import { Card } from '../../common/card/card';
import { Consonant } from './cards/consonant/consonant';
import { Vowel } from './cards/vowel/vowel';
import { Numeral } from './cards/numeral/numeral';
import { Diacritics } from './cards/diacritics/diacritics';
import { Tones } from './cards/tones/tones';
import { InfoBubble } from '../../common/info-bubble/info-bubble';

@Component({
  selector: 'app-letters-card',
  imports: [Card, Consonant, Vowel, Numeral, Diacritics, Tones, InfoBubble],
  templateUrl: './letters-card.html',
  styleUrl: './letters-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCard {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly selectionStoreService = inject(SelectionStoreService);
  protected readonly letterUtilsService = inject(LetterUtilsService);

  letter = input.required<ThaiSymbolType>();
  color = input<ColorsType>(TRANSPARENT);
  clickable = input<boolean>(true);
  activable = input<boolean>(true);
  isActive = computed((): boolean =>
    this.selectionStoreService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  selectLetter() {
    this.selectionStoreService.toggleLetter(this.letter());
  }
}
