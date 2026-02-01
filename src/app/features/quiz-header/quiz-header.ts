import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { QuizService } from '../../services/quiz-service/quiz-service';

@Component({
  selector: 'app-quiz-header',
  imports: [TranslatePipe, MatButtonModule],
  templateUrl: './quiz-header.html',
  styleUrl: './quiz-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHeader {
  private readonly navigationService = inject<NavigationService>(NavigationService);
  protected readonly quizService = inject<QuizService>(QuizService);

  exit() {
    this.navigationService.navigate('');
  }
}
