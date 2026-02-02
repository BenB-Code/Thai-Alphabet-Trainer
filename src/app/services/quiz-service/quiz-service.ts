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
  flipped = signal<boolean>(false);
  slideAnimation = signal<string | null>(null);

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
    const flipDelay = this.flipped() ? 300 : 0;
    this.flipped.set(false);

    setTimeout(() => {
      this.slideAnimation.set('slide-out-left');
      setTimeout(() => {
        this.index.update(i => i + 1);
        if (this.index() === this.quizSettings().questions - 1) {
          this.state.update(() => FINISHED);
        } else if (this.index() < this.quizSettings().questions - 1) {
          this.canGoForward.update(() => true);
        } else {
          this.canGoForward.update(() => false);
        }
        this.setCanGoBack();
        this.slideAnimation.set('slide-in-left');
        setTimeout(() => this.slideAnimation.set(null), 300);
      }, 300);
    }, flipDelay);
  }

  decrProgress() {
    const flipDelay = this.flipped() ? 300 : 0;
    this.flipped.set(false);
    setTimeout(() => {
      this.slideAnimation.set('slide-out-right');
      setTimeout(() => {
        this.index.update(i => i - 1);
        this.setCanGoBack();
        this.slideAnimation.set('slide-in-right');
        setTimeout(() => this.slideAnimation.set(null), 300);
      }, 300);
    }, flipDelay);
  }

  toggleFlip() {
    this.flipped.update(status => !status);
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
