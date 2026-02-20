import { Injectable } from '@angular/core';
import { ConsonantClass, ThaiCharacter, ThaiConsonant, ThaiVowel, VowelType } from '../../shared/models';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAll(): Record<string, ThaiCharacter[]> {
    return { ...this.getAllConsonantsSorted(), ...this.getAllVowelsSorted() };
  }

  getAllConsonants(): ThaiConsonant[] {
    return [...THAI_CONSONANTS];
  }

  getAllConsonantsSorted(): Record<string, ThaiConsonant[]> {
    return this.groupBy([...THAI_CONSONANTS], 'class');
  }

  getConsonantById(id: number): ThaiConsonant | undefined {
    return THAI_CONSONANTS.find(o => o.id === id);
  }

  getConsonantByClass(consonantClass: ConsonantClass): ThaiConsonant[] {
    return THAI_CONSONANTS.filter(o => o.class === consonantClass);
  }

  getAllVowels(): ThaiVowel[] {
    return [...THAI_VOWELS];
  }

  getAllVowelsSorted(): Record<string, ThaiVowel[]> {
    return this.groupBy([...THAI_VOWELS], 'type');
  }

  getVowelById(id: number): ThaiVowel | undefined {
    return THAI_VOWELS.find(o => o.id === id);
  }

  getVowelByType(consonantClass: VowelType): ThaiVowel[] {
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
