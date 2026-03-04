import { ArticulationMannerType, ArticulationPlaceType, AspirationType, VoicingType } from '../../types';

export interface ConsonantArticulation {
  manner: ArticulationMannerType;
  place: ArticulationPlaceType;
  voicing: VoicingType;
  aspiration: AspirationType;
}
