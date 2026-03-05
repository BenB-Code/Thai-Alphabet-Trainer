import { DisplayType, LetterKindType } from '../../types';

export interface ThaiSymbol {
  id: number;
  kind: LetterKindType;
  symbol: string;
  transcriptions?: {
    thai: string;
    rtgs: string;
    ipa?: string;
  };
  display?: DisplayType;
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
