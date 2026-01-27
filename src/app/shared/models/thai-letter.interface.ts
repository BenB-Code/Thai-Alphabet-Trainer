import { LetterKind } from './letter-kind.type';

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
