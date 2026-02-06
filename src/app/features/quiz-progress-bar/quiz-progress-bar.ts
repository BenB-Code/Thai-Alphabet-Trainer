import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz-service/quiz-service';

@Component({
  selector: 'app-quiz-progress-bar',
  imports: [],
  templateUrl: './quiz-progress-bar.html',
  styleUrl: './quiz-progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizProgressBar {
  protected readonly quizService = inject<QuizService>(QuizService);
}
