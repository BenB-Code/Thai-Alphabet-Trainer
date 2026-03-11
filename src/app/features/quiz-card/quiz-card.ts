import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';
import { THAI } from '../../shared/constants';
import { Consonant } from '../letters-card/cards/consonant/consonant';
import { Diacritics } from '../letters-card/cards/diacritics/diacritics';
import { Numeral } from '../letters-card/cards/numeral/numeral';
import { Tones } from '../letters-card/cards/tones/tones';
import { Vowel } from '../letters-card/cards/vowel/vowel';

@Component({
  selector: 'app-quiz-card',
  imports: [Consonant, Diacritics, Numeral, Tones, Vowel],
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
}
