import { GREEN, HIGH, LONG, LOW, MID, ORANGE, PRIMARY, PURPLE, SHORT, YELLOW } from '../constants';
import { ColorsType, ConsonantClassType, VowelLengthType } from '../types';

export const TypeClassColorsMap: Record<ConsonantClassType | VowelLengthType, ColorsType> = {
  [LOW]: PRIMARY,
  [MID]: GREEN,
  [HIGH]: YELLOW,
  [SHORT]: PURPLE,
  [LONG]: ORANGE,
};
