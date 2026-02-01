import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LATIN } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { QuizService } from '../../services/quiz-service/quiz-service';

@Component({
  selector: 'app-quiz-card',
  imports: [TranslatePipe],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizCard {
  i18nService = inject<I18nService>(I18nService);
  quizService = inject<QuizService>(QuizService);

  letter = computed(() => this.quizService.quizSettings().randomized[this.quizService.index()]);

  protected readonly LATIN = LATIN;
}
