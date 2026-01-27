import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quiz-nav',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './quiz-nav.html',
  styleUrl: './quiz-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizNav {
  isPlayed = signal<boolean>(true);

  toggleQuizPlay() {
    this.isPlayed.set(!this.isPlayed());
  }

  nextCard(): void {
    console.log('next card');
  }

  previousCard(): void {
    console.log('previous card');
  }
}
