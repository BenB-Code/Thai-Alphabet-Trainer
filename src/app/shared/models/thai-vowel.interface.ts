import { ThaiLetter } from './thai-letter.interface';
import { VowelType } from './vowel.type';

export interface ThaiVowel extends ThaiLetter {
  type: VowelType;
}
