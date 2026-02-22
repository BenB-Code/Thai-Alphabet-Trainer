import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideStore, Store } from '@ngrx/store';
import { QuizStoreService } from './quiz-store.service';
import { quizFeature } from './quiz.reducer';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { THAI_CONSONANTS } from '../../data';
import { LATIN, MIXED, PAUSE, THAI } from '../../shared/constants';

describe('QuizStoreService', () => {
  let service: QuizStoreService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideStore({ [quizFeature.name]: quizFeature.reducer })],
    });

    service = TestBed.inject(QuizStoreService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initial signals', () => {
    it('should expose settings defaults', () => {
      expect(service.display()).toBe(THAI);
      expect(service.questions()).toBe(10);
      expect(service.delay()).toBe(5);
      expect(service.delayMs()).toBe(5000);
      expect(service.selected()).toEqual([]);
      expect(service.randomized()).toEqual([]);
    });

    it('should expose session defaults', () => {
      expect(service.index()).toBe(0);
      expect(service.progressState()).toBe(PAUSE);
      expect(service.isFlipped()).toBeFalse();
      expect(service.cardAnimation()).toBeNull();
      expect(service.canGoBack()).toBeFalse();
      expect(service.canGoForward()).toBeTrue();
      expect(service.currentCard()).toBeNull();
      expect(service.progress()).toEqual({ current: 1, total: 10 });
      expect(service.isFinished()).toBeFalse();
      expect(service.isInProgress()).toBeFalse();
      expect(service.isPaused()).toBeTrue();
      expect(service.isQuizValid()).toBeFalse();
    });
  });

  describe('settings dispatch methods', () => {
    it('updateDisplay should update display', () => {
      service.updateDisplay(LATIN);
      expect(service.display()).toBe(LATIN);
    });

    it('updateQuestions should update questions', () => {
      service.updateQuestions(20);
      expect(service.questions()).toBe(20);
    });

    it('updateDelay should update delay', () => {
      service.updateDelay(10);
      expect(service.delay()).toBe(10);
      expect(service.delayMs()).toBe(10000);
    });
  });

  describe('session dispatch methods', () => {
    it('start should set inProgress', () => {
      service.start();
      expect(service.isInProgress()).toBeTrue();
    });

    it('reset should restore pause', () => {
      service.start();
      service.reset();
      expect(service.isPaused()).toBeTrue();
    });

    it('next should dispatch next action', () => {
      spyOn(store, 'dispatch');
      service.next();
      expect(store.dispatch).toHaveBeenCalledWith(QuizSessionActions.next());
    });

    it('previous should dispatch previous action', () => {
      spyOn(store, 'dispatch');
      service.previous();
      expect(store.dispatch).toHaveBeenCalledWith(QuizSessionActions.previous());
    });

    it('toggleFlip should toggle flipped', () => {
      service.start();
      service.toggleFlip();
      expect(service.isFlipped()).toBeTrue();
    });

    it('togglePause should toggle pause', () => {
      service.start();
      service.togglePause();
      expect(service.isPaused()).toBeTrue();
    });
  });

  describe('generateQuizList', () => {
    const selected = THAI_CONSONANTS.slice(0, 3);

    beforeEach(() => {
      store.dispatch(QuizSettingsActions.updateSelected({ selected }));
    });

    it('should generate the correct number of items', () => {
      store.dispatch(QuizSettingsActions.updateQuestions({ questions: 9 }));
      service.generateQuizList();
      expect(service.randomized().length).toBe(9);
    });

    it('should include all selected letters', () => {
      store.dispatch(QuizSettingsActions.updateQuestions({ questions: 9 }));
      service.generateQuizList();
      const ids = new Set(service.randomized().map(c => c.id));
      expect(ids.size).toBe(3);
    });

    it('should assign THAI display when display is THAI', () => {
      service.generateQuizList();
      expect(service.randomized().every(c => c.display === THAI)).toBeTrue();
    });

    it('should assign LATIN display when display is LATIN', () => {
      store.dispatch(QuizSettingsActions.updateDisplay({ display: LATIN }));
      service.generateQuizList();
      expect(service.randomized().every(c => c.display === LATIN)).toBeTrue();
    });

    it('should mix THAI and LATIN when display is MIXED', () => {
      store.dispatch(QuizSettingsActions.updateDisplay({ display: MIXED }));
      store.dispatch(QuizSettingsActions.updateQuestions({ questions: 100 }));
      service.generateQuizList();
      const displays = service.randomized().map(c => c.display);
      expect(displays).toContain(THAI);
      expect(displays).toContain(LATIN);
    });

    it('should handle single item per letter with MIXED display', () => {
      store.dispatch(QuizSettingsActions.updateQuestions({ questions: 3 }));
      store.dispatch(QuizSettingsActions.updateDisplay({ display: MIXED }));
      service.generateQuizList();
      expect(service.randomized().length).toBe(3);
    });
  });
});
