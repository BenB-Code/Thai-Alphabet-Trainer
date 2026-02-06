import { ThaiLetter } from './thai-letter.interface';
import { ConsonantClass } from './consonant-class.type';

export interface ThaiConsonant extends ThaiLetter {
  transliteration: {
    initial: string | null;
    final: string | null;
  };
  obsolete: boolean;
  class: ConsonantClass;
}
