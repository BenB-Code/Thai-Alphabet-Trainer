import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SelectionStoreService } from './selection-store.service';
import { HIGH, LOW, MID } from '../../shared/constants';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';

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
      expect(service.totalCount()).toBe(0);
      expect(service.isEmpty()).toBeTrue();
    });
  });

  describe('toggleLetter', () => {
    it('should add a letter when not present', () => {
      service.toggleLetter(CONSONANTS_DATA[0]);

      expect(service.totalCount()).toBe(1);
    });

    it('should remove a letter when already present', () => {
      service.toggleLetter(CONSONANTS_DATA[0]);
      service.toggleLetter(CONSONANTS_DATA[0]);

      expect(service.totalCount()).toBe(0);
    });
  });

  describe('selectByCategory', () => {
    it('should select by category', () => {
      service.selectByCategory(MID);
      const midCount = CONSONANTS_DATA.filter(c => c.category === MID).length;

      expect(service.totalCount()).toBe(midCount);
    });
  });

  describe('deselectByCategory', () => {
    it('should deselect by category', () => {
      service.selectByCategory(MID);
      service.deselectByCategory(MID);

      expect(service.totalCount()).toBe(0);
    });
  });

  describe('toggleByCategory', () => {
    it('should toggle a category on', () => {
      service.toggleByCategory(HIGH);
      const highCount = CONSONANTS_DATA.filter(c => c.category === HIGH).length;

      expect(service.totalCount()).toBe(highCount);
    });

    it('should toggle a category off when all selected', () => {
      service.selectByCategory(LOW);
      service.toggleByCategory(LOW);

      expect(service.totalCount()).toBe(0);
    });
  });

  describe('getCountByCategory', () => {
    it('should count selected by category', () => {
      service.selectByCategory(MID);
      const midCount = CONSONANTS_DATA.filter(c => c.category === MID).length;

      expect(service.getCountByCategory(MID)).toBe(midCount);
    });

    it('should return 0 for unselected category', () => {
      expect(service.getCountByCategory(LOW)).toBe(0);
    });

    it('should not count mismatched category', () => {
      service.selectByCategory(MID);

      expect(service.getCountByCategory(HIGH)).toBe(0);
    });

    it('should count across different symbol types', () => {
      service.toggleLetter(CONSONANTS_DATA[0]);
      service.toggleLetter(VOWELS_DATA[0]);

      expect(service.getCountByCategory(CONSONANTS_DATA[0].category)).toBeGreaterThanOrEqual(1);
    });
  });
});
