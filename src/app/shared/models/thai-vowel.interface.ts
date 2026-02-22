import { ThaiLetter } from './thai-letter.interface';
import { VowelPositionType, VowelType } from '../types';

export interface ThaiVowel extends ThaiLetter {
  type: VowelType;
  position: VowelPositionType[];
}
