export interface ThaiLetter {
  id: number;
  kind: LetterKind;
  character: string;
  romanization: string;
  exampleWord: string;
  exampleWordThai: string;
  en: {
    exampleMeaning: string;
    details?: string;
  };
  fr: {
    exampleMeaning: string;
    details?: string;
  };
}

export type LetterKind = typeof CONSONANT | typeof VOWEL;

export const CONSONANT = 'consonant';
export const VOWEL = 'vowel';
