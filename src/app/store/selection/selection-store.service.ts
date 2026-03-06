import { inject, Injectable } from '@angular/core';
import { SelectionStore } from './selection.store';
import { ConsonantClassType, LetterKindType, ThaiSymbolType, VowelLengthType } from '../../shared/types';
import { LetterUtilsService } from '../../services/letter-utils-service/letter-utils-service';

@Injectable({ providedIn: 'root' })
export class SelectionStoreService {
  private readonly store = inject(SelectionStore);
  private readonly letterUtilsService = inject(LetterUtilsService);

  readonly selected = this.store.selected;
  readonly selectedConsonants = this.store.selectedConsonants;
  readonly selectedVowels = this.store.selectedVowels;
  readonly consonantsCount = this.store.consonantsCount;
  readonly vowelsCount = this.store.vowelsCount;
  readonly totalCount = this.store.totalCount;
  readonly isEmpty = this.store.isEmpty;

  selectLetter(letter: ThaiSymbolType): void {
    this.store.selectLetter(letter);
  }

  deselectLetter(letter: ThaiSymbolType): void {
    this.store.deselectLetter(letter);
  }

  toggleLetter(letter: ThaiSymbolType): void {
    this.store.toggleLetter(letter);
  }

  selectAll(kind: LetterKindType): void {
    this.store.selectAll(kind);
  }

  deselectAll(kind: LetterKindType): void {
    this.store.deselectAll(kind);
  }

  selectByCategory(category: ConsonantClassType | VowelLengthType): void {
    this.store.selectByCategory(category);
  }

  deselectByCategory(category: ConsonantClassType | VowelLengthType): void {
    this.store.deselectByCategory(category);
  }

  toggleByCategory(category: ConsonantClassType | VowelLengthType): void {
    this.store.toggleByCategory(category);
  }

  getCountByCategory(category: string): number {
    return this.store.selected().filter(letter => {
      if (this.letterUtilsService.isVowel(letter)) return letter.type === category;
      if (this.letterUtilsService.isConsonant(letter)) return letter.class === category;
      return false;
    }).length;
  }
}
