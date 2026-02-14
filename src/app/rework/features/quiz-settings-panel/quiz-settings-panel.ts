import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExtensionPanel } from '../../common/extension-panel/extension-panel';
import { QuizSettingsPanelBar } from '../quiz-settings-panel-bar/quiz-settings-panel-bar';
import { QuizSettingsPanelContent } from '../quiz-settings-panel-content/quiz-settings-panel-content';

@Component({
  selector: 'app-quiz-settings-panel',
  imports: [ExtensionPanel, QuizSettingsPanelBar, QuizSettingsPanelContent],
  templateUrl: './quiz-settings-panel.html',
  styleUrl: './quiz-settings-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanel {
  isOpen = signal(false);

  toggleOpen() {
    this.isOpen.update(open => !open);
  }
}
