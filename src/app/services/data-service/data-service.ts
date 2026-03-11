import { computed, Injectable, signal } from '@angular/core';
import { CONSONANTS_DATA, DIACRITICS_DATA, NUMERAL_DATA, TONES_DATA, VOWELS_DATA } from '../../data';
import { SymbolCategoriesType, ThaiSymbolType } from '../../shared/types';
import { CATEGORY } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  consonants = signal([...CONSONANTS_DATA]);
  vowels = signal([...VOWELS_DATA]);
  tones = signal([...TONES_DATA]);
  numerals = signal([...NUMERAL_DATA]);
  diacritics = signal([...DIACRITICS_DATA]);
  consonantsSortedByCategory = computed(() => this.getDatasetSortedByCategory(this.consonants()));
  vowelsSortedByCategory = computed(() => this.getDatasetSortedByCategory(this.vowels()));
  tonesSortedByCategory = computed(() => this.getDatasetSortedByCategory(this.tones()));
  numeralsSortedByCategory = computed(() => this.getDatasetSortedByCategory(this.numerals()));
  diacriticsSortedByCategory = computed(() => this.getDatasetSortedByCategory(this.diacritics()));
  allSymbolsSorted = computed(() => this.getAll());

  getAll(): Record<string, ThaiSymbolType[]> {
    return {
      ...this.consonantsSortedByCategory(),
      ...this.vowelsSortedByCategory(),
      // ...this.tonesSortedByCategory(),
      ...this.numeralsSortedByCategory(),
      ...this.diacriticsSortedByCategory(),
    };
  }

  getSymbolsByCategory(category: SymbolCategoriesType) {
    return this.allSymbolsSorted()[category];
  }

  getDatasetSortedByCategory(dataSet: ThaiSymbolType[]): Record<string, ThaiSymbolType[]> {
    return this.groupBy([...dataSet], CATEGORY);
  }

  groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> {
    return items.reduce(
      (acc, item) => {
        const group = String(item[key]);
        (acc[group] ??= []).push(item);
        return acc;
      },
      {} as Record<string, T[]>
    );
  }
}
