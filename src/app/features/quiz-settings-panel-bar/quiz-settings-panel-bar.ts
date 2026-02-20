import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { DarkMode } from '../../directives/dark-mode/dark-mode';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz-settings-panel-bar',
  imports: [Button, TranslatePipe, DarkMode],
  templateUrl: './quiz-settings-panel-bar.html',
  styleUrl: './quiz-settings-panel-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelBar {
  protected readonly quizStoreService = inject(QuizStoreService);
  protected readonly selectionStoreService = inject(SelectionStoreService);
  protected readonly navigationService = inject(NavigationService);

  isOpen = input(false);
  toggleOpen = output();

  toggleOpenEvent() {
    this.toggleOpen.emit();
  }

  startQuiz() {
    this.quizStoreService.generateQuizList();
    this.navigationService.navigate('quiz');
  }
}
