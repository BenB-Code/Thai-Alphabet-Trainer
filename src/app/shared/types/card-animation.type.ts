import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT } from '../constants';

export type CardAnimationType =
  | typeof SLIDE_IN_LEFT
  | typeof SLIDE_IN_RIGHT
  | typeof SLIDE_OUT_LEFT
  | typeof SLIDE_OUT_RIGHT
  | null;
