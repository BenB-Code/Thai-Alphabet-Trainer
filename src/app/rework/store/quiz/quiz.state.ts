import { CardAnimation, DisplayType, ProgressState, ThaiCharacter } from '../../../shared/models';
import { PAUSE, QUIZ_FORM_BASE_CONF, THAI } from '../../../shared/constants';

export interface QuizSettingsState {
  display: DisplayType;
  questions: number;
  delay: number;
  selected: ThaiCharacter[];
  randomized: ThaiCharacter[];
}

export interface QuizSessionState {
  index: number;
  progressState: ProgressState;
  flipped: boolean;
  cardAnimation: CardAnimation;
}

export interface QuizState {
  settings: QuizSettingsState;
  session: QuizSessionState;
}

export const INITIAL_SETTINGS_STATE: QuizSettingsState = {
  display: THAI,
  questions: 10,
  delay: QUIZ_FORM_BASE_CONF.delay[2],
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
