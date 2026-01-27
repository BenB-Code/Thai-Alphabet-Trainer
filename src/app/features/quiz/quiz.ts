import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuizCard } from '../quiz-card/quiz-card';
import { QuizHeader } from '../quiz-header/quiz-header';
import { QuizNav } from '../quiz-nav/quiz-nav';
import { THAI_CONSONANTS } from '../../data';

@Component({
  selector: 'app-quiz',
  imports: [QuizCard, QuizHeader, QuizNav],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Quiz {
  protected readonly THAI_CONSONANTS = THAI_CONSONANTS;
}
