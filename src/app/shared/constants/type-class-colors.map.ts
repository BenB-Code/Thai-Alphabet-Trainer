import { GREEN, GREEN_BLUE, ORANGE, PRIMARY, PURPLE, SECONDARY, YELLOW } from './colors.constants';
import { Colors, ConsonantClass, VowelType } from '../models';
import { DIPHTHONG, HIGH, LONG, LOW, MID, SHORT, SPECIAL } from './letters.const';

export const TypeClassColorsMap: Record<ConsonantClass | VowelType, Colors> = {
  [LOW]: PRIMARY,
  [MID]: GREEN,
  [HIGH]: YELLOW,
  [SHORT]: PURPLE,
  [LONG]: ORANGE,
  [DIPHTHONG]: SECONDARY,
  [SPECIAL]: GREEN_BLUE,
};
