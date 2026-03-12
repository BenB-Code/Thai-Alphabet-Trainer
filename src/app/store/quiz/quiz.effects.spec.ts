import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { QuizEffects } from './quiz.effects';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { selectIndex, selectIsInProgress, selectMaxIndex } from './quiz.selectors';
import { INITIAL_QUIZ_STATE } from './quiz.state';

@Component({ template: '', standalone: true })
class NoopComponent {}

describe('QuizEffects', () => {
  let effects: QuizEffects;
  let actions$: ReplaySubject<Action>;
  let store: MockStore;
  let fixture: ComponentFixture<NoopComponent>;

  function setup(): void {
    actions$ = new ReplaySubject<Action>(1);

    TestBed.configureTestingModule({
      imports: [NoopComponent],
      providers: [
        provideZonelessChangeDetection(),
        QuizEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { quiz: INITIAL_QUIZ_STATE } }),
      ],
    });

    effects = TestBed.inject(QuizEffects);
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(NoopComponent);
  }

  describe('syncSelection$', () => {
    beforeEach(() => setup());

    afterEach(() => store.resetSelectors());

    it('should emit updateSelected with initial empty selection', async () => {
      const emitted: Action[] = [];
      effects.syncSelection$.subscribe(action => emitted.push(action));

      await fixture.whenStable();

      expect(emitted.length).toBe(1);
      expect(emitted[0]).toEqual(QuizSettingsActions.updateSelected({ selected: [] }));
    });
  });

  describe('navigate$', () => {
    beforeEach(() => {
      jasmine.clock().install();
      setup();
    });

    afterEach(() => {
      store.resetSelectors();
      jasmine.clock().uninstall();
    });

    it('should slide forward on next within bounds', () => {
      store.overrideSelector(selectIndex, 0);
      store.overrideSelector(selectMaxIndex, 5);
      store.overrideSelector(selectIsInProgress, true);
      store.refreshState();

      const emitted: Action[] = [];
      effects.navigate$.subscribe(a => emitted.push(a));

      actions$.next(QuizSessionActions.next());

      expect(emitted.length).toBe(1);
      expect(emitted[0]).toEqual(QuizSessionActions.setAnimation({ animation: 'slide-out-left' }));

      jasmine.clock().tick(300);
      expect(emitted.length).toBe(3);
      expect(emitted[1]).toEqual(QuizSessionActions.setIndex({ index: 1 }));
      expect(emitted[2]).toEqual(QuizSessionActions.setAnimation({ animation: 'slide-in-left' }));

      jasmine.clock().tick(300);
      expect(emitted.length).toBe(4);
      expect(emitted[3]).toEqual(QuizSessionActions.setAnimation({ animation: null }));
    });

    it('should slide backward on previous within bounds', () => {
      store.overrideSelector(selectIndex, 2);
      store.overrideSelector(selectMaxIndex, 5);
      store.overrideSelector(selectIsInProgress, true);
      store.refreshState();

      const emitted: Action[] = [];
      effects.navigate$.subscribe(a => emitted.push(a));

      actions$.next(QuizSessionActions.previous());

      expect(emitted.length).toBe(1);
      expect(emitted[0]).toEqual(QuizSessionActions.setAnimation({ animation: 'slide-out-right' }));

      jasmine.clock().tick(300);
      expect(emitted.length).toBe(3);
      expect(emitted[1]).toEqual(QuizSessionActions.setIndex({ index: 1 }));
      expect(emitted[2]).toEqual(QuizSessionActions.setAnimation({ animation: 'slide-in-right' }));

      jasmine.clock().tick(300);
      expect(emitted.length).toBe(4);
      expect(emitted[3]).toEqual(QuizSessionActions.setAnimation({ animation: null }));
    });

    it('should finish when next exceeds maxIndex', () => {
      store.overrideSelector(selectIndex, 5);
      store.overrideSelector(selectMaxIndex, 5);
      store.overrideSelector(selectIsInProgress, true);
      store.refreshState();

      const emitted: Action[] = [];
      effects.navigate$.subscribe(a => emitted.push(a));

      actions$.next(QuizSessionActions.next());

      expect(emitted.length).toBe(1);
      expect(emitted[0]).toEqual(QuizSessionActions.finish());
    });

    it('should emit nothing when previous goes below 0', () => {
      store.overrideSelector(selectIndex, 0);
      store.overrideSelector(selectMaxIndex, 5);
      store.overrideSelector(selectIsInProgress, true);
      store.refreshState();

      const emitted: Action[] = [];
      effects.navigate$.subscribe(a => emitted.push(a));

      actions$.next(QuizSessionActions.previous());
      jasmine.clock().tick(600);

      expect(emitted.length).toBe(0);
    });
  });
});
