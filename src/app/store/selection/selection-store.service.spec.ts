import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SelectionStoreService } from './selection-store.service';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { CONSONANT, HIGH, LOW, MID, SHORT, VOWEL } from '../../shared/constants';
import { ThaiCharacter } from '../../shared/types';

describe('SelectionStoreService', () => {
  let service: SelectionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(SelectionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('signal delegations', () => {
    it('should expose initial empty state', () => {
      expect(service.selected()).toEqual([]);
      expect(service.selectedConsonants()).toEqual([]);
      expect(service.selectedVowels()).toEqual([]);
      expect(service.consonantsCount()).toBe(0);
      expect(service.vowelsCount()).toBe(0);
      expect(service.totalCount()).toBe(0);
      expect(service.isEmpty()).toBeTrue();
    });
  });

  describe('selectLetter', () => {
    it('should select a letter', () => {
      service.selectLetter(THAI_CONSONANTS[0]);
      expect(service.totalCount()).toBe(1);
    });
  });

  describe('deselectLetter', () => {
    it('should deselect a letter', () => {
      service.selectLetter(THAI_CONSONANTS[0]);
      service.deselectLetter(THAI_CONSONANTS[0]);
      expect(service.totalCount()).toBe(0);
    });
  });

  describe('toggleLetter', () => {
    it('should toggle a letter', () => {
      service.toggleLetter(THAI_CONSONANTS[0]);
      expect(service.totalCount()).toBe(1);
      service.toggleLetter(THAI_CONSONANTS[0]);
      expect(service.totalCount()).toBe(0);
    });
  });

  describe('selectAll / deselectAll', () => {
    it('should select all of a kind', () => {
      service.selectAll(CONSONANT);
      expect(service.consonantsCount()).toBe(THAI_CONSONANTS.length);
    });

    it('should deselect all of a kind', () => {
      service.selectAll(VOWEL);
      service.deselectAll(VOWEL);
      expect(service.vowelsCount()).toBe(0);
    });
  });

  describe('selectByCategory / deselectByCategory', () => {
    it('should select by consonant class', () => {
      service.selectByCategory(MID);
      const midCount = THAI_CONSONANTS.filter(c => c.class === MID).length;
      expect(service.totalCount()).toBe(midCount);
    });

    it('should deselect by vowel type', () => {
      service.selectByCategory(SHORT);
      service.deselectByCategory(SHORT);
      expect(service.totalCount()).toBe(0);
    });
  });

  describe('toggleByCategory', () => {
    it('should toggle a category', () => {
      service.toggleByCategory(HIGH);
      const highCount = THAI_CONSONANTS.filter(c => c.class === HIGH).length;
      expect(service.totalCount()).toBe(highCount);
    });
  });

  describe('getCountByCategory', () => {
    it('should count consonants by class', () => {
      service.selectByCategory(MID);
      const midCount = THAI_CONSONANTS.filter(c => c.class === MID).length;
      expect(service.getCountByCategory(MID)).toBe(midCount);
    });

    it('should count vowels by type', () => {
      service.selectByCategory(SHORT);
      const shortCount = THAI_VOWELS.filter(v => v.type === SHORT).length;
      expect(service.getCountByCategory(SHORT)).toBe(shortCount);
    });

    it('should return 0 for unselected category', () => {
      expect(service.getCountByCategory(LOW)).toBe(0);
    });

    it('should not count mismatched category', () => {
      service.selectByCategory(MID);
      expect(service.getCountByCategory(HIGH)).toBe(0);
    });

    it('should return 0 for a letter matching neither vowel nor consonant type guard', () => {
      const malformed = { id: 999, kind: CONSONANT } as unknown as ThaiCharacter;
      service.selectLetter(malformed);

      expect(service.totalCount()).toBe(1);
      expect(service.getCountByCategory(MID)).toBe(0);
    });
  });
});
