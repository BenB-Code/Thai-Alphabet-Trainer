import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { CONSONANT, VOWEL } from '../../shared/constants';
import { LetterKind, ThaiCharacter } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly dataService = inject(DataService);

  selectedConsonants = computed(() => this.selected().filter(el => el.kind === CONSONANT));
  selectedVowels = computed(() => this.selected().filter(el => el.kind === VOWEL));
  selectedConsonantsCount = computed(() => this.selectedConsonants().length);
  selectedVowelsCount = computed(() => this.selectedVowels().length);
  selected = signal<ThaiCharacter[]>([]);
  totalCount = computed(() => this.selected().length);

  selectLetter(letter: ThaiCharacter): void {
    this.selected.update(set => [...set, letter]);
  }

  deselectLetter(letter: ThaiCharacter): void {
    this.selected.update(set => set.filter(el => el.id !== letter.id || el.kind !== letter.kind));
  }

  toggleLetter(letter: ThaiCharacter): void {
    this.selected.update(set => {
      const isPresent = set.some(el => el.id === letter.id && el.kind === letter.kind);
      if (isPresent) {
        return set.filter(el => el.id !== letter.id || el.kind !== letter.kind);
      }
      return [...set, letter];
    });
  }

  selectAll(kind: LetterKind): void {
    const toAdd = kind === CONSONANT ? this.dataService.getAllConsonants() : this.dataService.getAllVowels();
    this.selected.update(arr => [...arr.filter(el => el.kind !== kind), ...toAdd]);
  }

  deselectAll(kind: LetterKind): void {
    this.selected.update(arr => arr.filter(el => el.kind !== kind));
  }
}
