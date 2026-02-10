import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CONSONANT, FINAL, LATIN, MEDIAL, VOWEL } from '../../shared/constants';
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
  protected readonly VOWEL = VOWEL;
  protected readonly CONSONANT = CONSONANT;
  protected readonly FINAL = FINAL;
  protected readonly MEDIAL = MEDIAL;

  hasVowelPosition() {
    const letter = this.letter();
    if ('position' in letter) {
      return letter.position;
    }
    return false;
  }

  hasType() {
    const letter = this.letter();
    if ('type' in letter) {
      return letter.type;
    }
    return false;
  }

  hasClass() {
    const letter = this.letter();
    if ('class' in letter) {
      return letter.class;
    }
    return false;
  }
}
