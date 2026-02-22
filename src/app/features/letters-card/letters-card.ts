import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Card } from '../../common/card/card';
import { AppStoreService } from '../../store/app/app-store.service';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusBadge } from '../../common/status-badge/status-badge';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';
import { Colors, ThaiCharacter } from '../../shared/types';
import { FINAL, MEDIAL, TERTIARY } from '../../shared/constants';

@Component({
  selector: 'app-letters-card',
  imports: [Card, TranslatePipe, StatusBadge],
  templateUrl: './letters-card.html',
  styleUrl: './letters-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCard {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly selectionStoreService = inject(SelectionStoreService);
  protected readonly letterUtilsService = inject(LetterUtilsService);

  letter = input.required<ThaiCharacter>();
  color = input<Colors>(TERTIARY);
  clickable = input<boolean>(true);
  activable = input<boolean>(true);
  isActive = computed((): boolean =>
    this.selectionStoreService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  selectLetter() {
    this.selectionStoreService.toggleLetter(this.letter());
  }

  protected readonly FINAL = FINAL;
  protected readonly MEDIAL = MEDIAL;
}
