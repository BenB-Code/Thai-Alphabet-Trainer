import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { CONSONANT, LetterKind, ThaiConsonant, ThaiVowel } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly dataService = inject<DataService>(DataService);

  private readonly _selectedConsonants = signal<Set<ThaiConsonant>>(new Set());
  private readonly _selectedVowels = signal<Set<ThaiVowel>>(new Set());

  selectedConsonants = this._selectedConsonants.asReadonly();
  selectedVowels = this._selectedVowels.asReadonly();
  selectedConsonantsCount = computed(() => this._selectedConsonants().size);
  selectedVowelsCount = computed(() => this._selectedVowels().size);
  total = computed(() => new Set([...this.selectedConsonants(), ...this.selectedVowels()]));
  totalCount = computed(() => this.total().size);

  private getSetByKind(kind: LetterKind): WritableSignal<Set<ThaiConsonant | ThaiVowel>> {
    return kind === CONSONANT ? this._selectedConsonants : this._selectedVowels;
  }

  toggleLetter(letter: ThaiConsonant | ThaiVowel): void {
    this.getSetByKind(letter.kind).update(set => {
      const newSet = new Set(set);
      if (newSet.has(letter)) {
        newSet.delete(letter);
      } else {
        newSet.add(letter);
      }
      return newSet;
    });
  }

  selectAllConsonants(): void {
    this._selectedConsonants.set(new Set(this.dataService.getAllConsonants()));
  }

  deselectAllConsonants(): void {
    this._selectedConsonants.set(new Set());
  }

  selectAllVowels(): void {
    this._selectedVowels.set(new Set(this.dataService.getAllVowels()));
  }

  deselectAllVowels(): void {
    this._selectedVowels.set(new Set());
  }
}
