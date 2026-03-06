import { ConsonantPosition } from './consonant-position.interface';
import { ThaiSymbol } from './thai-symbol.interface';
import { ConsonantClassType } from '../../types';

export interface ThaiConsonant extends ThaiSymbol {
  position: ConsonantPosition[];
  class: ConsonantClassType;
  exemple: {
    thai: string;
    rtgs: string;
    ipa: string;
    translation: {
      en: string;
      fr: string;
    };
  };
  live: boolean;
  obsolete?: {
    en: string;
    fr: string;
  };
}
