import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../../services/state-service/state-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuizService } from '../../services/quiz-service/quiz-service';
import { DisplayType, QuizFormat } from '../../shared/models';
import { QUIZ_FORM_BASE_CONF } from '../../shared/constants';

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

  quiz = new FormGroup({
    questions: new FormControl(this.quizService.quizSettings().questions, [
      Validators.required,
      Validators.min(QUIZ_FORM_BASE_CONF.questions.min),
      Validators.max(QUIZ_FORM_BASE_CONF.questions.max),
    ]),
    delay: new FormControl(this.quizService.quizSettings().delay, Validators.required),
    display: new FormControl<DisplayType>(this.quizService.quizSettings().display, Validators.required),
    selected: new FormControl(this.quizService.quizSettings().selected, [
      Validators.required,
      Validators.min(QUIZ_FORM_BASE_CONF.questions.min),
    ]),
  });

  constructor() {
    effect(() => {
      this.quiz.patchValue({ selected: this.stateService.selected() });
    });

    this.quiz.valueChanges.pipe(takeUntilDestroyed()).subscribe(changes => {
      if (!changes.questions || changes.questions < QUIZ_FORM_BASE_CONF.questions.min) {
        this.quiz.patchValue({ questions: QUIZ_FORM_BASE_CONF.questions.min });
      }
      if (changes.questions && changes.questions > QUIZ_FORM_BASE_CONF.questions.max) {
        this.quiz.patchValue({ questions: QUIZ_FORM_BASE_CONF.questions.max });
      }

      this.quizService.isValid.set(this.quiz.valid);
      this.quizService.quizSettings.set(this.quiz.getRawValue() as QuizFormat);
    });
  }

  protected readonly QUIZ_FORM_BASE_CONF = QUIZ_FORM_BASE_CONF;
}
