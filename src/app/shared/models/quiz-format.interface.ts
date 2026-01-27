import { ThaiLetter } from './thai-letter.interface';

export interface QuizFormat {
  questions: number | null;
  delay: number | null;
  display: DisplayType | null;
  selected: Set<ThaiLetter> | null;
}

export type DisplayType = typeof LATIN | typeof THAI | typeof MIXED;

export const LATIN = 'latin';
export const THAI = 'thai';
export const MIXED = 'mixed';
