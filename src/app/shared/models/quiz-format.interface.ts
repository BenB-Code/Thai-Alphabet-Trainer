import { DisplayType, ThaiCharacter } from '../types';

export interface QuizFormat {
  questions: number;
  delay: number;
  display: DisplayType;
  selected: ThaiCharacter[];
  randomized: ThaiCharacter[];
}
