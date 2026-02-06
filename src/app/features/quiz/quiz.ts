import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizCard } from '../quiz-card/quiz-card';
import { QuizHeader } from '../quiz-header/quiz-header';
import { QuizNav } from '../quiz-nav/quiz-nav';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { QuizProgressBar } from '../quiz-progress-bar/quiz-progress-bar';

@Component({
  selector: 'app-quiz',
  imports: [QuizCard, QuizHeader, QuizNav, QuizProgressBar],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Quiz {
  protected readonly quizService = inject<QuizService>(QuizService);
}
