import { TestBed } from '@angular/core/testing';

import { LetterUtilsService } from './letter-utils-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';
import { AFTER, LOW, SIMPLE } from '../../shared/constants';
import { TypeClassColorsMap } from '../../shared/map';

describe('LetterUtilsService', () => {
  let service: LetterUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(LetterUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isConsonant', () => {
    it('should return true for a consonant', () => {
      expect(service.isConsonant(CONSONANTS_DATA[0])).toBeTrue();
    });

    it('should return false for a vowel', () => {
      expect(service.isConsonant(VOWELS_DATA[0])).toBeFalse();
    });
  });

  describe('isVowel', () => {
    it('should return true for a vowel', () => {
      expect(service.isVowel(VOWELS_DATA[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isVowel(CONSONANTS_DATA[0])).toBeFalse();
    });
  });

  describe('getLetterColor', () => {
    it('should return color based on class for consonant', () => {
      const result = service.getLetterColor(CONSONANTS_DATA[0].class);

      expect(result).toEqual(TypeClassColorsMap[CONSONANTS_DATA[0].class]);
    });

    it('should return color based on type for vowel', () => {
      const result = service.getLetterColor(VOWELS_DATA[0].length);

      expect(result).toEqual(TypeClassColorsMap[VOWELS_DATA[0].length]);
    });
  });

  describe('getConsonantClassType', () => {
    it('should return class for a consonant', () => {
      const result = service.getConsonantClassType(CONSONANTS_DATA[0]);

      expect(result).toEqual(CONSONANTS_DATA[0].class);
    });

    it('should return the exact class value', () => {
      const result = service.getConsonantClassType(CONSONANTS_DATA[0]);

      expect(result).toEqual(LOW);
    });

    it('should return false for a vowel', () => {
      const result = service.getConsonantClassType(VOWELS_DATA[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getVowelType', () => {
    it('should return type for a vowel', () => {
      const result = service.getVowelType(VOWELS_DATA[0]);

      expect(result).toEqual(VOWELS_DATA[0].type);
    });

    it('should return the exact type value', () => {
      const result = service.getVowelType(VOWELS_DATA[0]);

      expect(result).toEqual(SIMPLE);
    });

    it('should return false for a consonant', () => {
      const result = service.getVowelType(CONSONANTS_DATA[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getVowelPosition', () => {
    it('should return position for a vowel', () => {
      const result = service.getVowelPosition(VOWELS_DATA[0]);

      expect(result).toEqual(VOWELS_DATA[0].position);
    });

    it('should return the exact position array', () => {
      const result = service.getVowelPosition(VOWELS_DATA[0]);

      expect(result).toEqual(AFTER);
    });

    it('should return false for a consonant', () => {
      const result = service.getVowelPosition(CONSONANTS_DATA[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getTransliteration', () => {
    it('should return transliteration for a consonant', () => {
      const result = service.getTransliteration(CONSONANTS_DATA[0]);

      expect(result).toEqual(CONSONANTS_DATA[0].transcriptions);
    });

    it('should return false for a vowel', () => {
      expect(service.getTransliteration(VOWELS_DATA[0])).toBeFalse();
    });
  });

  describe('isObsolete', () => {
    it('should return false for a non-outdated consonant', () => {
      expect(service.isObsolete(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return true for an outdated consonant', () => {
      const outdated = CONSONANTS_DATA.find(c => c.obsolete);
      if (outdated) {
        expect(service.isObsolete(outdated)).toBeTrue();
      }
    });

    it('should return false for a vowel', () => {
      expect(service.isObsolete(VOWELS_DATA[0])).toBeFalse();
    });
  });
});
