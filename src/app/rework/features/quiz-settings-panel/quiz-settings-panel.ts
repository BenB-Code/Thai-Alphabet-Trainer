import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExtensionPanel } from '../../common/extension-panel/extension-panel';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';
import { StateService } from '../../../services/state-service/state-service';
import { ThemeService } from '../../services/theme-service/theme-service';

@Component({
  selector: 'app-quiz-settings-panel',
  imports: [ExtensionPanel, Button, TranslatePipe],
  templateUrl: './quiz-settings-panel.html',
  styleUrl: './quiz-settings-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanel {
  protected readonly quizPreparationService = inject(QuizPreparationService);
  protected readonly stateService = inject(StateService);
  protected readonly themeService = inject(ThemeService);
}
