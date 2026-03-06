import { Injectable } from '@angular/core';
import { ColorsType, ConsonantClassType, ThaiSymbolType, VowelLengthType } from '../../shared/types';
import { ConsonantPosition, ThaiConsonant, ThaiNumeral, ThaiSymbol, ThaiVowel } from '../../shared/interfaces';
import { TypeClassColorsMap } from '../../shared/map';
import { CLASS, KIND, NUMBER, TYPE, POSITION } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class LetterUtilsService {
  isConsonant(letter: ThaiSymbolType): letter is ThaiConsonant {
    return CLASS in letter;
  }

  isVowel(letter: ThaiSymbolType): letter is ThaiVowel {
    return TYPE in letter;
  }

  isNumeral(letter: ThaiSymbolType): letter is ThaiNumeral {
    return NUMBER in letter;
  }

  isDiacritic(letter: ThaiSymbolType): letter is ThaiSymbol {
    return KIND in letter;
  }

  isTone(letter: ThaiSymbolType): letter is ThaiSymbol {
    return KIND in letter;
  }

  getLetterColor(letter: ConsonantClassType | VowelLengthType): ColorsType {
    return TypeClassColorsMap[letter];
  }

  getVowelPosition(letter: ThaiSymbolType): ThaiVowel[typeof POSITION] | false {
    if (this.isVowel(letter)) {
      return letter.position;
    }
    return false;
  }

  getConsonantClassType(letter: ThaiSymbolType): ThaiConsonant[typeof CLASS] | false {
    if (this.isConsonant(letter)) {
      return letter.class;
    }
    return false;
  }

  getVowelType(letter: ThaiSymbolType): ThaiVowel[typeof TYPE] | false {
    if (this.isVowel(letter)) {
      return letter.type;
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
