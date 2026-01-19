import { TestBed } from '@angular/core/testing';

import { StateService } from './state-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';

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
        service.selectAllVowels();
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
        service.selectAllConsonants();
        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length);

        service.toggleLetter(THAI_CONSONANTS[1]);

        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length - 1);
        expect(service.selectedConsonants()).not.toContain(THAI_CONSONANTS[1]);
      });
    });
  });

  describe('Thai Consonants', () => {
    describe('selectAllConsonants', () => {
      it('should return a full set', () => {
        service.selectAllConsonants();

        expect(service.selectedConsonants().size).toEqual(THAI_CONSONANTS.length);
        expect(service.selectedConsonantsCount()).toEqual(THAI_CONSONANTS.length);
      });
    });

    describe('deselectAllConsonants', () => {
      it('should return an empty set', () => {
        service.deselectAllConsonants();
        expect(service.selectedConsonants().size).toEqual(0);
        expect(service.selectedConsonantsCount()).toEqual(0);
      });
    });
  });

  describe('Thai Vowels', () => {
    describe('selectAllVowels', () => {
      it('should return a full set', () => {
        service.selectAllVowels();
        expect(service.selectedVowels().size).toEqual(THAI_VOWELS.length);
        expect(service.selectedVowelsCount()).toEqual(THAI_VOWELS.length);
      });
    });

    describe('deselectAllVowels', () => {
      it('should return an empty set', () => {
        service.deselectAllVowels();
        expect(service.selectedVowels().size).toEqual(0);
        expect(service.selectedVowelsCount()).toEqual(0);
      });
    });
  });

  describe('Total', () => {
    it('should merge consonants and vowels', () => {
      expect(service.total().size).toEqual(0);
      service.selectAllConsonants();
      service.selectAllVowels();

      expect(service.total().size).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
      expect(service.totalCount()).toEqual(THAI_CONSONANTS.length + THAI_VOWELS.length);
    });
  });
});
