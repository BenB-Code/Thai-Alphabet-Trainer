import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchSelector } from '../../common/switch-selector/switch-selector';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { AppStoreService } from '../../store/app/app-store.service';
import { QUIZ_FORM_CONF } from '../../shared/constants';
import { SwitchSelectorItem } from '../../shared/interfaces';

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

  readonly autoFlipList: readonly SwitchSelectorItem[] = [
    {
      label: {
        display: false,
        text: '',
      },
      icon: {
        display: true,
        path: 'icons/power-off.svg',
        alt: 'Off',
        right: false,
      },
      id: 0,
      class: 'lighter-icon',
    },
    {
      label: {
        display: false,
        text: '',
      },
      icon: {
        display: true,
        path: 'icons/power-on.svg',
        alt: 'On',
        right: false,
      },
      id: 1,
      class: 'lighter-icon',
    },
  ];
  readonly delayList: readonly SwitchSelectorItem[] = [
    {
      label: {
        display: true,
        text: `${QUIZ_FORM_CONF.delay[0]}s`,
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
        text: `${QUIZ_FORM_CONF.delay[1]}s`,
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
        text: `${QUIZ_FORM_CONF.delay[2]}s`,
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
        text: `${QUIZ_FORM_CONF.delay[3]}s`,
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
        text: `${QUIZ_FORM_CONF.delay[4]}s`,
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
    return QUIZ_FORM_CONF.display.map((item, index) => ({
      label: { display: true, text: this.appStoreService.translate(item.label) },
      icon: { display: false, path: '', alt: '', right: false },
      id: index,
      class: '',
    }));
  });

  initialDelayIndex = QUIZ_FORM_CONF.delay.findIndex(d => d === this.quizStoreService.delay());
  initialDisplayIndex = QUIZ_FORM_CONF.display.findIndex(d => d.value === this.quizStoreService.display());
  initialAutoFlipIndex = QUIZ_FORM_CONF.autoFlip.findIndex(d => d === this.quizStoreService.autoFlip());

  delayChange(delayId: number) {
    this.quizStoreService.updateDelay(QUIZ_FORM_CONF.delay[delayId]);
  }

  displayChange(displayId: number) {
    this.quizStoreService.updateDisplay(QUIZ_FORM_CONF.display[displayId].value);
  }

  autoFlipChange(autoFlip: number) {
    this.quizStoreService.updateAutoFlip(QUIZ_FORM_CONF.autoFlip[autoFlip]);
  }

  questionsChange(question: Event) {
    let val = +(question.target as HTMLInputElement).value;
    val = Math.max(val, QUIZ_FORM_CONF.questions.min);
    val = Math.min(val, QUIZ_FORM_CONF.questions.max);

    this.quizStoreService.updateQuestions(val);
  }

  protected readonly QUIZ_FORM_CONF = QUIZ_FORM_CONF;
}
