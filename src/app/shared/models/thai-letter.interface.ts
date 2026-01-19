export interface ThaiLetter {
  id: number;
  kind: LetterTypes;
  character: string;
  romanization: string;
  exampleWord: string;
  exampleWordThai: string;
  exampleMeaningEN: string;
  exampleMeaningFR: string;
  details?: string;
}

export type LetterTypes = typeof CONSONANT | typeof VOWEL;

export const CONSONANT = 'consonant';
export const VOWEL = 'vowel';
