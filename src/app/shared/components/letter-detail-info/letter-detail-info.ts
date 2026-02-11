import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ThaiCharacter } from '../../models';
import { FINAL, MEDIAL } from '../../constants';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';
import { QuizInfoLine } from '../quiz-info-line/quiz-info-line';

@Component({
  selector: 'app-letter-detail-info',
  imports: [TranslatePipe, QuizInfoLine],
  templateUrl: './letter-detail-info.html',
  styleUrl: './letter-detail-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetterDetailInfo {
  protected readonly i18nService = inject<I18nService>(I18nService);
  private readonly letterUtils = inject<LetterUtilsService>(LetterUtilsService);

  letter = input.required<ThaiCharacter>();

  protected readonly consonantClass = computed(() => this.letterUtils.getConsonantClass(this.letter()));
  protected readonly vowelType = computed(() => this.letterUtils.getVowelType(this.letter()));
  protected readonly vowelPosition = computed(() => this.letterUtils.getVowelPosition(this.letter()));
  protected readonly isConsonant = computed(() => this.letterUtils.isConsonant(this.letter()));
  protected readonly isVowel = computed(() => this.letterUtils.isVowel(this.letter()));

  protected readonly MEDIAL = MEDIAL;
  protected readonly FINAL = FINAL;
}
