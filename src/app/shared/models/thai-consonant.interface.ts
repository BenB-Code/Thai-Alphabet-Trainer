import { ConsonantClass } from '../types';
import { ThaiLetter } from './thai-letter.interface';

export interface ThaiConsonant extends ThaiLetter {
  transliteration: {
    initial: string | null;
    final: string | null;
  };
  outdated: boolean;
  class: ConsonantClass;
}
