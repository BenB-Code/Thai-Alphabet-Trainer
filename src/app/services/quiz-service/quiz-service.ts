import { Injectable, signal } from '@angular/core';
import { ProgressState, QuizFormat, ThaiCharacter } from '../../shared/models';
import { FINISHED, IN_PROGRESS, LATIN, MIXED, PAUSE, QUIZ_FORM_BASE_CONF, THAI } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizSettings = signal<QuizFormat>({
    display: LATIN,
    questions: 10,
    selected: [],
    delay: QUIZ_FORM_BASE_CONF.delay[2],
    randomized: [],
  });
  isValid = signal<boolean>(false);
  canGoBack = signal<boolean>(false);
  canGoForward = signal<boolean>(true);
  index = signal<number>(0);
  state = signal<ProgressState>(IN_PROGRESS);

  generateQuizList() {
    let newList: ThaiCharacter[] = [];
    const quantity = this.quizSettings().questions;
    const selected = this.quizSettings().selected;

    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * selected.length);
      let letter = selected[randomIndex];

      letter = {
        ...letter,
        display: this.generateDisplayType(),
      };
      newList = [...newList, letter];
    }
    this.quizSettings.update(setting => ({ ...setting, randomized: newList }));
  }

  generateDisplayType() {
    if (this.quizSettings()?.display === MIXED) {
      return Math.random() < 0.5 ? LATIN : THAI;
    }
    return this.quizSettings()?.display;
  }

  setCanGoBack() {
    if (this.index() === 0) {
      this.canGoBack.update(() => false);
    } else {
      this.canGoBack.update(() => true);
    }
  }

  incrProgress() {
    this.index.update(i => i + 1);
    if (this.index() === this.quizSettings().questions - 1) {
      this.state.update(() => FINISHED);
    } else if (this.index() < this.quizSettings().questions - 1) {
      this.canGoForward.update(() => true);
    } else {
      this.canGoForward.update(() => false);
    }
    this.setCanGoBack();
  }

  decrProgress() {
    this.index.update(i => i - 1);
    this.setCanGoBack();
  }

  toggleProgressState() {
    this.state.update(state => (state === IN_PROGRESS ? PAUSE : IN_PROGRESS));
  }

  resetQuiz() {
    this.isValid.update(() => false);
    this.canGoBack.update(() => false);
    this.canGoForward.update(() => true);
    this.index.update(() => 0);
    this.state.update(() => IN_PROGRESS);
  }
}
