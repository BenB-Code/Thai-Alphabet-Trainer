import { VowelLengthType, VowelPositionType, VowelType } from '../../types';
import { ThaiSymbol } from './thai-symbol.interface';

export interface ThaiVowelType extends ThaiSymbol {
  type: VowelType;
  length: VowelLengthType;
  position: VowelPositionType;
  withFinalConsonant: boolean | null;
}
