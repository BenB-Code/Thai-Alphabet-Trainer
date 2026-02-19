import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, switchMap, tap, timer, withLatestFrom } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { selectDelayMs, selectIndex, selectIsInProgress, selectMaxIndex, selectProgressState } from './quiz.selectors';
import { QuizTimerService } from '../../../services/quiz-timer-service/quiz-timer-service';
import { SelectionStore } from '../selection/selection.store';
import { FORWARD, IN_PROGRESS, PAUSE } from '../../../shared/constants';

@Injectable()
export class QuizEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly timerService = inject(QuizTimerService);
  private readonly selectionStore = inject(SelectionStore);

  readonly syncSelection$ = createEffect(() =>
    toObservable(this.selectionStore.selected).pipe(map(selected => QuizSettingsActions.updateSelected({ selected })))
  );

  readonly startTimer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuizSessionActions.start),
        withLatestFrom(this.store.select(selectDelayMs)),
        tap(([, delayMs]) =>
          this.timerService.start(delayMs, () => this.store.dispatch(QuizSessionActions.timerExpired()))
        )
      ),
    { dispatch: false }
  );

  readonly stopTimer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuizSessionActions.finish),
        tap(() => this.timerService.stop())
      ),
    { dispatch: false }
  );

  readonly onToggleFlip$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuizSessionActions.toggleFlip),
        withLatestFrom(this.store.select(selectProgressState), this.store.select(selectDelayMs)),
        tap(([, progressState, delayMs]) => {
          if (progressState === PAUSE) {
            this.timerService.stop();
          } else {
            this.timerService.start(delayMs, () => this.store.dispatch(QuizSessionActions.timerExpired()));
          }
        })
      ),
    { dispatch: false }
  );

  readonly onTogglePause$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuizSessionActions.togglePause),
        withLatestFrom(this.store.select(selectProgressState), this.store.select(selectDelayMs)),
        tap(([, progressState, delayMs]) => {
          if (progressState === IN_PROGRESS) {
            this.timerService.start(delayMs, () => this.store.dispatch(QuizSessionActions.timerExpired()));
          } else {
            this.timerService.stop();
          }
        })
      ),
    { dispatch: false }
  );

  readonly onTimerExpired$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizSessionActions.timerExpired),
      map(() => QuizSessionActions.next())
    )
  );

  readonly resetTimer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuizSessionActions.reset),
        withLatestFrom(this.store.select(selectDelayMs)),
        tap(([, delayMs]) => this.timerService.reset(delayMs))
      ),
    { dispatch: false }
  );

  readonly navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizSessionActions.next, QuizSessionActions.previous),
      withLatestFrom(
        this.store.select(selectIndex),
        this.store.select(selectMaxIndex),
        this.store.select(selectDelayMs),
        this.store.select(selectIsInProgress)
      ),
      switchMap(([action, currentIndex, maxIndex, delayMs, isInProgress]) => {
        const direction = action.type === QuizSessionActions.next.type ? FORWARD : 'backward';
        const nextIndex = direction === FORWARD ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex < 0) return EMPTY;

        if (nextIndex > maxIndex) {
          this.timerService.stop();
          return [QuizSessionActions.finish()];
        }

        const slideOut = direction === FORWARD ? 'slide-out-left' : 'slide-out-right';
        const slideIn = direction === FORWARD ? 'slide-in-left' : 'slide-in-right';

        this.store.dispatch(QuizSessionActions.setAnimation({ animation: slideOut }));
        this.timerService.reset(delayMs);

        return timer(300).pipe(
          tap(() => {
            this.store.dispatch(QuizSessionActions.setIndex({ index: nextIndex }));
            this.store.dispatch(QuizSessionActions.setAnimation({ animation: slideIn }));

            if (isInProgress) {
              this.timerService.start(delayMs, () => this.store.dispatch(QuizSessionActions.timerExpired()));
            }
          }),
          switchMap(() => timer(300).pipe(map(() => QuizSessionActions.setAnimation({ animation: null }))))
        );
      })
    )
  );
}
