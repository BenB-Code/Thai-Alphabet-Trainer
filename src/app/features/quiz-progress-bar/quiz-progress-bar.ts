import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { QuizTimerService } from '../../services/quiz-timer-service/quiz-timer-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { PAUSE } from '../../shared/constants';

@Component({
  selector: 'app-quiz-progress-bar',
  imports: [],
  templateUrl: './quiz-progress-bar.html',
  styleUrl: './quiz-progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizProgressBar {
  protected readonly timerService = inject<QuizTimerService>(QuizTimerService);
  protected readonly sessionService = inject<QuizSessionService>(QuizSessionService);

  protected readonly paused = computed(
    () => this.sessionService.flipped() || this.sessionService.progressState() === PAUSE
  );
}
