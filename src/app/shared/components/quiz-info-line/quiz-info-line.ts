import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-info-line',
  templateUrl: './quiz-info-line.html',
  styleUrl: './quiz-info-line.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizInfoLine {
  label = input.required<string>();
}
