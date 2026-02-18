import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';
import { StateService } from '../../../services/state-service/state-service';
import { NavigationService } from '../../../services/navigation-service/navigation-service';
import { DarkMode } from '../../common/dark-mode/dark-mode';

@Component({
  selector: 'app-quiz-settings-panel-bar',
  imports: [Button, TranslatePipe, DarkMode],
  templateUrl: './quiz-settings-panel-bar.html',
  styleUrl: './quiz-settings-panel-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelBar {
  protected readonly quizPreparationService = inject(QuizPreparationService);
  protected readonly stateService = inject(StateService);
  protected readonly navigationService = inject(NavigationService);

  isOpen = input(false);
  toggleOpen = output();

  toggleOpenEvent() {
    this.toggleOpen.emit();
  }

  startQuiz() {
    this.quizPreparationService.generateQuizList();
    this.navigationService.navigate('quiz');
  }
}
