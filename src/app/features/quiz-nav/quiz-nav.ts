import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { FINISHED, IN_PROGRESS } from '../../shared/constants';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-quiz-nav',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './quiz-nav.html',
  styleUrl: './quiz-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizNav {
  protected readonly quizService = inject<QuizService>(QuizService);
  protected readonly navigationService = inject<NavigationService>(NavigationService);
  protected readonly IN_PROGRESS = IN_PROGRESS;

  constructor() {
    effect(() => {
      if (this.quizService.state() === FINISHED) {
        this.navigationService.navigate('result');
      }
    });
  }
}
