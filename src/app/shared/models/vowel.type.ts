import { DIPHTHONG, LONG, SHORT, SPECIAL } from '../constants';

export type VowelType = typeof SHORT | typeof LONG | typeof DIPHTHONG | typeof SPECIAL;
