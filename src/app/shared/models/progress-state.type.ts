import { FINISHED, IN_PROGRESS, PAUSE } from '../constants';

export type ProgressState = typeof PAUSE | typeof IN_PROGRESS | typeof FINISHED;
