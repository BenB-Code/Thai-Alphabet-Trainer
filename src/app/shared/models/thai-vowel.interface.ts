import { ThaiLetter } from './thai-letter.interface';
import { VowelType } from './vowel.type';
import { VowelPositionType } from './vowel-position.type';

export interface ThaiVowel extends ThaiLetter {
  type: VowelType;
  position: VowelPositionType;
}
