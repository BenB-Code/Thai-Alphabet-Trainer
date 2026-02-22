import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { SwitchSelectorItem } from '../../shared/types';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { QUIZ_FORM_BASE_CONF } from '../../shared/constants';

@Component({
  selector: 'app-quiz-settings-panel-content',
  imports: [TranslatePipe, SwitchSelector],
  templateUrl: './quiz-settings-panel-content.html',
  styleUrl: './quiz-settings-panel-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizSettingsPanelContent {
  protected readonly quizStoreService = inject(QuizStoreService);
  protected readonly appStoreService = inject(AppStoreService);

  readonly delayList: readonly SwitchSelectorItem[] = [
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
    this.appStoreService.language();
    return QUIZ_FORM_BASE_CONF.display.map((item, index) => ({
      label: { display: true, text: this.appStoreService.translate(item.label) },
      icon: { display: false, path: '', alt: '', right: false },
      id: index,
      class: '',
    }));
  });

  initialDelayIndex = QUIZ_FORM_BASE_CONF.delay.findIndex(d => d === this.quizStoreService.delay());
  initialDisplayIndex = QUIZ_FORM_BASE_CONF.display.findIndex(d => d.value === this.quizStoreService.display());

  delayChange(delayId: number) {
    this.quizStoreService.updateDelay(QUIZ_FORM_BASE_CONF.delay[delayId]);
  }

  displayChange(displayId: number) {
    this.quizStoreService.updateDisplay(QUIZ_FORM_BASE_CONF.display[displayId].value);
  }

  questionsChange(question: Event) {
    let val = +(question.target as HTMLInputElement).value;
    val = Math.max(val, QUIZ_FORM_BASE_CONF.questions.min);
    val = Math.min(val, QUIZ_FORM_BASE_CONF.questions.max);

    this.quizStoreService.updateQuestions(val);
  }

  protected readonly QUIZ_FORM_BASE_CONF = QUIZ_FORM_BASE_CONF;
}
