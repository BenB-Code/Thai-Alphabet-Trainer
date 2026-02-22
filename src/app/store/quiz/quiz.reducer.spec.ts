import { INITIAL_QUIZ_STATE, INITIAL_SESSION_STATE } from './quiz.state';
import { quizFeature } from './quiz.reducer';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { FINISHED, IN_PROGRESS, LATIN, PAUSE, THAI } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';
import { DisplayType } from '../../shared/types';

describe('Quiz Reducer', () => {
  const reducer = quizFeature.reducer;

  it('should return the initial state for unknown action', () => {
    const result = reducer(undefined, { type: 'UNKNOWN' });
    expect(result).toEqual(INITIAL_QUIZ_STATE);
  });

  describe('Settings actions', () => {
    it('should update display', () => {
      const result = reducer(INITIAL_QUIZ_STATE, QuizSettingsActions.updateDisplay({ display: LATIN }));
      expect(result.settings.display).toBe(LATIN);
    });

    it('should update questions', () => {
      const result = reducer(INITIAL_QUIZ_STATE, QuizSettingsActions.updateQuestions({ questions: 20 }));
      expect(result.settings.questions).toBe(20);
    });

    it('should update delay', () => {
      const result = reducer(INITIAL_QUIZ_STATE, QuizSettingsActions.updateDelay({ delay: 10 }));
      expect(result.settings.delay).toBe(10);
    });

    it('should update selected', () => {
      const selected = [THAI_CONSONANTS[0]];
      const result = reducer(INITIAL_QUIZ_STATE, QuizSettingsActions.updateSelected({ selected }));
      expect(result.settings.selected).toEqual(selected);
    });

    it('should set randomized list', () => {
      const randomized = [{ ...THAI_CONSONANTS[0], display: THAI as DisplayType }];
      const result = reducer(INITIAL_QUIZ_STATE, QuizSettingsActions.setRandomizedList({ randomized }));
      expect(result.settings.randomized).toEqual(randomized);
    });
  });

  describe('Session actions', () => {
    it('should start with inProgress and reset session fields', () => {
      const result = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
      expect(result.session.progressState).toBe(IN_PROGRESS);
      expect(result.session.index).toBe(0);
      expect(result.session.flipped).toBeFalse();
      expect(result.session.cardAnimation).toBeNull();
    });

    it('should reset session to initial state', () => {
      const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
      const result = reducer(started, QuizSessionActions.reset());
      expect(result.session).toEqual(INITIAL_SESSION_STATE);
    });

    it('should set index and resume inProgress', () => {
      const result = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.setIndex({ index: 3 }));
      expect(result.session.index).toBe(3);
      expect(result.session.progressState).toBe(IN_PROGRESS);
    });

    describe('setAnimation', () => {
      it('should set slide-in-left animation', () => {
        const result = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.setAnimation({ animation: 'slide-in-left' }));
        expect(result.session.cardAnimation).toBe('slide-in-left');
      });

      it('should reset flipped on slide-out-left', () => {
        const flippedState = { ...INITIAL_QUIZ_STATE, session: { ...INITIAL_QUIZ_STATE.session, flipped: true } };
        const result = reducer(flippedState, QuizSessionActions.setAnimation({ animation: 'slide-out-left' }));
        expect(result.session.flipped).toBeFalse();
      });

      it('should reset flipped on slide-out-right', () => {
        const flippedState = { ...INITIAL_QUIZ_STATE, session: { ...INITIAL_QUIZ_STATE.session, flipped: true } };
        const result = reducer(flippedState, QuizSessionActions.setAnimation({ animation: 'slide-out-right' }));
        expect(result.session.flipped).toBeFalse();
      });

      it('should not reset flipped on slide-in-right', () => {
        const flippedState = { ...INITIAL_QUIZ_STATE, session: { ...INITIAL_QUIZ_STATE.session, flipped: true } };
        const result = reducer(flippedState, QuizSessionActions.setAnimation({ animation: 'slide-in-right' }));
        expect(result.session.flipped).toBeTrue();
      });

      it('should clear animation with null', () => {
        const result = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.setAnimation({ animation: null }));
        expect(result.session.cardAnimation).toBeNull();
      });
    });

    describe('toggleFlip', () => {
      it('should flip and pause', () => {
        const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
        const result = reducer(started, QuizSessionActions.toggleFlip());
        expect(result.session.flipped).toBeTrue();
        expect(result.session.progressState).toBe(PAUSE);
      });

      it('should unflip and resume inProgress', () => {
        const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
        const flipped = reducer(started, QuizSessionActions.toggleFlip());
        const result = reducer(flipped, QuizSessionActions.toggleFlip());
        expect(result.session.flipped).toBeFalse();
        expect(result.session.progressState).toBe(IN_PROGRESS);
      });
    });

    describe('togglePause', () => {
      it('should pause when inProgress', () => {
        const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
        const result = reducer(started, QuizSessionActions.togglePause());
        expect(result.session.progressState).toBe(PAUSE);
      });

      it('should resume when paused', () => {
        const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
        const paused = reducer(started, QuizSessionActions.togglePause());
        const result = reducer(paused, QuizSessionActions.togglePause());
        expect(result.session.progressState).toBe(IN_PROGRESS);
      });

      it('should unflip and resume when flipped', () => {
        const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
        const flipped = reducer(started, QuizSessionActions.toggleFlip());
        const result = reducer(flipped, QuizSessionActions.togglePause());
        expect(result.session.flipped).toBeFalse();
        expect(result.session.progressState).toBe(IN_PROGRESS);
      });
    });

    it('should finish', () => {
      const started = reducer(INITIAL_QUIZ_STATE, QuizSessionActions.start());
      const result = reducer(started, QuizSessionActions.finish());
      expect(result.session.progressState).toBe(FINISHED);
    });
  });
});
