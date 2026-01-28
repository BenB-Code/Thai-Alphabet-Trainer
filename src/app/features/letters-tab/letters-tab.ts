import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardsContainer } from '../cards-container/cards-container';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../../services/data-service/data-service';
import { KeyValuePipe } from '@angular/common';
import { CONSONANT, TypeClassColorsMap, VOWEL } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectionButtonContainer } from '../selection-button-container/selection-button-container';

@Component({
  selector: 'app-letters-tab',
  imports: [CardsContainer, MatTabsModule, KeyValuePipe, TranslatePipe, SelectionButtonContainer],
  templateUrl: './letters-tab.html',
  styleUrl: './letters-tab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTab {
  protected readonly dataService = inject<DataService>(DataService);
  keepOrder = () => 0;

  protected readonly TypeClassColorsMap = TypeClassColorsMap;
  protected readonly CONSONANT = CONSONANT;
  protected readonly VOWEL = VOWEL;
}
