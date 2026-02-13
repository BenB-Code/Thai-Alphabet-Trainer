import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';

@Component({
  selector: 'app-letters',
  imports: [],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {
  private readonly sessionService = inject<QuizSessionService>(QuizSessionService);

  constructor() {
    this.sessionService.reset();
  }
}
