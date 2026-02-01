import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LettersTab } from '../letters-tab/letters-tab';
import { QuizPanel } from '../quiz-panel/quiz-panel';
import { QuizService } from '../../services/quiz-service/quiz-service';

@Component({
  selector: 'app-letters',
  imports: [LettersTab, QuizPanel],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {
  private readonly quizService = inject<QuizService>(QuizService);

  constructor() {
    this.quizService.resetQuiz();
  }
}
