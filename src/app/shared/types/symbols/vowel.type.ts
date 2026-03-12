import { DIPHTHONG, EXTRA_VOWEL, SIMPLE, SPECIAL } from '../../constants';

export type VowelType = typeof SIMPLE | typeof DIPHTHONG | typeof SPECIAL | typeof EXTRA_VOWEL;
