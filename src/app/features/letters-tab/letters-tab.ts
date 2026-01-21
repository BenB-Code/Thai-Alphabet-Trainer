import { Component, inject } from '@angular/core';
import { CardsContainer } from '../cards-container/cards-container';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../../services/data-service/data-service';
import { KeyValuePipe } from '@angular/common';
import { TypeClassColorsMap } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-letters-tab',
  imports: [CardsContainer, MatTabsModule, KeyValuePipe, TranslatePipe],
  templateUrl: './letters-tab.html',
  styleUrl: './letters-tab.scss',
})
export class LettersTab {
  protected readonly TypeClassColorsMap = TypeClassColorsMap;

  protected readonly dataService = inject<DataService>(DataService);

  keepOrder = () => 0;
}
