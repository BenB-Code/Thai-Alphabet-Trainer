import { FontsType } from './theme.type';

export interface SwitchSelectorItem {
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
  id: number;
  class: string;
}

export interface FontSwitchItem extends SwitchSelectorItem {
  class: FontsType;
}
