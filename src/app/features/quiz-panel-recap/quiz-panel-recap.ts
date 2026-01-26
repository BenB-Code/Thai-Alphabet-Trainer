import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StateService } from '../../services/state-service/state-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-quiz-panel-recap',
  imports: [TranslatePipe],
  templateUrl: './quiz-panel-recap.html',
  styleUrl: './quiz-panel-recap.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPanelRecap {
  protected stateService = inject<StateService>(StateService);
}
