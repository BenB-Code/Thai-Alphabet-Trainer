import { TestBed } from '@angular/core/testing';

import { StateService } from './state-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { CONSONANT, VOWEL } from '../../shared/models';

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
    describe('toggleLetter', () => {
      it('should add entry if not present as VOWEL', () => {
        expect(service.selectedVowels().size).toEqual(0);

        service.toggleLetter(THAI_VOWELS[1]);

        expect(service.selectedVowels().size).toEqual(1);
        expect(service.selectedVowels()).toContain(THAI_VOWELS[1]);
      });
      it('should remove entry when already present as VOWEL', () => {
        service.selectAll(VOWEL);
        expect(service.selectedVowels().size).toEqual(THAI_VOWELS.length);

        service.toggleLetter(THAI_VOWELS[1]);

        expect(service.selectedVowels().size).toEqual(THAI_VOWELS.length - 1);
        expect(service.selectedVowels()).not.toContain(THAI_VOWELS[1]);
      });

      it('should add entry if not present as CONSONANTS', () => {
        expect(service.selectedConsonants().size).toEqual(0);

        service.toggleLetter(THAI_CONSONANTS[1]);

        expect(service.selectedConsonants().size).toEqual(1);
        expect(service.selectedConsonants()).toContain(THAI_CONSONANTS[1]);
      });

      it('should remove entry when already present as CONSONANTS', () => {
        service.selectAll(CONSONANT);
        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length);

        service.toggleLetter(THAI_CONSONANTS[1]);

        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length - 1);
        expect(service.selectedConsonants()).not.toContain(THAI_CONSONANTS[1]);
      });
    });
  });

  describe('Thai Consonants', () => {
    describe('selectAll', () => {
      it('should return a full set', () => {
        service.selectAll(CONSONANT);

        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length);
        expect(service.selectedConsonantsCount()).toEqual(THAI_CONSONANTS.length);
      });
    });

    describe('deselectAll', () => {
      it('should return an empty set', () => {
        service.deselectAll(CONSONANT);
        expect(service.selectedConsonants().size).toEqual(0);
        expect(service.selectedConsonantsCount()).toEqual(0);
      });
    });
  });

  describe('Thai Vowels', () => {
    describe('selectAll', () => {
      it('should return a full set', () => {
        service.selectAll(VOWEL);
        expect(service.selectedVowels().size).toEqual(THAI_VOWELS.length);
        expect(service.selectedVowelsCount()).toEqual(THAI_VOWELS.length);
      });
    });

    describe('deselectAll', () => {
      it('should return an empty set', () => {
        service.deselectAll(VOWEL);
        expect(service.selectedVowels().size).toEqual(0);
        expect(service.selectedVowelsCount()).toEqual(0);
      });
    });
  });

  describe('Total', () => {
    it('should merge consonants and vowels', () => {
      expect(service.total().size).toEqual(0);
      service.selectAll(CONSONANT);
      service.selectAll(VOWEL);

      expect(service.total().size).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
      expect(service.totalCount()).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
    });
  });
});
