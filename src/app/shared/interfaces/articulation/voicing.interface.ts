import { VoicingType } from '../../types';

export interface Voicing {
  type: VoicingType;
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
