import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Colors, ThaiCharacter } from '../../../shared/models';
import { Card } from '../../common/card/card';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';
import { AppStoreService } from '../../store/app/app-store.service';
import { FINAL, MEDIAL } from '../../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusBadge } from '../../common/status-badge/status-badge';
import { DarkMode } from '../../directives/dark-mode/dark-mode';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-letters-card',
  imports: [Card, TranslatePipe, StatusBadge, DarkMode],
  templateUrl: './letters-card.html',
  styleUrl: './letters-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCard {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly selectionStoreService = inject(SelectionStoreService);
  protected readonly letterUtilsService = inject(LetterUtilsService);

  letter = input.required<ThaiCharacter>();
  color = input.required<Colors>();

  isActive = computed((): boolean =>
    this.selectionStoreService.selected().some(el => el.id === this.letter().id && el.kind === this.letter().kind)
  );

  selectLetter() {
    this.selectionStoreService.toggleLetter(this.letter());
  }

  protected readonly FINAL = FINAL;
  protected readonly MEDIAL = MEDIAL;
  protected readonly select = select;
}
