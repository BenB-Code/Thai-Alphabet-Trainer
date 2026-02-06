import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizTimerService } from '../../services/quiz-timer-service/quiz-timer-service';

@Component({
  selector: 'app-quiz-progress-bar',
  imports: [],
  templateUrl: './quiz-progress-bar.html',
  styleUrl: './quiz-progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizProgressBar {
  protected readonly timerService = inject<QuizTimerService>(QuizTimerService);
}
