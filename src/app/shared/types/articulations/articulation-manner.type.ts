import { ALVEOLAR, ALVEOLO_PALATAL, BILABIAL, GLOTTAL, LABIAL, LABIO_DENTAL, PALATAL, VELAR } from '../../constants';

export type ArticulationMannerType =
  | typeof LABIAL
  | typeof BILABIAL
  | typeof LABIO_DENTAL
  | typeof ALVEOLAR
  | typeof ALVEOLO_PALATAL
  | typeof PALATAL
  | typeof VELAR
  | typeof GLOTTAL;
