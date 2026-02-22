import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SelectionStore } from './selection.store';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { CONSONANT, HIGH, LOW, MID, SHORT, VOWEL } from '../../shared/constants';

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

    it('should have 0 consonants and vowels counts', () => {
      expect(store.consonantsCount()).toBe(0);
      expect(store.vowelsCount()).toBe(0);
    });
  });

  describe('selectLetter', () => {
    it('should add a letter', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      expect(store.selected().length).toBe(1);
      expect(store.isEmpty()).toBeFalse();
    });

    it('should not add a duplicate (same id + kind)', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      store.selectLetter(THAI_CONSONANTS[0]);
      expect(store.selected().length).toBe(1);
    });
  });

  describe('deselectLetter', () => {
    it('should remove a letter', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      store.deselectLetter(THAI_CONSONANTS[0]);
      expect(store.selected().length).toBe(0);
    });
  });

  describe('toggleLetter', () => {
    it('should add when not present', () => {
      store.toggleLetter(THAI_CONSONANTS[0]);
      expect(store.selected().length).toBe(1);
    });

    it('should remove when already present', () => {
      store.toggleLetter(THAI_CONSONANTS[0]);
      store.toggleLetter(THAI_CONSONANTS[0]);
      expect(store.selected().length).toBe(0);
    });
  });

  describe('selectAll / deselectAll', () => {
    it('should select all consonants', () => {
      store.selectAll(CONSONANT);
      expect(store.selectedConsonants().length).toBe(THAI_CONSONANTS.length);
      expect(store.consonantsCount()).toBe(THAI_CONSONANTS.length);
    });

    it('should select all vowels', () => {
      store.selectAll(VOWEL);
      expect(store.selectedVowels().length).toBe(THAI_VOWELS.length);
      expect(store.vowelsCount()).toBe(THAI_VOWELS.length);
    });

    it('should deselect all consonants without touching vowels', () => {
      store.selectAll(CONSONANT);
      store.selectAll(VOWEL);
      store.deselectAll(CONSONANT);
      expect(store.consonantsCount()).toBe(0);
      expect(store.vowelsCount()).toBe(THAI_VOWELS.length);
    });

    it('should deselect all vowels without touching consonants', () => {
      store.selectAll(CONSONANT);
      store.selectAll(VOWEL);
      store.deselectAll(VOWEL);
      expect(store.consonantsCount()).toBe(THAI_CONSONANTS.length);
      expect(store.vowelsCount()).toBe(0);
    });
  });

  describe('selectByCategory', () => {
    it('should select all consonants of a class', () => {
      store.selectByCategory(MID);
      const midCount = THAI_CONSONANTS.filter(c => c.class === MID).length;
      expect(store.selected().length).toBe(midCount);
    });

    it('should select all vowels of a type', () => {
      store.selectByCategory(SHORT);
      const shortCount = THAI_VOWELS.filter(v => v.type === SHORT).length;
      expect(store.selected().length).toBe(shortCount);
    });

    it('should not duplicate already selected letters', () => {
      store.selectByCategory(MID);
      const count = store.selected().length;
      store.selectByCategory(MID);
      expect(store.selected().length).toBe(count);
    });
  });

  describe('deselectByCategory', () => {
    it('should deselect consonants of a class', () => {
      store.selectAll(CONSONANT);
      store.deselectByCategory(MID);
      expect(store.selected().every(l => l.kind !== CONSONANT || (l as { class: string }).class !== MID)).toBeTrue();
    });

    it('should deselect vowels of a type', () => {
      store.selectAll(VOWEL);
      store.deselectByCategory(SHORT);
      expect(store.selected().every(l => l.kind !== VOWEL || (l as { type: string }).type !== SHORT)).toBeTrue();
    });
  });

  describe('toggleByCategory', () => {
    it('should select all when none are selected', () => {
      store.toggleByCategory(HIGH);
      const highCount = THAI_CONSONANTS.filter(c => c.class === HIGH).length;
      expect(store.selected().length).toBe(highCount);
    });

    it('should swap: deselect selected and select unselected', () => {
      const highConsonants = THAI_CONSONANTS.filter(c => c.class === HIGH);
      store.selectLetter(highConsonants[0]);
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
  });

  describe('computed signals', () => {
    it('selectedConsonants should filter consonants only', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      store.selectLetter(THAI_VOWELS[0]);
      expect(store.selectedConsonants().length).toBe(1);
      expect(store.selectedConsonants()[0].kind).toBe(CONSONANT);
    });

    it('selectedVowels should filter vowels only', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      store.selectLetter(THAI_VOWELS[0]);
      expect(store.selectedVowels().length).toBe(1);
      expect(store.selectedVowels()[0].kind).toBe(VOWEL);
    });

    it('totalCount should reflect all selected', () => {
      store.selectLetter(THAI_CONSONANTS[0]);
      store.selectLetter(THAI_VOWELS[0]);
      expect(store.totalCount()).toBe(2);
    });
  });
});
