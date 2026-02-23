import { ArticulationManner, ArticulationPlace, Aspiration, Voicing } from '../articulation';

export interface ConsonantArticulation {
  manner: ArticulationManner;
  place: ArticulationPlace;
  voicing: Voicing;
  aspiration: Aspiration;
}
