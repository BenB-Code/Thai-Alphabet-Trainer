import { Injectable } from '@angular/core';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';
import { ThaiConsonant, ThaiVowel } from '../../shared/interfaces';
import { ConsonantClassType, ThaiSymbolType, VowelLengthType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAll(): Record<string, ThaiSymbolType[]> {
    return { ...this.getAllConsonantsSorted(), ...this.getAllVowelsSorted() };
  }

  getAllConsonants(): ThaiConsonant[] {
    return [...CONSONANTS_DATA];
  }

  getAllConsonantsSorted(): Record<string, ThaiConsonant[]> {
    return this.groupBy([...CONSONANTS_DATA], 'class');
  }

  getConsonantById(id: number): ThaiConsonant | undefined {
    return CONSONANTS_DATA.find(o => o.id === id);
  }

  getConsonantByClass(ConsonantClassType: ConsonantClassType): ThaiConsonant[] {
    return CONSONANTS_DATA.filter(o => o.class === ConsonantClassType);
  }

  getAllVowels(): ThaiVowel[] {
    return [...VOWELS_DATA];
  }

  getAllVowelsSorted(): Record<string, ThaiVowel[]> {
    return this.groupBy([...VOWELS_DATA], 'type');
  }

  getVowelById(id: number): ThaiVowel | undefined {
    return VOWELS_DATA.find(o => o.id === id);
  }

  getVowelByLength(vowelLength: VowelLengthType): ThaiVowel[] {
    return VOWELS_DATA.filter(o => o.length === vowelLength);
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
