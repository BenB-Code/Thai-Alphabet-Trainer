import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../../services/state-service/state-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { DisplayType, LATIN, MIXED, THAI } from '../../shared/models';

@Component({
  selector: 'app-quiz-panel-form',
  imports: [MatRadioButton, MatRadioGroup, TranslatePipe, ReactiveFormsModule],
  templateUrl: './quiz-panel-form.html',
  styleUrl: './quiz-panel-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPanelForm {
  stateService = inject<StateService>(StateService);
  quizService = inject<QuizService>(QuizService);

  baseValues = {
    questions: {
      min: 1,
      max: 500,
    },
    delay: [2, 3, 5, 10],
    display: [
      {
        value: LATIN as DisplayType,
        label: `quiz.${LATIN}`,
      },
      {
        value: THAI as DisplayType,
        label: `quiz.${THAI}`,
      },
      {
        value: MIXED as DisplayType,
        label: `quiz.${MIXED}`,
      },
    ],
  };

  quiz = new FormGroup({
    questions: new FormControl(10, [
      Validators.required,
      Validators.min(this.baseValues.questions.min),
      Validators.max(this.baseValues.questions.max),
    ]),
    delay: new FormControl(this.baseValues.delay[2], Validators.required),
    display: new FormControl<DisplayType>(this.baseValues.display[0].value, Validators.required),
    selected: new FormControl(this.stateService.total(), [
      Validators.required,
      Validators.min(this.baseValues.questions.min),
    ]),
  });

  constructor() {
    effect(() => {
      this.quiz.patchValue({ selected: this.stateService.total() });
    });

    this.quiz.valueChanges.pipe(takeUntilDestroyed()).subscribe(changes => {
      if (!changes.questions || changes.questions < this.baseValues.questions.min) {
        this.quiz.patchValue({ questions: this.baseValues.questions.min });
      }
      if (changes.questions && changes.questions > this.baseValues.questions.max) {
        this.quiz.patchValue({ questions: this.baseValues.questions.max });
      }

      this.quizService.isValid.set(this.quiz.valid);
      this.quizService.formValues.set(this.quiz.getRawValue());
    });
  }
}
