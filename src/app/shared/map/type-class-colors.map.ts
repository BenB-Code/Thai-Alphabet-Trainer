import {
  COLOR_DIPHTONG,
  COLOR_EXTRA,
  COLOR_LOW,
  COLOR_MID,
  COLOR_SPECIAL,
  DIACRITIC,
  DIGIT,
  DIPHTHONG,
  EXTRA_VOWEL,
  HIGH,
  LOW,
  MID,
  NUMBER,
  SIMPLE,
  SPECIAL,
  TONE_MARK,
} from '../constants';
import { ColorsType, SymbolCategoriesType } from '../types';

export const TypeClassColorsMap: Record<SymbolCategoriesType, ColorsType> = {
  [LOW]: COLOR_LOW,
  [MID]: COLOR_LOW,
  [HIGH]: COLOR_LOW,
  [DIPHTHONG]: COLOR_SPECIAL,
  [SPECIAL]: COLOR_SPECIAL,
  [EXTRA_VOWEL]: COLOR_SPECIAL,
  [SIMPLE]: COLOR_SPECIAL,
  [DIGIT]: COLOR_MID,
  [NUMBER]: COLOR_MID,
  [TONE_MARK]: COLOR_EXTRA,
  [DIACRITIC]: COLOR_DIPHTONG,
};
