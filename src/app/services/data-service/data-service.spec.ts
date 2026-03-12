import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DataService } from './data-service';
import { CONSONANTS_DATA, DIACRITICS_DATA, NUMERAL_DATA, TONES_DATA, VOWELS_DATA } from '../../data';
import { LOW, MID } from '../../shared/constants';

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

  describe('signals', () => {
    it('should expose consonants', () => {
      expect(service.consonants().length).toBe(CONSONANTS_DATA.length);
    });

    it('should expose vowels', () => {
      expect(service.vowels().length).toBe(VOWELS_DATA.length);
    });

    it('should expose tones', () => {
      expect(service.tones().length).toBe(TONES_DATA.length);
    });

    it('should expose numerals', () => {
      expect(service.numerals().length).toBe(NUMERAL_DATA.length);
    });

    it('should expose diacritics', () => {
      expect(service.diacritics().length).toBe(DIACRITICS_DATA.length);
    });

    it('should return copies, not the original arrays', () => {
      expect(service.consonants()).not.toBe(CONSONANTS_DATA);
      expect(service.vowels()).not.toBe(VOWELS_DATA);
    });
  });

  describe('sorted computed signals', () => {
    it('should group consonants by category', () => {
      const result = service.consonantsSortedByCategory();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(CONSONANTS_DATA.length);
      Object.entries(result).forEach(([key, items]) => {
        items.forEach(item => expect(item.category).toBe(key));
      });
    });

    it('should group vowels by category', () => {
      const result = service.vowelsSortedByCategory();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(VOWELS_DATA.length);
      Object.entries(result).forEach(([key, items]) => {
        items.forEach(item => expect(item.category).toBe(key));
      });
    });

    it('should group tones by category', () => {
      const result = service.tonesSortedByCategory();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(TONES_DATA.length);
    });

    it('should group numerals by category', () => {
      const result = service.numeralsSortedByCategory();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(NUMERAL_DATA.length);
    });

    it('should group diacritics by category', () => {
      const result = service.diacriticsSortedByCategory();
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(DIACRITICS_DATA.length);
    });
  });

  describe('allSymbolsSorted', () => {
    it('should merge consonants, vowels, numerals and diacritics', () => {
      const result = service.allSymbolsSorted();
      const keys = Object.keys(result);
      const consonantKeys = Object.keys(service.consonantsSortedByCategory());
      const vowelKeys = Object.keys(service.vowelsSortedByCategory());
      const numeralKeys = Object.keys(service.numeralsSortedByCategory());
      const diacriticKeys = Object.keys(service.diacriticsSortedByCategory());

      const expectedKeys = [...consonantKeys, ...vowelKeys, ...numeralKeys, ...diacriticKeys];
      expect(keys).toEqual(expectedKeys);
    });
  });

  describe('getAll', () => {
    it('should return the same as allSymbolsSorted', () => {
      const result = service.getAll();
      const allKeys = Object.keys(result);

      expect(allKeys.length).toBeGreaterThan(0);
    });
  });

  describe('getSymbolsByCategory', () => {
    it('should return symbols for a valid category', () => {
      const result = service.getSymbolsByCategory(LOW);

      expect(result.length).toBeGreaterThan(0);
      result.forEach(symbol => expect(symbol.category).toBe(LOW));
    });

    it('should return symbols for another category', () => {
      const result = service.getSymbolsByCategory(MID);

      expect(result.length).toBeGreaterThan(0);
      result.forEach(symbol => expect(symbol.category).toBe(MID));
    });

    it('should return undefined for unknown category', () => {
      const result = service.getSymbolsByCategory('nonexistent' as never);

      expect(result).toBeUndefined();
    });
  });

  describe('getDatasetSortedByCategory', () => {
    it('should group a dataset by category', () => {
      const result = service.getDatasetSortedByCategory(CONSONANTS_DATA);
      const totalCount = Object.values(result).reduce((sum, arr) => sum + arr.length, 0);

      expect(totalCount).toBe(CONSONANTS_DATA.length);
    });

    it('should return empty object for empty dataset', () => {
      const result = service.getDatasetSortedByCategory([]);

      expect(result).toEqual({});
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
