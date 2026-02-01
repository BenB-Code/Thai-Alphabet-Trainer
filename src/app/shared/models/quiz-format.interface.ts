import { ThaiCharacter } from './thai-character.type';
import { DisplayType } from './display.type';

export interface QuizFormat {
  questions: number;
  delay: number;
  display: DisplayType;
  selected: ThaiCharacter[];
  randomized: ThaiCharacter[];
}
