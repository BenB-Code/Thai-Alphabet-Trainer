import { SwitchSelectorItem } from './switch-selector-item.interface';
import { FontType } from '../types';

export interface FontSwitchItem extends SwitchSelectorItem {
  class: FontType;
}
