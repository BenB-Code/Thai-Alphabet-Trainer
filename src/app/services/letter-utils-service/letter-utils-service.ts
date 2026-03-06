import { Injectable } from '@angular/core';
import { ColorsType, ConsonantClassType, ThaiSymbolType, VowelLengthType } from '../../shared/types';
import { ConsonantPosition, ThaiConsonant, ThaiNumeral, ThaiSymbol, ThaiVowel } from '../../shared/interfaces';
import { TypeClassColorsMap } from '../../shared/map';
import { CLASS, CONSONANT, DIACRITIC, KIND, NUMBER, NUMERAL, TONE_MARK, TYPE, VOWEL } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class LetterUtilsService {
  isConsonant(letter: ThaiSymbolType): letter is ThaiConsonant {
    return CLASS in letter && letter.kind === CONSONANT;
  }

  isVowel(letter: ThaiSymbolType): letter is ThaiVowel {
    return TYPE in letter && letter.kind === VOWEL;
  }

  isNumeral(letter: ThaiSymbolType): letter is ThaiNumeral {
    return NUMBER in letter && letter.kind === NUMERAL;
  }

  isDiacritic(letter: ThaiSymbolType): letter is ThaiSymbol {
    return KIND in letter && letter.kind === DIACRITIC;
  }

  isTone(letter: ThaiSymbolType): letter is ThaiSymbol {
    return KIND in letter && letter.kind === TONE_MARK;
  }

  getLetterColor(letter: ConsonantClassType | VowelLengthType): ColorsType {
    return TypeClassColorsMap[letter];
  }

  isWithFinalConsonant(letter: ThaiSymbolType): boolean | null {
    if (this.isVowel(letter)) {
      return letter.withFinalConsonant;
    }
    return false;
  }

  getConsonantPositions(letter: ThaiSymbolType): ConsonantPosition[] | false {
    if (this.isConsonant(letter)) {
      return letter.position;
    }
    return false;
  }

  isObsolete(letter: ThaiSymbolType):
    | false
    | {
        en: string;
        fr: string;
      }
    | undefined {
    return this.isConsonant(letter) && letter.obsolete;
  }
}
