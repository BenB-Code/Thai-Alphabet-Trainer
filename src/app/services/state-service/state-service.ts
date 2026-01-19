import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';

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

  toggleConsonantSelection(consonant: ThaiConsonant): void {
    this._selectedConsonants.update(current => {
      const newSet = new Set(current);
      if (newSet.has(consonant)) {
        newSet.delete(consonant);
      } else {
        newSet.add(consonant);
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

  toggleVowelSelection(vowel: ThaiVowel): void {
    this._selectedVowels.update(current => {
      const newSet = new Set(current);
      if (newSet.has(vowel)) {
        newSet.delete(vowel);
      } else {
        newSet.add(vowel);
      }
      return newSet;
    });
  }
  selectAllVowels(): void {
    this._selectedVowels.set(new Set(this.dataService.getAllVowels()));
  }
  deselectAllVowels(): void {
    this._selectedVowels.set(new Set());
  }
}
