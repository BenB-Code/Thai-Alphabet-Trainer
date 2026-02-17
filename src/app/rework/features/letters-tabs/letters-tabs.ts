import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TabsService } from '../../services/tabs-service/tabs-service';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';
import { LettersCategoryContainer } from '../letters-category-container/letters-category-container';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-letters-tabs',
  imports: [LettersCategoryContainer, KeyValuePipe],
  templateUrl: './letters-tabs.html',
  styleUrl: './letters-tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabs {
  protected readonly tabsService = inject(TabsService);
  protected readonly letterUtils = inject(LetterUtilsService);
}
