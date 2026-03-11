import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SelectionStore } from './selection.store';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';
import { HIGH, LOW, MID } from '../../shared/constants';

describe('SelectionStore', () => {
  let store: InstanceType<typeof SelectionStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    store = TestBed.inject(SelectionStore);
  });

  describe('initial state', () => {
    it('should start with empty selected', () => {
      expect(store.selected()).toEqual([]);
    });

    it('should have totalCount 0', () => {
      expect(store.totalCount()).toBe(0);
    });

    it('should be empty', () => {
      expect(store.isEmpty()).toBeTrue();
    });
  });

  describe('toggleLetter', () => {
    it('should add when not present', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);

      expect(store.selected().length).toBe(1);
      expect(store.isEmpty()).toBeFalse();
    });

    it('should remove when already present', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);
      store.toggleLetter(CONSONANTS_DATA[0]);

      expect(store.selected().length).toBe(0);
      expect(store.isEmpty()).toBeTrue();
    });

    it('should add multiple different letters', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);
      store.toggleLetter(VOWELS_DATA[0]);

      expect(store.selected().length).toBe(2);
      expect(store.totalCount()).toBe(2);
    });

    it('should match by id and kind', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);
      store.toggleLetter(CONSONANTS_DATA[1]);

      expect(store.selected().length).toBe(2);

      store.toggleLetter(CONSONANTS_DATA[0]);
      expect(store.selected().length).toBe(1);
      expect(store.selected()[0].id).toBe(CONSONANTS_DATA[1].id);
    });
  });

  describe('selectByCategory', () => {
    it('should select all symbols of a category', () => {
      store.selectByCategory(MID);
      const midCount = CONSONANTS_DATA.filter(c => c.category === MID).length;

      expect(store.selected().length).toBe(midCount);
    });

    it('should not duplicate already selected letters', () => {
      store.selectByCategory(MID);
      const count = store.selected().length;
      store.selectByCategory(MID);

      expect(store.selected().length).toBe(count);
    });

    it('should append to existing selection', () => {
      store.toggleLetter(VOWELS_DATA[0]);
      store.selectByCategory(MID);
      const midCount = CONSONANTS_DATA.filter(c => c.category === MID).length;

      expect(store.selected().length).toBe(midCount + 1);
    });
  });

  describe('deselectByCategory', () => {
    it('should deselect all symbols of a category', () => {
      store.selectByCategory(MID);
      store.selectByCategory(LOW);
      store.deselectByCategory(MID);

      expect(store.selected().every(l => l.category !== MID)).toBeTrue();
    });

    it('should not affect other categories', () => {
      store.selectByCategory(MID);
      store.selectByCategory(LOW);
      const lowCount = store.selected().filter(l => l.category === LOW).length;

      store.deselectByCategory(MID);

      expect(store.selected().length).toBe(lowCount);
    });

    it('should do nothing when category is not selected', () => {
      store.selectByCategory(MID);
      const count = store.selected().length;

      store.deselectByCategory(HIGH);

      expect(store.selected().length).toBe(count);
    });
  });

  describe('toggleByCategory', () => {
    it('should select all when none are selected', () => {
      store.toggleByCategory(HIGH);
      const highCount = CONSONANTS_DATA.filter(c => c.category === HIGH).length;

      expect(store.selected().length).toBe(highCount);
    });

    it('should swap: deselect selected and select unselected', () => {
      const highConsonants = CONSONANTS_DATA.filter(c => c.category === HIGH);
      store.toggleLetter(highConsonants[0]);
      store.toggleByCategory(HIGH);

      expect(
        store.selected().some(l => l.id === highConsonants[0].id && l.kind === highConsonants[0].kind)
      ).toBeFalse();
      expect(store.selected().length).toBe(highConsonants.length - 1);
    });

    it('should deselect all when all are selected', () => {
      store.selectByCategory(LOW);
      store.toggleByCategory(LOW);

      expect(store.selected().length).toBe(0);
    });

    it('should not affect other categories', () => {
      store.selectByCategory(MID);
      const midCount = store.selected().length;
      store.toggleByCategory(HIGH);

      expect(store.selected().filter(l => l.category === MID).length).toBe(midCount);
    });
  });

  describe('computed signals', () => {
    it('totalCount should reflect all selected', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);
      store.toggleLetter(VOWELS_DATA[0]);

      expect(store.totalCount()).toBe(2);
    });

    it('isEmpty should be false when items selected', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);

      expect(store.isEmpty()).toBeFalse();
    });

    it('isEmpty should be true after removing all items', () => {
      store.toggleLetter(CONSONANTS_DATA[0]);
      store.toggleLetter(CONSONANTS_DATA[0]);

      expect(store.isEmpty()).toBeTrue();
    });
  });
});
