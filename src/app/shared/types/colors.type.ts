import {
  COLOR_DIPHTONG,
  COLOR_EXTRA,
  COLOR_HIGH,
  COLOR_LONG,
  COLOR_LOW,
  COLOR_MID,
  COLOR_SHORT,
  COLOR_SIMPLE,
  COLOR_SPECIAL,
  TRANSPARENT,
} from '../constants';

export type ColorsType =
  | typeof COLOR_DIPHTONG
  | typeof COLOR_SIMPLE
  | typeof COLOR_EXTRA
  | typeof COLOR_SPECIAL
  | typeof COLOR_LONG
  | typeof COLOR_SHORT
  | typeof COLOR_LOW
  | typeof COLOR_MID
  | typeof COLOR_HIGH
  | typeof TRANSPARENT;
