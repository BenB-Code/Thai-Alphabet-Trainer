import { CONSONANT, DIACRITIC, NUMERAL, OTHER, TONE_MARK, VOWEL } from '../../constants';

export type LetterKindType =
  | typeof CONSONANT
  | typeof VOWEL
  | typeof NUMERAL
  | typeof TONE_MARK
  | typeof DIACRITIC
  | typeof OTHER;
