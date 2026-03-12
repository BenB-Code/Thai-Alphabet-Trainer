import { CardAnimationType, DisplayType, ProgressStateType, ThaiSymbolType } from '../../shared/types';
import { PAUSE, QUIZ_FORM_CONF, THAI } from '../../shared/constants';

export interface QuizSettingsState {
  display: DisplayType;
  questions: number;
  delay: number;
  autoFlip: boolean;
  selected: ThaiSymbolType[];
  randomized: ThaiSymbolType[];
}

export interface QuizSessionState {
  index: number;
  progressState: ProgressStateType;
  flipped: boolean;
  cardAnimation: CardAnimationType;
}

export interface QuizState {
  settings: QuizSettingsState;
  session: QuizSessionState;
}

export const INITIAL_SETTINGS_STATE: QuizSettingsState = {
  display: THAI,
  questions: 10,
  autoFlip: false,
  delay: QUIZ_FORM_CONF.delay[2],
  selected: [],
  randomized: [],
};

export const INITIAL_SESSION_STATE: QuizSessionState = {
  index: 0,
  progressState: PAUSE,
  flipped: false,
  cardAnimation: null,
};

export const INITIAL_QUIZ_STATE: QuizState = {
  settings: INITIAL_SETTINGS_STATE,
  session: INITIAL_SESSION_STATE,
};
