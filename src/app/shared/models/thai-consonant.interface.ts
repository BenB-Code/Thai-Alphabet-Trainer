import { ThaiLetter } from './thai-letter.interface';
import { ConsonantClass } from './consonant-class.type';

export interface ThaiConsonant extends ThaiLetter {
  transliteration: string;
  class: ConsonantClass;
}
