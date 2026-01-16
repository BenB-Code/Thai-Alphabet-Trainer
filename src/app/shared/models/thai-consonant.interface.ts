import { ThaiLetter } from './thai-letter.interface';

export interface ThaiConsonant extends ThaiLetter {
  transliteration: string;
  class: ConsonantClass;
}

export type ConsonantClass = typeof MID | typeof HIGH | typeof LOW;

export const MID = 'mid';
export const HIGH = 'high';
export const LOW = 'low';
