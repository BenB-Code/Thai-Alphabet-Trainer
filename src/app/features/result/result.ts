import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { LettersCard } from '../letters-card/letters-card';
import { Button } from '../../common/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';

@Component({
  selector: 'app-result',
  imports: [LettersCard, Button, TranslatePipe],
  templateUrl: './result.html',
  styleUrl: './result.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Result {
  protected readonly appStoreService = inject(AppStoreService);
  protected readonly quizStoreService = inject(QuizStoreService);
  protected readonly navigationService = inject(NavigationService);

  goBack() {
    this.navigationService.navigate('');
  }
}
