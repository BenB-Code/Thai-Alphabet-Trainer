import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { QuizPreparationService } from '../../../services/quiz-preparation-service/quiz-preparation-service';
import { StateService } from '../../../services/state-service/state-service';
import { QUIZ_FORM_BASE_CONF } from '../../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { I18nService } from '../../../services/i18n-service/i18n-service';

@Component({
  selector: 'app-quiz-settings-panel-content',
  imports: [TranslatePipe, SwitchSelector],
  templateUrl: './quiz-settings-panel-content.html',
  styleUrl: './quiz-settings-panel-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelContent {
  protected readonly quizPreparationService = inject(QuizPreparationService);
  protected readonly stateService = inject(StateService);
  protected readonly i18nService = inject(I18nService);

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

  displayList = computed(() => {
    this.i18nService.activeLanguage();
    return QUIZ_FORM_BASE_CONF.display.map((item, index) => ({
      label: { display: true, text: this.i18nService.translate(item.label) },
      icon: { display: false, path: '', alt: '', right: false },
      id: index,
      class: '',
    }));
  });

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
