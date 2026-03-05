import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CONSONANT, HIGH, LOW, MID, VOWEL } from '../../shared/constants';
import { DataService } from '../../services/data-service/data-service';
import { ConsonantClassType, LetterKindType, ThaiSymbolType, VowelLengthType } from '../../shared/types';

interface SelectionState {
  selected: ThaiSymbolType[];
}

const CONSONANT_CLASSES: readonly string[] = [MID, HIGH, LOW];

function isSameCharacter(a: ThaiSymbolType, b: ThaiSymbolType): boolean {
  return a.id === b.id && a.kind === b.kind;
}

function isConsonantClassType(category: string): category is ConsonantClassType {
  return CONSONANT_CLASSES.includes(category);
}

export const SelectionStore = signalStore(
  { providedIn: 'root' },
  withState<SelectionState>({ selected: [] }),
  withComputed(({ selected }) => ({
    selectedConsonants: computed(() => selected().filter(el => el.kind === CONSONANT)),
    selectedVowels: computed(() => selected().filter(el => el.kind === VOWEL)),
    totalCount: computed(() => selected().length),
    isEmpty: computed(() => selected().length === 0),
  })),
  withComputed(({ selectedConsonants, selectedVowels }) => ({
    consonantsCount: computed(() => selectedConsonants().length),
    vowelsCount: computed(() => selectedVowels().length),
  })),
  withMethods((store, dataService = inject(DataService)) => {
    function getLettersByCategory(category: ConsonantClassType | VowelLengthType): ThaiSymbolType[] {
      return isConsonantClassType(category)
        ? dataService.getConsonantByClass(category)
        : dataService.getVowelByLength(category as VowelLengthType);
    }

    return {
      selectLetter(letter: ThaiSymbolType): void {
        const current = store.selected();
        if (current.some(el => isSameCharacter(el, letter))) return;
        patchState(store, { selected: [...current, letter] });
      },

      deselectLetter(letter: ThaiSymbolType): void {
        patchState(store, { selected: store.selected().filter(el => !isSameCharacter(el, letter)) });
      },

      toggleLetter(letter: ThaiSymbolType): void {
        const current = store.selected();
        const isPresent = current.some(el => isSameCharacter(el, letter));
        patchState(store, {
          selected: isPresent ? current.filter(el => !isSameCharacter(el, letter)) : [...current, letter],
        });
      },

      selectAll(kind: LetterKindType): void {
        const toAdd = kind === CONSONANT ? dataService.getAllConsonants() : dataService.getAllVowels();
        patchState(store, {
          selected: [...store.selected().filter(el => el.kind !== kind), ...toAdd],
        });
      },

      deselectAll(kind: LetterKindType): void {
        patchState(store, { selected: store.selected().filter(el => el.kind !== kind) });
      },

      selectByCategory(category: ConsonantClassType | VowelLengthType): void {
        const letters = getLettersByCategory(category);
        const current = store.selected();
        const toAdd = letters.filter(l => !current.some(el => isSameCharacter(el, l)));
        patchState(store, { selected: [...current, ...toAdd] });
      },

      deselectByCategory(category: ConsonantClassType | VowelLengthType): void {
        const letters = getLettersByCategory(category);
        patchState(store, {
          selected: store.selected().filter(el => !letters.some(l => isSameCharacter(l, el))),
        });
      },

      toggleByCategory(category: ConsonantClassType | VowelLengthType): void {
        const allInCategory = getLettersByCategory(category);
        const current = store.selected();
        const currentlyNotSelected = allInCategory.filter(l => !current.some(el => isSameCharacter(el, l)));
        const withoutCategory = current.filter(el => !allInCategory.some(l => isSameCharacter(l, el)));
        patchState(store, { selected: [...withoutCategory, ...currentlyNotSelected] });
      },
    };
  })
);
