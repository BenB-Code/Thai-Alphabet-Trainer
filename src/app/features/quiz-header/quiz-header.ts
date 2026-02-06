import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';

@Component({
  selector: 'app-quiz-header',
  imports: [TranslatePipe, MatButtonModule],
  templateUrl: './quiz-header.html',
  styleUrl: './quiz-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHeader {
  private readonly navigationService = inject<NavigationService>(NavigationService);
  protected readonly prepService = inject<QuizPreparationService>(QuizPreparationService);
  protected readonly sessionService = inject<QuizSessionService>(QuizSessionService);

  exit() {
    this.sessionService.reset();
    this.navigationService.navigate('');
  }
}
