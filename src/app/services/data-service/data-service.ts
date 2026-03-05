import { Injectable } from '@angular/core';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';
import { ThaiConsonantType, ThaiVowelType } from '../../shared/interfaces';
import { ConsonantClassType, ThaiSymbolType, VowelLengthType } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAll(): Record<string, ThaiSymbolType[]> {
    return { ...this.getAllConsonantsSorted(), ...this.getAllVowelsSorted() };
  }

  getAllConsonants(): ThaiConsonantType[] {
    return [...CONSONANTS_DATA];
  }

  getAllConsonantsSorted(): Record<string, ThaiConsonantType[]> {
    return this.groupBy([...CONSONANTS_DATA], 'class');
  }

  getConsonantById(id: number): ThaiConsonantType | undefined {
    return CONSONANTS_DATA.find(o => o.id === id);
  }

  getConsonantByClass(ConsonantClassType: ConsonantClassType): ThaiConsonantType[] {
    return CONSONANTS_DATA.filter(o => o.class === ConsonantClassType);
  }

  getAllVowels(): ThaiVowelType[] {
    return [...VOWELS_DATA];
  }

  getAllVowelsSorted(): Record<string, ThaiVowelType[]> {
    return this.groupBy([...VOWELS_DATA], 'type');
  }

  getVowelById(id: number): ThaiVowelType | undefined {
    return VOWELS_DATA.find(o => o.id === id);
  }

  getVowelByLength(vowelLength: VowelLengthType): ThaiVowelType[] {
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
