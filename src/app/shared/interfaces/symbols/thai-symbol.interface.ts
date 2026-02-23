import { LetterKindType } from '../../types';

export interface ThaiSymbol {
  id: number;
  kind: LetterKindType;
  symbol: string;
  transcriptions: {
    thai: string;
    rtgs: string;
    ipa?: string;
  };
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
