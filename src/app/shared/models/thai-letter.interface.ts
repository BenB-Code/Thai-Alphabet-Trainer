import { LetterKind } from './letter-kind.type';
import { DisplayType } from './display.type';

export interface ThaiLetter {
  id: number;
  kind: LetterKind;
  character: {
    thai: string;
    roman: string;
  };
  live: boolean;
  exampleWord: {
    roman: string;
    thai: string;
    en: string;
    fr: string;
  };
  display?: DisplayType;
}
