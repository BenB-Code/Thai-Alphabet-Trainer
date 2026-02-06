import { inject, Injectable, signal } from '@angular/core';
import { ProgressState } from '../../shared/models';
import { BACKWARD, FINISHED, FORWARD, IN_PROGRESS, PAUSE } from '../../shared/constants';
import { QuizPreparationService } from '../quiz-preparation-service/quiz-preparation-service';
import { QuizTimerService } from '../quiz-timer-service/quiz-timer-service';

@Injectable({
  providedIn: 'root',
})
export class QuizSessionService {
  private readonly prepService = inject<QuizPreparationService>(QuizPreparationService);
  private readonly timerService = inject<QuizTimerService>(QuizTimerService);

  index = signal<number>(0);
  progressState = signal<ProgressState>(PAUSE);
  flipped = signal<boolean>(false);
  cardAnimation = signal<string | null>(null);
  canGoBack = signal<boolean>(false);
  canGoForward = signal<boolean>(true);

  start() {
    this.progressState.set(IN_PROGRESS);
    this.timerService.start(this.getDelayMs(), () => this.next());
  }

  reset() {
    this.canGoBack.set(false);
    this.canGoForward.set(this.prepService.quizSettings().questions > 1);
    this.index.set(0);
    this.progressState.set(PAUSE);
    this.flipped.set(false);
    this.cardAnimation.set(null);
    this.timerService.reset(this.getDelayMs());
  }

  next() {
    this.navigate(FORWARD);
  }

  previous() {
    this.navigate(BACKWARD);
  }

  toggleFlip() {
    const nextFlipped = !this.flipped();
    this.flipped.set(nextFlipped);

    if (nextFlipped) {
      this.progressState.set(PAUSE);
      this.timerService.stop();
    } else {
      this.progressState.set(IN_PROGRESS);
      this.timerService.start(this.getDelayMs(), () => this.next());
    }
  }

  togglePause() {
    if (this.flipped()) {
      this.flipped.set(false);
      this.progressState.set(IN_PROGRESS);
      this.timerService.start(this.getDelayMs(), () => this.next());
      return;
    }

    const nextState = this.progressState() === IN_PROGRESS ? PAUSE : IN_PROGRESS;
    this.progressState.set(nextState);
    if (nextState === IN_PROGRESS) {
      this.timerService.start(this.getDelayMs(), () => this.next());
    } else {
      this.timerService.stop();
    }
  }

  private navigate(direction: typeof FORWARD | typeof BACKWARD) {
    const maxIndex = this.getMaxIndex();
    const currentIndex = this.index();
    const nextIndex = direction === FORWARD ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex < 0 || nextIndex > maxIndex) {
      this.updateNavigationState();
      if (nextIndex > maxIndex) {
        this.progressState.set(FINISHED);
        this.timerService.stop();
      }
      return;
    }

    this.flipped.set(false);
    this.timerService.reset(this.getDelayMs());

    const slideOut = direction === FORWARD ? 'slide-out-left' : 'slide-out-right';
    const slideIn = direction === FORWARD ? 'slide-in-left' : 'slide-in-right';

    this.cardAnimation.set(slideOut);

    setTimeout(() => {
      this.index.set(nextIndex);
      this.updateNavigationState();
      this.cardAnimation.set(slideIn);

      setTimeout(() => this.cardAnimation.set(null), 300);

      if (this.progressState() === IN_PROGRESS) {
        this.timerService.start(this.getDelayMs(), () => this.next());
      }
    }, 300);
  }

  private updateNavigationState() {
    const maxIndex = this.getMaxIndex();
    const currentIndex = this.index();

    this.canGoBack.set(currentIndex > 0);
    this.canGoForward.set(currentIndex < maxIndex);
    this.progressState.set(IN_PROGRESS);
  }

  private getMaxIndex() {
    return Math.max(0, this.prepService.quizSettings().questions - 1);
  }

  private getDelayMs() {
    return this.prepService.quizSettings().delay * 1000;
  }
}
