import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { DataService } from '../../services/data-service/data-service';
import { SymbolCategoriesType, ThaiSymbolType } from '../../shared/types';

interface SelectionState {
  selected: ThaiSymbolType[];
}

function isSameCharacter(a: ThaiSymbolType, b: ThaiSymbolType): boolean {
  return a.id === b.id && a.kind === b.kind;
}

export const SelectionStore = signalStore(
  { providedIn: 'root' },
  withState<SelectionState>({ selected: [] }),
  withComputed(({ selected }) => ({
    totalCount: computed(() => selected().length),
    isEmpty: computed(() => selected().length === 0),
  })),
  withMethods((store, dataService = inject(DataService)) => {
    return {
      toggleLetter(letter: ThaiSymbolType): void {
        const current = store.selected();
        const isPresent = current.some(el => isSameCharacter(el, letter));
        patchState(store, {
          selected: isPresent ? current.filter(el => !isSameCharacter(el, letter)) : [...current, letter],
        });
      },

      selectByCategory(category: SymbolCategoriesType): void {
        const letters = dataService.getSymbolsByCategory(category);
        const current = store.selected();
        const toAdd = letters.filter(l => !current.some(el => isSameCharacter(el, l)));
        patchState(store, { selected: [...current, ...toAdd] });
      },

      deselectByCategory(category: SymbolCategoriesType): void {
        const letters = dataService.getSymbolsByCategory(category);
        patchState(store, {
          selected: store.selected().filter(el => !letters.some(l => isSameCharacter(l, el))),
        });
      },

      toggleByCategory(category: SymbolCategoriesType): void {
        const allInCategory = dataService.getSymbolsByCategory(category);
        const current = store.selected();
        const currentlyNotSelected = allInCategory.filter(l => !current.some(el => isSameCharacter(el, l)));
        const withoutCategory = current.filter(el => !allInCategory.some(l => isSameCharacter(l, el)));
        patchState(store, { selected: [...withoutCategory, ...currentlyNotSelected] });
      },
    };
  })
);
