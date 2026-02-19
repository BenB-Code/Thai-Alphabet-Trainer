import { Component, inject } from '@angular/core';
import { QuizHeader } from '../quiz-header/quiz-header';
import { QuizCard } from '../quiz-card/quiz-card';
import { ProgressBar } from '../../common/progress-bar/progress-bar';
import { QuizNavigation } from '../../common/quiz-navigation/quiz-navigation';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';

@Component({
  selector: 'app-quiz',
  imports: [QuizHeader, ProgressBar, QuizCard, QuizNavigation],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {
  private readonly quizStoreService = inject(QuizStoreService);

  constructor() {
    this.quizStoreService.start();
  }
}
