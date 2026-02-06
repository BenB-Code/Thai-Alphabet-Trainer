import { TestBed } from '@angular/core/testing';

import { StateService } from './state-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { CONSONANT, VOWEL } from '../../shared/constants';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Letters Kind', () => {
    describe('selectLetter', () => {
      it('should add vowel', () => {
        service.selectLetter(THAI_VOWELS[0]);
        expect(service.selectedVowels()).toContain(THAI_VOWELS[0]);
      });

      it('should add consonant', () => {
        service.selectLetter(THAI_CONSONANTS[0]);
        expect(service.selectedConsonants()).toContain(THAI_CONSONANTS[0]);
      });
    });

    describe('deselectLetter', () => {
      it('should remove vowel', () => {
        service.selectLetter(THAI_VOWELS[0]);
        service.deselectLetter(THAI_VOWELS[0]);
        expect(service.selectedVowels()).not.toContain(THAI_VOWELS[0]);
      });

      it('should remove consonant', () => {
        service.selectLetter(THAI_CONSONANTS[0]);
        service.deselectLetter(THAI_CONSONANTS[0]);
        expect(service.selectedConsonants()).not.toContain(THAI_CONSONANTS[0]);
      });
    });

    describe('toggleLetter', () => {
      it('should add entry if not present as VOWEL', () => {
        service.toggleLetter(THAI_VOWELS[1]);
        expect(service.selectedVowels()).toContain(THAI_VOWELS[1]);
      });

      it('should remove entry when already present as VOWEL', () => {
        service.selectAll(VOWEL);
        service.toggleLetter(THAI_VOWELS[1]);
        expect(service.selectedVowels()).not.toContain(THAI_VOWELS[1]);
      });

      it('should add entry if not present as CONSONANTS', () => {
        service.toggleLetter(THAI_CONSONANTS[1]);
        expect(service.selectedConsonants()).toContain(THAI_CONSONANTS[1]);
      });

      it('should remove entry when already present as CONSONANTS', () => {
        service.selectAll(CONSONANT);
        service.toggleLetter(THAI_CONSONANTS[1]);
        expect(service.selectedConsonants()).not.toContain(THAI_CONSONANTS[1]);
      });
    });
  });

  describe('Thai Consonants', () => {
    describe('selectAll', () => {
      it('should return a full array', () => {
        service.selectAll(CONSONANT);

        expect(service.selectedConsonants().length).toEqual(THAI_CONSONANTS.length);
        expect(service.selectedConsonantsCount()).toEqual(THAI_CONSONANTS.length);
      });
    });

    describe('deselectAll', () => {
      it('should return an empty array', () => {
        service.selectAll(CONSONANT);
        service.deselectAll(CONSONANT);

        expect(service.selectedConsonants().length).toEqual(0);
        expect(service.selectedConsonantsCount()).toEqual(0);
      });
    });
  });

  describe('Thai Vowels', () => {
    describe('selectAll', () => {
      it('should return a full array', () => {
        service.selectAll(VOWEL);
        expect(service.selectedVowels().length).toEqual(THAI_VOWELS.length);
        expect(service.selectedVowelsCount()).toEqual(THAI_VOWELS.length);
      });
    });

    describe('deselectAll', () => {
      it('should return an empty array', () => {
        service.deselectAll(VOWEL);
        expect(service.selectedVowels().length).toEqual(0);
        expect(service.selectedVowelsCount()).toEqual(0);
      });
    });
  });

  describe('Total', () => {
    it('should merge consonants and vowels', () => {
      expect(service.selected().length).toEqual(0);
      service.selectAll(CONSONANT);
      service.selectAll(VOWEL);

      expect(service.selected().length).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
      expect(service.totalCount()).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
    });
  });
});
