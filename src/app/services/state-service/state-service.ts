import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { CONSONANT, LetterKind, ThaiLetter, VOWEL } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly dataService = inject(DataService);

  private readonly _selected = {
    [CONSONANT]: signal<Set<ThaiLetter>>(new Set()),
    [VOWEL]: signal<Set<ThaiLetter>>(new Set()),
  };

  selectedConsonants = this._selected[CONSONANT].asReadonly();
  selectedVowels = this._selected[VOWEL].asReadonly();
  selectedConsonantsCount = computed(() => this._selected[CONSONANT]().size);
  selectedVowelsCount = computed(() => this._selected[VOWEL]().size);
  total = computed(() => new Set([...this.selectedConsonants(), ...this.selectedVowels()]));
  totalCount = computed(() => this.total().size);

  selectLetter(letter: ThaiLetter): void {
    this._selected[letter.kind].update(set => new Set(set).add(letter));
  }

  deselectLetter(letter: ThaiLetter): void {
    this._selected[letter.kind].update(set => {
      const newSet = new Set(set);
      newSet.delete(letter);
      return newSet;
    });
  }

  toggleLetter(letter: ThaiLetter): void {
    this._selected[letter.kind].update(set => {
      const newSet = new Set(set);
      if (newSet.has(letter)) {
        newSet.delete(letter);
      } else {
        newSet.add(letter);
      }
      return newSet;
    });
  }

  selectAll(kind: LetterKind): void {
    if (kind === CONSONANT) {
      this._selected[CONSONANT].set(new Set(this.dataService.getAllConsonants()));
    } else {
      this._selected[VOWEL].set(new Set(this.dataService.getAllVowels()));
    }
  }

  deselectAll(kind: LetterKind): void {
    this._selected[kind].set(new Set());
  }
}
