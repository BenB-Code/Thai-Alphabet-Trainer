import { ArticulationPlaceType } from '../../types';

export interface ArticulationPlace {
  type: ArticulationPlaceType;
  info?: {
    en: string | string[];
    fr: string | string[];
  };
}
