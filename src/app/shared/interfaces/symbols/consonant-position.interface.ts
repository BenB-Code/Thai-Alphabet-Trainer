import { ConsonantPositionType } from '../../types';
import { ConsonantArticulation } from './consonant-articulation.interface';

export interface ConsonantPosition {
  position: ConsonantPositionType;
  rtgs: string | null;
  ipa: string | null;
  articulation: ConsonantArticulation;
}
