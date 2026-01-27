import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ThaiLetter } from '../../shared/models';

@Component({
  selector: 'app-quiz-card',
  imports: [],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizCard {
  letter = input.required<ThaiLetter>();
}
