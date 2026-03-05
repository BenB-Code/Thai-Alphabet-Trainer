import { SwitchSelectorItem } from './switch-selector-item.interface';
import { FontType, PronunciationsType } from '../types';

export interface FontSwitchItem extends SwitchSelectorItem {
  class: FontType;
}

export interface PronunciationSwitchItem extends SwitchSelectorItem {
  class: PronunciationsType;
}
