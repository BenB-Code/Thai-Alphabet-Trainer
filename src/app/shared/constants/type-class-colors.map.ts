import { GREEN, GREEN_BLUE, ORANGE, PRIMARY, PURPLE, SECONDARY, YELLOW } from './colors.constants';
import { DIPHTHONG, HIGH, LONG, LOW, MID, SHORT, SPECIAL } from './letters.const';
import { Colors, ConsonantClass, VowelType } from '../types';

export const TypeClassColorsMap: Record<ConsonantClass | VowelType, Colors> = {
  [LOW]: PRIMARY,
  [MID]: GREEN,
  [HIGH]: YELLOW,
  [SHORT]: PURPLE,
  [LONG]: ORANGE,
  [DIPHTHONG]: SECONDARY,
  [SPECIAL]: GREEN_BLUE,
};
