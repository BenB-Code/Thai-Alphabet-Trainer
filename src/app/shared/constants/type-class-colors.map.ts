import { COLORS, GREEN, GREEN_BLUE, ORANGE, PRIMARY, PURPLE, RED, SECONDARY } from './colors.constants';
import { ConsonantClass, DIPHTHONG, HIGH, LONG, LOW, MID, SHORT, SPECIAL, VowelType } from '../models';

export const TypeClassColorsMap: Record<ConsonantClass | VowelType, COLORS> = {
  [LOW]: PRIMARY,
  [MID]: GREEN,
  [HIGH]: RED,
  [SHORT]: PURPLE,
  [LONG]: ORANGE,
  [DIPHTHONG]: SECONDARY,
  [SPECIAL]: GREEN_BLUE,
};
