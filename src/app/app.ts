import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LettersTab } from './features/letters-tab/letters-tab';
import { QuizPanel } from './features/quiz-panel/quiz-panel';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, LettersTab, QuizPanel],
})
export class App {}
