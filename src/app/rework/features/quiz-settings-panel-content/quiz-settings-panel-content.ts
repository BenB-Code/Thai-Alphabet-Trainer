import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';
import { StateService } from '../../../services/state-service/state-service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { QUIZ_FORM_BASE_CONF } from '../../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { ThemeService } from '../../services/theme-service/theme-service';

@Component({
  selector: 'app-quiz-settings-panel-content',
  imports: [TranslatePipe, ReactiveFormsModule, SwitchSelector],
  templateUrl: './quiz-settings-panel-content.html',
  styleUrl: './quiz-settings-panel-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelContent {
  protected readonly quizPreparationService = inject(QuizPreparationService);
  protected readonly stateService = inject(StateService);
  protected readonly i18nService = inject(I18nService);
  protected readonly themeService = inject(ThemeService);

  questions = new FormControl(this.quizPreparationService.quizSettings().questions, [
    Validators.required,
    Validators.min(QUIZ_FORM_BASE_CONF.questions.min),
    Validators.max(QUIZ_FORM_BASE_CONF.questions.max),
  ]);

  delayList = [
    {
      label: {
        display: true,
        text: `${QUIZ_FORM_BASE_CONF.delay[0]}s`,
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 0,
      class: '',
    },
    {
      label: {
        display: true,
        text: `${QUIZ_FORM_BASE_CONF.delay[1]}s`,
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 1,
      class: '',
    },
    {
      label: {
        display: true,
        text: `${QUIZ_FORM_BASE_CONF.delay[2]}s`,
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 2,
      class: '',
    },
    {
      label: {
        display: true,
        text: `${QUIZ_FORM_BASE_CONF.delay[3]}s`,
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 3,
      class: '',
    },
    {
      label: {
        display: false,
        text: `${QUIZ_FORM_BASE_CONF.delay[4]}s`,
      },
      icon: {
        display: true,
        path: 'icons/time-off.svg',
        alt: 'no',
        right: false,
      },
      id: 4,
      class: 'lighter-icon',
    },
  ];

  displayList = [
    {
      label: {
        display: true,
        text: this.i18nService.translate(QUIZ_FORM_BASE_CONF.display[0].label),
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 0,
      class: '',
    },
    {
      label: {
        display: true,
        text: this.i18nService.translate(QUIZ_FORM_BASE_CONF.display[1].label),
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 1,
      class: '',
    },
    {
      label: {
        display: true,
        text: this.i18nService.translate(QUIZ_FORM_BASE_CONF.display[2].label),
      },
      icon: {
        display: false,
        path: '',
        alt: '',
        right: false,
      },
      id: 2,
      class: '',
    },
  ];

  initialDelayIndex = QUIZ_FORM_BASE_CONF.delay.findIndex(d => d === this.quizPreparationService.quizSettings().delay);
  initialDisplayIndex = QUIZ_FORM_BASE_CONF.display.findIndex(
    d => d.value === this.quizPreparationService.quizSettings().display
  );

  delayChange(delayId: number) {
    this.quizPreparationService.quizSettings.update(settings => ({
      ...settings,
      delay: QUIZ_FORM_BASE_CONF.delay[delayId],
    }));
  }

  displayChange(displayId: number) {
    this.quizPreparationService.quizSettings.update(settings => ({
      ...settings,
      display: QUIZ_FORM_BASE_CONF.display[displayId].value,
    }));
  }

  questionsChange(question: Event) {
    let val = +(question.target as HTMLInputElement).value;
    val = Math.max(val, QUIZ_FORM_BASE_CONF.questions.min);
    val = Math.min(val, QUIZ_FORM_BASE_CONF.questions.max);

    this.quizPreparationService.quizSettings.update(settings => ({
      ...settings,
      questions: val,
    }));
  }

  protected readonly QUIZ_FORM_BASE_CONF = QUIZ_FORM_BASE_CONF;
}
