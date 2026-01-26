import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-quiz-panel-form',
  imports: [MatRadioButton, MatRadioGroup, TranslatePipe],
  templateUrl: './quiz-panel-form.html',
  styleUrl: './quiz-panel-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPanelForm {}
