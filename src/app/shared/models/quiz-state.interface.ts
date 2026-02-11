import { ProgressState } from './progress-state.type';

export interface QuizState {
  canGoForward: boolean;
  canGoBack: boolean;
  index: number;
  state: ProgressState;
  size: number;
}
