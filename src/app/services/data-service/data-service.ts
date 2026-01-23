import { Injectable } from '@angular/core';
import { ConsonantClass, ThaiConsonant, ThaiVowel, VowelType } from '../../shared/models';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAllConsonants(): readonly ThaiConsonant[] {
    return [...THAI_CONSONANTS];
  }

  getAllConsonantsSorted(): Record<string, ThaiConsonant[]> {
    return this.groupBy([...THAI_CONSONANTS], 'class');
  }

  getConsonantById(id: number): Readonly<ThaiConsonant> | undefined {
    return THAI_CONSONANTS.find(o => o.id === id);
  }

  getConsonantByClass(consonantClass: ConsonantClass): readonly ThaiConsonant[] {
    return THAI_CONSONANTS.filter(o => o.class === consonantClass);
  }

  getAllVowels(): readonly ThaiVowel[] {
    return [...THAI_VOWELS];
  }

  getAllVowelsSorted(): Record<string, ThaiVowel[]> {
    return this.groupBy([...THAI_VOWELS], 'type');
  }

  getVowelById(id: number): Readonly<ThaiVowel> | undefined {
    return THAI_VOWELS.find(o => o.id === id);
  }

  getVowelByType(consonantClass: VowelType): readonly ThaiVowel[] {
    return THAI_VOWELS.filter(o => o.type === consonantClass);
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
