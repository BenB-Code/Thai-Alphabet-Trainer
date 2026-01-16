import { ThaiLetter } from './thai-letter.interface';

export interface ThaiVowel extends ThaiLetter {
  type: VowelType;
}

export type VowelType = typeof SHORT | typeof LONG | typeof DIPHTHONG | typeof SPECIAL;

export const SHORT = 'short';
export const LONG = 'long';
export const DIPHTHONG = 'diphthong';
export const SPECIAL = 'special';
