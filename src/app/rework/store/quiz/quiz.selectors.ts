import { createSelector } from '@ngrx/store';
import { quizFeature } from './quiz.reducer';
import { FINISHED, IN_PROGRESS, PAUSE, QUIZ_FORM_BASE_CONF } from '../../../shared/constants';

export const selectQuizState = quizFeature.selectQuizState;

export const selectSettings = createSelector(selectQuizState, state => state.settings);
export const selectSession = createSelector(selectQuizState, state => state.session);

export const selectDisplay = createSelector(selectSettings, s => s.display);
export const selectQuestions = createSelector(selectSettings, s => s.questions);
export const selectDelay = createSelector(selectSettings, s => s.delay);
export const selectDelayMs = createSelector(selectDelay, delay => delay * 1000);
export const selectSelected = createSelector(selectSettings, s => s.selected);
export const selectRandomized = createSelector(selectSettings, s => s.randomized);

export const selectIndex = createSelector(selectSession, s => s.index);
export const selectProgressState = createSelector(selectSession, s => s.progressState);
export const selectIsFlipped = createSelector(selectSession, s => s.flipped);
export const selectCardAnimation = createSelector(selectSession, s => s.cardAnimation);

export const selectMaxIndex = createSelector(selectQuestions, questions => Math.max(0, questions - 1));

export const selectCanGoBack = createSelector(selectIndex, index => index > 0);

export const selectCanGoForward = createSelector(selectIndex, selectMaxIndex, (index, maxIndex) => index <= maxIndex);

export const selectCurrentCard = createSelector(
  selectRandomized,
  selectIndex,
  (randomized, index) => randomized[index] ?? null
);

export const selectProgress = createSelector(selectIndex, selectQuestions, (index, questions) => ({
  current: index + 1,
  total: questions,
}));

export const selectIsFinished = createSelector(selectProgressState, state => state === FINISHED);

export const selectIsInProgress = createSelector(selectProgressState, state => state === IN_PROGRESS);

export const selectIsPaused = createSelector(selectProgressState, state => state === PAUSE);

export const selectIsQuizValid = createSelector(selectSettings, settings => {
  if (!settings.display) return false;
  if (
    !settings.questions ||
    settings.questions < QUIZ_FORM_BASE_CONF.questions.min ||
    settings.questions > QUIZ_FORM_BASE_CONF.questions.max
  )
    return false;
  if (settings.selected.length <= 0) return false;
  if (settings.delay == null || settings.delay < 0) return false;
  return true;
});
