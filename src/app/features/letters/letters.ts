import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LettersTabSwitchSelector } from '../letters-tab-switch-selector/letters-tab-switch-selector';
import { QuizSettingsPanel } from '../quiz-settings-panel/quiz-settings-panel';
import { LettersTabs } from '../letters-tabs/letters-tabs';
import { AppStoreService } from '../../store/app/app-store.service';

@Component({
  selector: 'app-letters',
  imports: [LettersTabSwitchSelector, QuizSettingsPanel, LettersTabs],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {
  private readonly appStoreService = inject(AppStoreService);

  constructor() {
    this.appStoreService.changeTab(0);
  }
}
