import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Button } from '../../common/button/button';
import { SMALL } from '../../shared/constants';
import { ThemeService } from '../../services/theme-service/theme-service';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';

@Component({
  selector: 'app-letters-category-header',
  imports: [Button, TranslatePipe],
  templateUrl: './letters-category-header.html',
  styleUrl: './letters-category-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCategoryHeader {
  protected readonly themeService = inject(ThemeService);
  protected readonly quizPreparationService = inject(QuizPreparationService);

  category = input.required<string>();
  count = input.required<number>();
  protected readonly SMALL = SMALL;
}
