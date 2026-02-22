import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';

@Component({
  selector: 'app-quiz-navigation',
  imports: [],
  templateUrl: './quiz-navigation.html',
  styleUrl: './quiz-navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizNavigation {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly quizStoreService = inject(QuizStoreService);
}
