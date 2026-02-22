import { TestBed } from '@angular/core/testing';

import { LetterUtilsService } from './letter-utils-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { FINAL, LOW, SHORT, TypeClassColorsMap } from '../../shared/constants';

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
      expect(service.isConsonant(THAI_CONSONANTS[0])).toBeTrue();
    });

    it('should return false for a vowel', () => {
      expect(service.isConsonant(THAI_VOWELS[0])).toBeFalse();
    });
  });

  describe('isVowel', () => {
    it('should return true for a vowel', () => {
      expect(service.isVowel(THAI_VOWELS[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isVowel(THAI_CONSONANTS[0])).toBeFalse();
    });
  });

  describe('getLetterColor', () => {
    it('should return color based on class for consonant', () => {
      const result = service.getLetterColor(THAI_CONSONANTS[0].class);

      expect(result).toEqual(TypeClassColorsMap[THAI_CONSONANTS[0].class]);
    });

    it('should return color based on type for vowel', () => {
      const result = service.getLetterColor(THAI_VOWELS[0].type);

      expect(result).toEqual(TypeClassColorsMap[THAI_VOWELS[0].type]);
    });
  });

  describe('getConsonantClass', () => {
    it('should return class for a consonant', () => {
      const result = service.getConsonantClass(THAI_CONSONANTS[0]);

      expect(result).toEqual(THAI_CONSONANTS[0].class);
    });

    it('should return the exact class value', () => {
      const result = service.getConsonantClass(THAI_CONSONANTS[0]);

      expect(result).toEqual(LOW);
    });

    it('should return false for a vowel', () => {
      const result = service.getConsonantClass(THAI_VOWELS[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getVowelType', () => {
    it('should return type for a vowel', () => {
      const result = service.getVowelType(THAI_VOWELS[0]);

      expect(result).toEqual(THAI_VOWELS[0].type);
    });

    it('should return the exact type value', () => {
      const result = service.getVowelType(THAI_VOWELS[0]);

      expect(result).toEqual(SHORT);
    });

    it('should return false for a consonant', () => {
      const result = service.getVowelType(THAI_CONSONANTS[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getVowelPosition', () => {
    it('should return position for a vowel', () => {
      const result = service.getVowelPosition(THAI_VOWELS[0]);

      expect(result).toEqual(THAI_VOWELS[0].position);
    });

    it('should return the exact position array', () => {
      const result = service.getVowelPosition(THAI_VOWELS[0]);

      expect(result).toEqual([FINAL]);
    });

    it('should return false for a consonant', () => {
      const result = service.getVowelPosition(THAI_CONSONANTS[0]);

      expect(result).toEqual(false);
    });
  });

  describe('getTransliteration', () => {
    it('should return transliteration for a consonant', () => {
      const result = service.getTransliteration(THAI_CONSONANTS[0]);

      expect(result).toEqual(THAI_CONSONANTS[0].transliteration);
    });

    it('should return false for a vowel', () => {
      expect(service.getTransliteration(THAI_VOWELS[0])).toBeFalse();
    });
  });

  describe('isOutdated', () => {
    it('should return false for a non-outdated consonant', () => {
      expect(service.isOutdated(THAI_CONSONANTS[0])).toBeFalse();
    });

    it('should return true for an outdated consonant', () => {
      const outdated = THAI_CONSONANTS.find(c => c.outdated);
      if (outdated) {
        expect(service.isOutdated(outdated)).toBeTrue();
      }
    });

    it('should return false for a vowel', () => {
      expect(service.isOutdated(THAI_VOWELS[0])).toBeFalse();
    });
  });
});
