import { TestBed } from '@angular/core/testing';

import { DataService } from './data-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { THAI_CONSONANTS, THAI_VOWELS } from '../data';
import { LONG, MID } from '../shared/models';

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

  describe('Thai Consonants', () => {
    it('getAllConsonants - it should return all consonants', () => {
      const result = service.getAllConsonants();

      expect(result.length).toEqual(44);
    });

    it('getConsonantById - it should return corresponding consonant entry', () => {
      const result = service.getConsonantById(3);
      expect(result).toEqual(THAI_CONSONANTS[2]);
    });

    it('getConsonantById - it should return undefined', () => {
      const result = service.getConsonantById(123);
      expect(result).toBeUndefined();
    });

    it('getConsonantByClass - it should return corresponding consonants list', () => {
      const result = service.getConsonantByClass(MID);
      expect(result.length).toEqual(9);
    });
  });

  describe('Thai Vowels', () => {
    it('getAllVowels - it should return all vowels', () => {
      const result = service.getAllVowels();

      expect(result.length).toEqual(29);
    });

    it('getVowelById - it should return corresponding vowel entry', () => {
      const result = service.getVowelById(3);
      expect(result).toEqual(THAI_VOWELS[2]);
    });

    it('getVowelById - it should return undefined', () => {
      const result = service.getVowelById(123);
      expect(result).toBeUndefined();
    });

    it('getVowelByClass - it should return corresponding vowels list', () => {
      const result = service.getVowelByType(LONG);
      expect(result.length).toEqual(9);
    });
  });
});
