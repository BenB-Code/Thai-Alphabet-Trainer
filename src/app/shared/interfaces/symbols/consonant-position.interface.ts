import { ConsonantPositionType } from '../../types';

export interface ConsonantPosition {
  position: ConsonantPositionType;
  rtgs: string | null;
  ipa: string | null;
}
