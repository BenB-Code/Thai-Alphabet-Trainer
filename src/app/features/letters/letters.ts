import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LettersTab } from '../letters-tab/letters-tab';
import { QuizPanel } from '../quiz-panel/quiz-panel';

@Component({
  selector: 'app-letters',
  imports: [LettersTab, QuizPanel],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {}
