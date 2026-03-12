import { AFFRICATE, APPROXIMANT, FRICATIVE, LATERAL, NASAL, PLOSIVE, TRILL } from '../../constants';

export type ArticulationPlaceType =
  | typeof NASAL
  | typeof PLOSIVE
  | typeof AFFRICATE
  | typeof FRICATIVE
  | typeof TRILL
  | typeof APPROXIMANT
  | typeof LATERAL;
