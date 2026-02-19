import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { ConsonantClass, LetterKind, ThaiCharacter, VowelType } from '../../../shared/models';
import { CONSONANT, HIGH, LOW, MID, VOWEL } from '../../../shared/constants';
import { DataService } from '../../../services/data-service/data-service';

interface SelectionState {
  selected: ThaiCharacter[];
}

const CONSONANT_CLASSES: readonly string[] = [MID, HIGH, LOW];

function isSameCharacter(a: ThaiCharacter, b: ThaiCharacter): boolean {
  return a.id === b.id && a.kind === b.kind;
}

function isConsonantClass(category: string): category is ConsonantClass {
  return CONSONANT_CLASSES.includes(category);
}

export const SelectionStore = signalStore(
  { providedIn: 'root' },
  withState<SelectionState>({ selected: [] }),
  withComputed(({ selected }) => ({
    selectedConsonants: computed(() => selected().filter(el => el.kind === CONSONANT)),
    selectedVowels: computed(() => selected().filter(el => el.kind === VOWEL)),
    consonantsCount: computed(() => selected().filter(el => el.kind === CONSONANT).length),
    vowelsCount: computed(() => selected().filter(el => el.kind === VOWEL).length),
    totalCount: computed(() => selected().length),
    isEmpty: computed(() => selected().length === 0),
  })),
  withMethods((store, dataService = inject(DataService)) => {
    function getLettersByCategory(category: ConsonantClass | VowelType): ThaiCharacter[] {
      return isConsonantClass(category)
        ? dataService.getConsonantByClass(category)
        : dataService.getVowelByType(category as VowelType);
    }

    return {
      selectLetter(letter: ThaiCharacter): void {
        const current = store.selected();
        if (current.some(el => isSameCharacter(el, letter))) return;
        patchState(store, { selected: [...current, letter] });
      },

      deselectLetter(letter: ThaiCharacter): void {
        patchState(store, { selected: store.selected().filter(el => !isSameCharacter(el, letter)) });
      },

      toggleLetter(letter: ThaiCharacter): void {
        const current = store.selected();
        const isPresent = current.some(el => isSameCharacter(el, letter));
        patchState(store, {
          selected: isPresent ? current.filter(el => !isSameCharacter(el, letter)) : [...current, letter],
        });
      },

      selectAll(kind: LetterKind): void {
        const toAdd = kind === CONSONANT ? dataService.getAllConsonants() : dataService.getAllVowels();
        patchState(store, {
          selected: [...store.selected().filter(el => el.kind !== kind), ...toAdd],
        });
      },

      deselectAll(kind: LetterKind): void {
        patchState(store, { selected: store.selected().filter(el => el.kind !== kind) });
      },

      selectByCategory(category: ConsonantClass | VowelType): void {
        const letters = getLettersByCategory(category);
        const current = store.selected();
        const toAdd = letters.filter(l => !current.some(el => isSameCharacter(el, l)));
        patchState(store, { selected: [...current, ...toAdd] });
      },

      deselectByCategory(category: ConsonantClass | VowelType): void {
        const letters = getLettersByCategory(category);
        patchState(store, {
          selected: store.selected().filter(el => !letters.some(l => isSameCharacter(l, el))),
        });
      },

      toggleByCategory(category: ConsonantClass | VowelType): void {
        const letters = getLettersByCategory(category);
        const current = store.selected();
        const allSelected = letters.every(l => current.some(el => isSameCharacter(el, l)));

        if (allSelected) {
          patchState(store, {
            selected: current.filter(el => !letters.some(l => isSameCharacter(l, el))),
          });
        } else {
          const toAdd = letters.filter(l => !current.some(el => isSameCharacter(el, l)));
          patchState(store, { selected: [...current, ...toAdd] });
        }
      },
    };
  })
);
