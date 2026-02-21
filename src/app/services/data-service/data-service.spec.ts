import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DataService } from './data-service';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { LONG, MID } from '../../shared/constants';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return consonants and vowels grouped together', () => {
      const result = service.getAll();
      const consonantKeys = Object.keys(service.getAllConsonantsSorted());
      const vowelKeys = Object.keys(service.getAllVowelsSorted());

      expect(Object.keys(result)).toEqual([...consonantKeys, ...vowelKeys]);
    });
  });

  describe('Thai Consonants', () => {
    it('getAllConsonants should return all consonants', () => {
      const result = service.getAllConsonants();

      expect(result.length).toEqual(THAI_CONSONANTS.length);
    });

    it('getAllConsonants should return a copy, not the original', () => {
      const result = service.getAllConsonants();

      expect(result).not.toBe(THAI_CONSONANTS);
    });

    it('getAllConsonantsSorted should group by class', () => {
      const result = service.getAllConsonantsSorted();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toEqual(THAI_CONSONANTS.length);
      Object.entries(result).forEach(([key, consonants]) => {
        consonants.forEach(c => expect(c.class).toEqual(key));
      });
    });

    it('getConsonantById should return corresponding consonant entry', () => {
      const result = service.getConsonantById(3);
      const expected = THAI_CONSONANTS.find(consonant => consonant.id === 3);

      expect(result).toEqual(expected);
    });

    it('getConsonantById should return undefined for unknown id', () => {
      const result = service.getConsonantById(123);

      expect(result).toBeUndefined();
    });

    it('getConsonantByClass should return corresponding consonants list', () => {
      const result = service.getConsonantByClass(MID);
      const expected = THAI_CONSONANTS.filter(consonant => consonant.class === MID);

      expect(result).toEqual(expected);
    });
  });

  describe('Thai Vowels', () => {
    it('getAllVowels should return all vowels', () => {
      const result = service.getAllVowels();

      expect(result.length).toEqual(THAI_VOWELS.length);
    });

    it('getAllVowels should return a copy, not the original', () => {
      const result = service.getAllVowels();

      expect(result).not.toBe(THAI_VOWELS);
    });

    it('getAllVowelsSorted should group by type', () => {
      const result = service.getAllVowelsSorted();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toEqual(THAI_VOWELS.length);
      Object.entries(result).forEach(([key, vowels]) => {
        vowels.forEach(v => expect(v.type).toEqual(key));
      });
    });

    it('getVowelById should return corresponding vowel entry', () => {
      const result = service.getVowelById(3);
      const expected = THAI_VOWELS.find(vowel => vowel.id === 3);

      expect(result).toEqual(expected);
    });

    it('getVowelById should return undefined for unknown id', () => {
      const result = service.getVowelById(123);

      expect(result).toBeUndefined();
    });

    it('getVowelByType should return corresponding vowels list', () => {
      const result = service.getVowelByType(LONG);
      const expected = THAI_VOWELS.filter(vowel => vowel.type === LONG);

      expect(result).toEqual(expected);
    });
  });

  describe('groupBy', () => {
    it('should group items by the given key', () => {
      const items = [
        { category: 'a', value: 1 },
        { category: 'b', value: 2 },
        { category: 'a', value: 3 },
      ];
      const result = service.groupBy(items, 'category');

      expect(Object.keys(result)).toEqual(['a', 'b']);
      expect(result['a'].length).toBe(2);
      expect(result['b'].length).toBe(1);
    });

    it('should return empty object for empty array', () => {
      const result = service.groupBy([], 'key' as never);

      expect(result).toEqual({});
    });
  });
});
