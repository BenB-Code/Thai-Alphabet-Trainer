import { ChangeDetectionStrategy, Component, effect, inject, viewChild } from '@angular/core';
import { QuizHeader } from '../quiz-header/quiz-header';
import { QuizCard } from '../quiz-card/quiz-card';
import { ProgressBar } from '../../common/progress-bar/progress-bar';
import { QuizNavigation } from '../quiz-navigation/quiz-navigation';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { FINISHED, IN_PROGRESS } from '../../shared/constants';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz',
  imports: [QuizHeader, ProgressBar, QuizCard, QuizNavigation],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Quiz {
  protected readonly quizStoreService = inject(QuizStoreService);
  private readonly navigationService = inject(NavigationService);

  private readonly progressBar = viewChild(ProgressBar);

  private readonly delayMs = this.quizStoreService.delayMs();
  private readonly hasDelay = this.delayMs > 0;
  private previousIndex = 0;

  constructor() {
    this.quizStoreService.start();

    effect(() => {
      const state = this.quizStoreService.progressState();

      if (state === FINISHED) {
        this.navigationService.navigate('result');
        return;
      }

      if (!this.progressBar() || !this.hasDelay) return;

      if (state !== IN_PROGRESS) {
        this.progressBar()?.stop();
        return;
      }

      if (this.quizStoreService.index() !== this.previousIndex) {
        this.previousIndex = this.quizStoreService.index();
        this.progressBar()?.reset();
      }

      this.progressBar()?.start(this.delayMs);
    });
  }

  onTimerComplete(): void {
    this.quizStoreService.next();
  }
}
