import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concat, EMPTY, map, of, switchMap, timer, withLatestFrom } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { selectIndex, selectIsInProgress, selectMaxIndex } from './quiz.selectors';
import { SelectionStore } from '../selection/selection.store';
import { FORWARD } from '../../shared/constants';

@Injectable()
export class QuizEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly selectionStore = inject(SelectionStore);

  readonly syncSelection$ = createEffect(() =>
    toObservable(this.selectionStore.selected).pipe(map(selected => QuizSettingsActions.updateSelected({ selected })))
  );

  readonly navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizSessionActions.next, QuizSessionActions.previous),
      withLatestFrom(
        this.store.select(selectIndex),
        this.store.select(selectMaxIndex),
        this.store.select(selectIsInProgress)
      ),
      switchMap(([action, currentIndex, maxIndex]) => {
        const direction = action.type === QuizSessionActions.next.type ? FORWARD : 'backward';
        const nextIndex = direction === FORWARD ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex < 0) return EMPTY;

        if (nextIndex > maxIndex) {
          return of(QuizSessionActions.finish());
        }

        const slideOut = direction === FORWARD ? 'slide-out-left' : 'slide-out-right';
        const slideIn = direction === FORWARD ? 'slide-in-left' : 'slide-in-right';

        return concat(
          of(QuizSessionActions.setAnimation({ animation: slideOut })),
          timer(300).pipe(
            switchMap(() =>
              of(
                QuizSessionActions.setIndex({ index: nextIndex }),
                QuizSessionActions.setAnimation({ animation: slideIn })
              )
            )
          ),
          timer(300).pipe(map(() => QuizSessionActions.setAnimation({ animation: null })))
        );
      })
    )
  );
}
