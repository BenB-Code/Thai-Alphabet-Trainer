import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../common/button/button';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz-header',
  imports: [Button],
  templateUrl: './quiz-header.html',
  styleUrl: './quiz-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHeader {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly quizStoreService = inject(QuizStoreService);
  private readonly navigationService = inject(NavigationService);

  quit() {
    this.quizStoreService.reset();
    this.navigationService.navigate('');
  }
}
