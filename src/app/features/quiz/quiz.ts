import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizCard } from '../quiz-card/quiz-card';
import { QuizHeader } from '../quiz-header/quiz-header';
import { QuizNav } from '../quiz-nav/quiz-nav';
import { QuizProgressBar } from '../quiz-progress-bar/quiz-progress-bar';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { StateService } from '../../services/state-service/state-service';

@Component({
  selector: 'app-quiz',
  imports: [QuizCard, QuizHeader, QuizNav, QuizProgressBar],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Quiz {
  private readonly sessionService = inject<QuizSessionService>(QuizSessionService);
  private readonly stateService = inject<StateService>(StateService);

  constructor() {
    this.stateService.selected.update(() => []);
    this.sessionService.start();
  }
}
