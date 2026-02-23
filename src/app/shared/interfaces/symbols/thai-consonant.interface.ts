import { ConsonantArticulation } from './consonant-articulation.interface';
import { ConsonantPosition } from './consonant-position.interface';
import { ThaiSymbol } from './thai-symbol.interface';

export interface ThaiConsonant extends ThaiSymbol {
  articulation: ConsonantArticulation;
  position: ConsonantPosition[];
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
  obsolete?: string;
}
