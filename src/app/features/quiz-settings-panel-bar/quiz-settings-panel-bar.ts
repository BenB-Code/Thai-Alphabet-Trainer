import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz-settings-panel-bar',
  imports: [Button, TranslatePipe],
  templateUrl: './quiz-settings-panel-bar.html',
  styleUrl: './quiz-settings-panel-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelBar {
  protected readonly appStoreService = inject(AppStoreService);
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
