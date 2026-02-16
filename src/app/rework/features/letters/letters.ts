import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LettersTabSwitchSelector } from '../letters-tab-switch-selector/letters-tab-switch-selector';
import { QuizSettingsPanel } from '../quiz-settings-panel/quiz-settings-panel';
import { LettersTabs } from '../letters-tabs/letters-tabs';

@Component({
  selector: 'app-letters',
  imports: [LettersTabSwitchSelector, QuizSettingsPanel, LettersTabs],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {}
