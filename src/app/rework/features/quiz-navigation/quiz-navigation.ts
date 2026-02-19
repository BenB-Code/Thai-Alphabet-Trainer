import { Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { DarkMode } from '../../directives/dark-mode/dark-mode';

@Component({
  selector: 'app-quiz-navigation',
  imports: [DarkMode],
  templateUrl: './quiz-navigation.html',
  styleUrl: './quiz-navigation.scss',
})
export class QuizNavigation {
  protected readonly quizStoreService = inject(QuizStoreService);
}
