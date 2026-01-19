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

  getConsonantById(id: number): Readonly<ThaiConsonant> | undefined {
    return THAI_CONSONANTS.find(o => o.id === id);
  }

  getConsonantByClass(consonantClass: ConsonantClass): readonly ThaiConsonant[] {
    return THAI_CONSONANTS.filter(o => o.class === consonantClass);
  }

  getAllVowels(): readonly ThaiVowel[] {
    return [...THAI_VOWELS];
  }

  getVowelById(id: number): Readonly<ThaiVowel> | undefined {
    return THAI_VOWELS.find(o => o.id === id);
  }

  getVowelByType(consonantClass: VowelType): readonly ThaiVowel[] {
    return THAI_VOWELS.filter(o => o.type === consonantClass);
  }
}
