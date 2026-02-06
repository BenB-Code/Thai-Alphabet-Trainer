import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LATIN } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { QuizSessionService } from '../../services/quiz-session-service/quiz-session-service';

@Component({
  selector: 'app-quiz-card',
  imports: [TranslatePipe],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizCard {
  protected readonly i18nService = inject<I18nService>(I18nService);
  protected readonly prepService = inject<QuizPreparationService>(QuizPreparationService);
  protected readonly sessionService = inject<QuizSessionService>(QuizSessionService);

  protected readonly letter = computed(() => this.prepService.quizSettings().randomized[this.sessionService.index()]);
  protected readonly LATIN = LATIN;
}
