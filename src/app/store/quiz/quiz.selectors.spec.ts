import {
  selectCanGoBack,
  selectCanGoForward,
  selectCardAnimation,
  selectCurrentCard,
  selectDelay,
  selectDelayMs,
  selectDisplay,
  selectIndex,
  selectIsFinished,
  selectIsFlipped,
  selectIsInProgress,
  selectIsPaused,
  selectIsQuizValid,
  selectMaxIndex,
  selectProgress,
  selectProgressState,
  selectQuestions,
  selectRandomized,
  selectSelected,
  selectSession,
  selectSettings,
} from './quiz.selectors';
import { INITIAL_QUIZ_STATE } from './quiz.state';
import { FINISHED, IN_PROGRESS, PAUSE, THAI } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';
import { DisplayType } from '../../shared/types';
import { QuizSettingsState } from './quiz.state';

describe('Quiz Selectors', () => {
  const state = INITIAL_QUIZ_STATE;

  it('selectSettings should return settings slice', () => {
    expect(selectSettings.projector(state)).toBe(state.settings);
  });

  it('selectSession should return session slice', () => {
    expect(selectSession.projector(state)).toBe(state.session);
  });

  it('selectDisplay should return display', () => {
    expect(selectDisplay.projector(state.settings)).toBe(THAI);
  });

  it('selectQuestions should return questions count', () => {
    expect(selectQuestions.projector(state.settings)).toBe(10);
  });

  it('selectDelay should return delay', () => {
    expect(selectDelay.projector(state.settings)).toBe(5);
  });

  it('selectDelayMs should convert delay to milliseconds', () => {
    expect(selectDelayMs.projector(5)).toBe(5000);
    expect(selectDelayMs.projector(0)).toBe(0);
  });

  it('selectSelected should return selected array', () => {
    expect(selectSelected.projector(state.settings)).toEqual([]);
  });

  it('selectRandomized should return randomized array', () => {
    expect(selectRandomized.projector(state.settings)).toEqual([]);
  });

  it('selectIndex should return current index', () => {
    expect(selectIndex.projector(state.session)).toBe(0);
  });

  it('selectProgressState should return progress state', () => {
    expect(selectProgressState.projector(state.session)).toBe(PAUSE);
  });

  it('selectIsFlipped should return flipped state', () => {
    expect(selectIsFlipped.projector(state.session)).toBeFalse();
  });

  it('selectCardAnimation should return card animation', () => {
    expect(selectCardAnimation.projector(state.session)).toBeNull();
  });

  describe('selectMaxIndex', () => {
    it('should return questions - 1', () => {
      expect(selectMaxIndex.projector(10)).toBe(9);
    });

    it('should return 0 when questions is 0', () => {
      expect(selectMaxIndex.projector(0)).toBe(0);
    });
  });

  describe('selectCanGoBack', () => {
    it('should return false at index 0', () => {
      expect(selectCanGoBack.projector(0)).toBeFalse();
    });

    it('should return true at index > 0', () => {
      expect(selectCanGoBack.projector(1)).toBeTrue();
    });
  });

  describe('selectCanGoForward', () => {
    it('should return true when index <= maxIndex', () => {
      expect(selectCanGoForward.projector(0, 9)).toBeTrue();
      expect(selectCanGoForward.projector(9, 9)).toBeTrue();
    });

    it('should return false when index > maxIndex', () => {
      expect(selectCanGoForward.projector(10, 9)).toBeFalse();
    });
  });

  describe('selectCurrentCard', () => {
    it('should return card at current index', () => {
      const card = { ...THAI_CONSONANTS[0], display: THAI as DisplayType };
      expect(selectCurrentCard.projector([card], 0)).toEqual(card);
    });

    it('should return null when index is out of bounds', () => {
      expect(selectCurrentCard.projector([], 0)).toBeNull();
    });
  });

  it('selectProgress should return current (1-based) and total', () => {
    expect(selectProgress.projector(2, 10)).toEqual({ current: 3, total: 10 });
  });

  it('selectIsFinished should check for FINISHED state', () => {
    expect(selectIsFinished.projector(FINISHED)).toBeTrue();
    expect(selectIsFinished.projector(PAUSE)).toBeFalse();
  });

  it('selectIsInProgress should check for IN_PROGRESS state', () => {
    expect(selectIsInProgress.projector(IN_PROGRESS)).toBeTrue();
    expect(selectIsInProgress.projector(PAUSE)).toBeFalse();
  });

  it('selectIsPaused should check for PAUSE state', () => {
    expect(selectIsPaused.projector(PAUSE)).toBeTrue();
    expect(selectIsPaused.projector(IN_PROGRESS)).toBeFalse();
  });

  describe('selectIsQuizValid', () => {
    const validSettings: QuizSettingsState = {
      display: THAI as DisplayType,
      questions: 10,
      delay: 3,
      selected: [THAI_CONSONANTS[0]],
      randomized: [],
    };

    it('should return true for valid settings', () => {
      expect(selectIsQuizValid.projector(validSettings)).toBeTrue();
    });

    it('should return true with delay 0', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, delay: 0 })).toBeTrue();
    });

    it('should return false without display', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, display: '' as DisplayType })).toBeFalse();
    });

    it('should return false with questions 0', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, questions: 0 })).toBeFalse();
    });

    it('should return false with questions above max', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, questions: 501 })).toBeFalse();
    });

    it('should return false with empty selected', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, selected: [] })).toBeFalse();
    });

    it('should return false with negative delay', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, delay: -1 })).toBeFalse();
    });

    it('should return false with null delay', () => {
      expect(selectIsQuizValid.projector({ ...validSettings, delay: null as unknown as number })).toBeFalse();
    });
  });
});
