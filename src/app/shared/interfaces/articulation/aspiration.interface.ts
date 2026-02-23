import { AspirationType } from '../../types';

export interface Aspiration {
  type: AspirationType;
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
