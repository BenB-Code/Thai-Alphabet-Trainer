import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { QuizPanelRecap } from '../quiz-panel-recap/quiz-panel-recap';
import { QuizPanelForm } from '../quiz-panel-form/quiz-panel-form';
import { QuizService } from '../../services/quiz-service/quiz-service';

@Component({
  selector: 'app-quiz-panel',
  imports: [MatCard, TranslatePipe, MatRadioModule, MatButtonModule, QuizPanelRecap, QuizPanelForm],
  templateUrl: './quiz-panel.html',
  styleUrl: './quiz-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPanel {
  quizService = inject<QuizService>(QuizService);
}
