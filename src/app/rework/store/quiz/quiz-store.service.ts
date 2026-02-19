import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import {
  selectCanGoBack,
  selectCanGoForward,
  selectCardAnimation,
  selectCurrentCard,
  selectDelay,
  selectDisplay,
  selectIndex,
  selectIsFinished,
  selectIsFlipped,
  selectIsInProgress,
  selectIsPaused,
  selectIsQuizValid,
  selectProgress,
  selectProgressState,
  selectQuestions,
  selectRandomized,
  selectSelected,
} from './quiz.selectors';
import { DisplayType, ThaiCharacter } from '../../../shared/models';
import { LATIN, MIXED, THAI } from '../../../shared/constants';

@Injectable({ providedIn: 'root' })
export class QuizStoreService {
  private readonly store = inject(Store);

  readonly display = this.store.selectSignal(selectDisplay);
  readonly questions = this.store.selectSignal(selectQuestions);
  readonly delay = this.store.selectSignal(selectDelay);
  readonly selected = this.store.selectSignal(selectSelected);
  readonly randomized = this.store.selectSignal(selectRandomized);

  readonly index = this.store.selectSignal(selectIndex);
  readonly progressState = this.store.selectSignal(selectProgressState);
  readonly isFlipped = this.store.selectSignal(selectIsFlipped);
  readonly cardAnimation = this.store.selectSignal(selectCardAnimation);

  readonly canGoBack = this.store.selectSignal(selectCanGoBack);
  readonly canGoForward = this.store.selectSignal(selectCanGoForward);
  readonly currentCard = this.store.selectSignal(selectCurrentCard);
  readonly progress = this.store.selectSignal(selectProgress);
  readonly isFinished = this.store.selectSignal(selectIsFinished);
  readonly isInProgress = this.store.selectSignal(selectIsInProgress);
  readonly isPaused = this.store.selectSignal(selectIsPaused);
  readonly isQuizValid = this.store.selectSignal(selectIsQuizValid);

  updateDisplay(display: DisplayType): void {
    this.store.dispatch(QuizSettingsActions.updateDisplay({ display }));
  }

  updateQuestions(questions: number): void {
    this.store.dispatch(QuizSettingsActions.updateQuestions({ questions }));
  }

  updateDelay(delay: number): void {
    this.store.dispatch(QuizSettingsActions.updateDelay({ delay }));
  }

  generateQuizList(): void {
    const questions = this.questions();
    const selected = this.selected();
    const display = this.display();

    const base = Math.floor(questions / selected.length);
    const remainder = questions % selected.length;
    const shuffledIndexes = this.shuffled([...selected.keys()]);

    const newList: ThaiCharacter[] = [];
    for (let i = 0; i < selected.length; i++) {
      const count = base + (shuffledIndexes.indexOf(i) < remainder ? 1 : 0);
      const displays = this.distributeDisplayTypes(count, display);
      for (let j = 0; j < count; j++) {
        newList.push({ ...selected[i], display: displays[j] });
      }
    }

    this.store.dispatch(QuizSettingsActions.setRandomizedList({ randomized: this.shuffled(newList) }));
  }

  start(): void {
    this.store.dispatch(QuizSessionActions.start());
  }

  reset(): void {
    this.store.dispatch(QuizSessionActions.reset());
  }

  next(): void {
    this.store.dispatch(QuizSessionActions.next());
  }

  previous(): void {
    this.store.dispatch(QuizSessionActions.previous());
  }

  toggleFlip(): void {
    this.store.dispatch(QuizSessionActions.toggleFlip());
  }

  togglePause(): void {
    this.store.dispatch(QuizSessionActions.togglePause());
  }

  private distributeDisplayTypes(count: number, display: DisplayType): DisplayType[] {
    if (display !== MIXED) {
      return new Array(count).fill(display);
    }
    const half = Math.floor(count / 2);
    const types: DisplayType[] = [...new Array(half).fill(LATIN), ...new Array(count - half).fill(THAI)];
    return this.shuffled(types);
  }

  private shuffled<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}
