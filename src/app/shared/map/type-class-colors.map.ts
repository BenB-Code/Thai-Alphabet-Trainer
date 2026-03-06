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
  DIPHTHONG,
  EXTRA_VOWEL,
  HIGH,
  LONG,
  LOW,
  MID,
  SHORT,
  SIMPLE,
  SPECIAL,
} from '../constants';
import { ColorsType, ConsonantClassType, VowelLengthType, VowelType } from '../types';

export const TypeClassColorsMap: Record<ConsonantClassType | VowelLengthType | VowelType, ColorsType> = {
  [LOW]: COLOR_LOW,
  [MID]: COLOR_MID,
  [HIGH]: COLOR_HIGH,
  [SHORT]: COLOR_SHORT,
  [LONG]: COLOR_LONG,
  [DIPHTHONG]: COLOR_DIPHTONG,
  [SPECIAL]: COLOR_SPECIAL,
  [EXTRA_VOWEL]: COLOR_EXTRA,
  [SIMPLE]: COLOR_SIMPLE,
};
