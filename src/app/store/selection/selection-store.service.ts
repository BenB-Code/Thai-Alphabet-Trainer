import { inject, Injectable } from '@angular/core';
import { SelectionStore } from './selection.store';
import { ConsonantClass, LetterKind, ThaiCharacter, VowelType } from '../../shared/types';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class SelectionStoreService {
  private readonly store = inject(SelectionStore);

  readonly selected = this.store.selected;
  readonly selectedConsonants = this.store.selectedConsonants;
  readonly selectedVowels = this.store.selectedVowels;
  readonly consonantsCount = this.store.consonantsCount;
  readonly vowelsCount = this.store.vowelsCount;
  readonly totalCount = this.store.totalCount;
  readonly isEmpty = this.store.isEmpty;

  selectLetter(letter: ThaiCharacter): void {
    this.store.selectLetter(letter);
  }

  deselectLetter(letter: ThaiCharacter): void {
    this.store.deselectLetter(letter);
  }

  toggleLetter(letter: ThaiCharacter): void {
    this.store.toggleLetter(letter);
  }

  selectAll(kind: LetterKind): void {
    this.store.selectAll(kind);
  }

  deselectAll(kind: LetterKind): void {
    this.store.deselectAll(kind);
  }

  selectByCategory(category: ConsonantClass | VowelType): void {
    this.store.selectByCategory(category);
  }

  deselectByCategory(category: ConsonantClass | VowelType): void {
    this.store.deselectByCategory(category);
  }

  toggleByCategory(category: ConsonantClass | VowelType): void {
    this.store.toggleByCategory(category);
  }

  getCountByCategory(category: string): number {
    return this.store.selected().filter(letter => {
      if (this.isVowel(letter)) return letter.type === category;
      if (this.isConsonant(letter)) return letter.class === category;
      return false;
    }).length;
  }

  private isConsonant(letter: ThaiCharacter): letter is ThaiConsonant {
    return 'class' in letter;
  }

  private isVowel(letter: ThaiCharacter): letter is ThaiVowel {
    return 'type' in letter;
  }
}
