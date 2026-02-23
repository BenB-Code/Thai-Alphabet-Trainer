import { DIPHTHONG, EXTRA_VOWEL, PHONEMIC_DIPHTHONG, SIMPLE } from '../../constants';

export type VowelType = typeof SIMPLE | typeof DIPHTHONG | typeof PHONEMIC_DIPHTHONG | typeof EXTRA_VOWEL;
