import { ProgressState } from '../types';

export interface QuizState {
  canGoForward: boolean;
  canGoBack: boolean;
  index: number;
  state: ProgressState;
  size: number;
}
