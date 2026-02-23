import { FINISHED, IN_PROGRESS, PAUSE } from '../constants';

export type ProgressStateType = typeof PAUSE | typeof IN_PROGRESS | typeof FINISHED;
