import { inject, Injectable } from '@angular/core';
import { SelectionStore } from './selection.store';
import { SymbolCategoriesType, ThaiSymbolType } from '../../shared/types';

@Injectable({ providedIn: 'root' })
export class SelectionStoreService {
  private readonly store = inject(SelectionStore);

  readonly selected = this.store.selected;
  readonly totalCount = this.store.totalCount;
  readonly isEmpty = this.store.isEmpty;

  toggleLetter(letter: ThaiSymbolType): void {
    this.store.toggleLetter(letter);
  }

  selectByCategory(category: SymbolCategoriesType): void {
    this.store.selectByCategory(category);
  }

  deselectByCategory(category: SymbolCategoriesType): void {
    this.store.deselectByCategory(category);
  }

  toggleByCategory(category: SymbolCategoriesType): void {
    this.store.toggleByCategory(category);
  }

  getCountByCategory(category: string): number {
    return this.store.selected().filter(letter => {
      return letter.category === category;
    }).length;
  }
}
