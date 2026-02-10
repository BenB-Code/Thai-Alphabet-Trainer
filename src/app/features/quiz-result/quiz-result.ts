import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { QuizPreparationService } from '../../services/quiz-preparation-service/quiz-preparation-service';
import { Card } from '../card/card';
import { TypeClassColorsMap } from '../../shared/constants';
import { Colors, ThaiCharacter } from '../../shared/models';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { LangContainer } from '../lang-container/lang-container';

@Component({
  selector: 'app-quiz-result',
  imports: [MatCard, Card, TranslatePipe, MatButtonModule, LangContainer],
  templateUrl: './quiz-result.html',
  styleUrl: './quiz-result.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizResult {
  protected readonly quizPreparationService = inject<QuizPreparationService>(QuizPreparationService);

  private readonly navigationService = inject<NavigationService>(NavigationService);

  getColor(letter: ThaiCharacter): Colors {
    if ('class' in letter) {
      return TypeClassColorsMap[letter.class];
    }
    return TypeClassColorsMap[letter.type];
  }

  redirect() {
    this.navigationService.navigate('');
  }
}
