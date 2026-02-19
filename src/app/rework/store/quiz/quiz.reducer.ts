import { createFeature, createReducer, on } from '@ngrx/store';
import { QuizSessionActions, QuizSettingsActions } from './quiz.actions';
import { INITIAL_QUIZ_STATE } from './quiz.state';
import { FINISHED, IN_PROGRESS, PAUSE } from '../../../shared/constants';

export const quizFeature = createFeature({
  name: 'quiz',
  reducer: createReducer(
    INITIAL_QUIZ_STATE,

    on(QuizSettingsActions.updateDisplay, (state, { display }) => ({
      ...state,
      settings: { ...state.settings, display },
    })),

    on(QuizSettingsActions.updateQuestions, (state, { questions }) => ({
      ...state,
      settings: { ...state.settings, questions },
    })),

    on(QuizSettingsActions.updateDelay, (state, { delay }) => ({
      ...state,
      settings: { ...state.settings, delay },
    })),

    on(QuizSettingsActions.updateSelected, (state, { selected }) => ({
      ...state,
      settings: { ...state.settings, selected },
    })),

    on(QuizSettingsActions.setRandomizedList, (state, { randomized }) => ({
      ...state,
      settings: { ...state.settings, randomized },
    })),

    on(QuizSessionActions.start, state => ({
      ...state,
      session: { ...state.session, progressState: IN_PROGRESS },
    })),

    on(QuizSessionActions.reset, state => ({
      ...state,
      session: {
        index: 0,
        progressState: PAUSE,
        flipped: false,
        cardAnimation: null,
      },
    })),

    on(QuizSessionActions.setIndex, (state, { index }) => ({
      ...state,
      session: { ...state.session, index },
    })),

    on(QuizSessionActions.setAnimation, (state, { animation }) => ({
      ...state,
      session: { ...state.session, cardAnimation: animation },
    })),

    on(QuizSessionActions.toggleFlip, state => {
      const nextFlipped = !state.session.flipped;
      return {
        ...state,
        session: {
          ...state.session,
          flipped: nextFlipped,
          progressState: nextFlipped ? PAUSE : IN_PROGRESS,
        },
      };
    }),

    on(QuizSessionActions.togglePause, state => {
      if (state.session.flipped) {
        return {
          ...state,
          session: {
            ...state.session,
            flipped: false,
            progressState: IN_PROGRESS,
          },
        };
      }

      const nextState = state.session.progressState === IN_PROGRESS ? PAUSE : IN_PROGRESS;
      return {
        ...state,
        session: { ...state.session, progressState: nextState },
      };
    }),

    on(QuizSessionActions.finish, state => ({
      ...state,
      session: { ...state.session, progressState: FINISHED },
    }))
  ),
});
