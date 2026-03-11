import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { LetterUtilsService } from './letter-utils-service';
import { CONSONANTS_DATA, DIACRITICS_DATA, NUMERAL_DATA, TONES_DATA, VOWELS_DATA } from '../../data';
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

    it('should return false for a numeral', () => {
      expect(service.isConsonant(NUMERAL_DATA[0])).toBeFalse();
    });

    it('should return false for a tone', () => {
      expect(service.isConsonant(TONES_DATA[0])).toBeFalse();
    });

    it('should return false for a diacritic', () => {
      expect(service.isConsonant(DIACRITICS_DATA[0])).toBeFalse();
    });
  });

  describe('isVowel', () => {
    it('should return true for a vowel', () => {
      expect(service.isVowel(VOWELS_DATA[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isVowel(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return false for a numeral', () => {
      expect(service.isVowel(NUMERAL_DATA[0])).toBeFalse();
    });
  });

  describe('isNumeral', () => {
    it('should return true for a numeral', () => {
      expect(service.isNumeral(NUMERAL_DATA[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isNumeral(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return false for a vowel', () => {
      expect(service.isNumeral(VOWELS_DATA[0])).toBeFalse();
    });
  });

  describe('isDiacritic', () => {
    it('should return true for a diacritic', () => {
      expect(service.isDiacritic(DIACRITICS_DATA[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isDiacritic(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return false for a vowel', () => {
      expect(service.isDiacritic(VOWELS_DATA[0])).toBeFalse();
    });
  });

  describe('isTone', () => {
    it('should return true for a tone', () => {
      expect(service.isTone(TONES_DATA[0])).toBeTrue();
    });

    it('should return false for a consonant', () => {
      expect(service.isTone(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return false for a vowel', () => {
      expect(service.isTone(VOWELS_DATA[0])).toBeFalse();
    });
  });

  describe('getLetterColor', () => {
    it('should return color for consonant class', () => {
      const result = service.getLetterColor(CONSONANTS_DATA[0].category);

      expect(result).toBe(TypeClassColorsMap[CONSONANTS_DATA[0].category]);
    });

    it('should return color for vowel category', () => {
      const result = service.getLetterColor(VOWELS_DATA[0].category);

      expect(result).toBe(TypeClassColorsMap[VOWELS_DATA[0].category]);
    });
  });

  describe('isWithFinalConsonant', () => {
    it('should return withFinalConsonant value for a vowel', () => {
      const result = service.isWithFinalConsonant(VOWELS_DATA[0]);

      expect(result).toBe(VOWELS_DATA[0].withFinalConsonant);
    });

    it('should return false for a consonant', () => {
      expect(service.isWithFinalConsonant(CONSONANTS_DATA[0])).toBeFalse();
    });

    it('should return false for a numeral', () => {
      expect(service.isWithFinalConsonant(NUMERAL_DATA[0])).toBeFalse();
    });
  });

  describe('getConsonantPositions', () => {
    it('should return positions for a consonant', () => {
      const result = service.getConsonantPositions(CONSONANTS_DATA[0]);

      expect(result).toEqual(CONSONANTS_DATA[0].position);
    });

    it('should return false for a vowel', () => {
      expect(service.getConsonantPositions(VOWELS_DATA[0])).toBeFalse();
    });

    it('should return false for a numeral', () => {
      expect(service.getConsonantPositions(NUMERAL_DATA[0])).toBeFalse();
    });
  });

  describe('isObsolete', () => {
    it('should return false for a non-obsolete consonant', () => {
      const nonObsolete = CONSONANTS_DATA.find(c => !c.obsolete);

      expect(service.isObsolete(nonObsolete!)).toBeFalsy();
    });

    it('should return obsolete object for an obsolete consonant', () => {
      const obsolete = CONSONANTS_DATA.find(c => c.obsolete);
      if (obsolete) {
        const result = service.isObsolete(obsolete);

        expect(result).toBeTruthy();
        expect(result).toEqual(obsolete.obsolete!);
      }
    });

    it('should return false for a vowel', () => {
      expect(service.isObsolete(VOWELS_DATA[0])).toBeFalsy();
    });

    it('should return false for a numeral', () => {
      expect(service.isObsolete(NUMERAL_DATA[0])).toBeFalsy();
    });
  });
});
