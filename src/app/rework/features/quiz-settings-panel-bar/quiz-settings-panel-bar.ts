import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';
import { StateService } from '../../../services/state-service/state-service';
import { ThemeService } from '../../services/theme-service/theme-service';
import { NavigationService } from '../../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz-settings-panel-bar',
  imports: [Button, TranslatePipe],
  templateUrl: './quiz-settings-panel-bar.html',
  styleUrl: './quiz-settings-panel-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelBar {
  protected readonly quizPreparationService = inject(QuizPreparationService);
  protected readonly stateService = inject(StateService);
  protected readonly themeService = inject(ThemeService);
  protected readonly navigationService = inject(NavigationService);

  toggleOpen = output<boolean>();
  isOpen = signal(false);

  toggleOpenEvent() {
    this.isOpen.update(open => !open);
    this.toggleOpen.emit(this.isOpen());
  }

  startQuiz() {
    this.quizPreparationService.generateQuizList();
    this.navigationService.navigate('quiz');
  }
}
