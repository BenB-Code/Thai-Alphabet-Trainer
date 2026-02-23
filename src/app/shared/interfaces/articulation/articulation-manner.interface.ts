import { ArticulationMannerType } from '../../types';

export interface ArticulationManner {
  type: ArticulationMannerType;
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
