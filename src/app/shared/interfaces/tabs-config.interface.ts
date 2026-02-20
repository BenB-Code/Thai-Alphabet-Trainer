import { ThaiCharacter } from '../types';

export interface TabsConfig {
  tabSwitchConfig: {
    label: {
      display: boolean;
      text: string;
    };
    icon: {
      display: boolean;
      path: string;
      alt: string;
      right: boolean;
    };
    class: string;
    id: number;
  };
  payload: Record<string, ThaiCharacter[]>;
}
