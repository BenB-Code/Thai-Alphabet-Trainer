import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { CONSONANT, FINAL, MEDIAL, THAI, VOWEL } from '../../../shared/constants';
import { AppStoreService } from '../../store/app/app-store.service';
import { DarkMode } from '../../directives/dark-mode/dark-mode';
import { StatusBadge } from '../../common/status-badge/status-badge';
import { TranslatePipe } from '@ngx-translate/core';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';

@Component({
  selector: 'app-quiz-card',
  imports: [DarkMode, StatusBadge, TranslatePipe],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizCard {
  protected readonly quizStoreService = inject(QuizStoreService);
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly letterUtilsService = inject(LetterUtilsService);

  flip(): void {
    this.quizStoreService.toggleFlip();
  }

  protected readonly THAI = THAI;
  protected readonly MEDIAL = MEDIAL;
  protected readonly FINAL = FINAL;
  protected readonly CONSONANT = CONSONANT;
  protected readonly VOWEL = VOWEL;
}
