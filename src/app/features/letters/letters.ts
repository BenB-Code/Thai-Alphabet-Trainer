import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LettersTab } from '../letters-tab/letters-tab';
import { QuizPanel } from '../quiz-panel/quiz-panel';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';
import { Banner } from '../banner/banner';

@Component({
  selector: 'app-letters',
  imports: [LettersTab, QuizPanel, Banner],
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
