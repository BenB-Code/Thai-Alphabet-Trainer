import { Injectable } from '@angular/core';
import { ColorsType, ConsonantClassType, ThaiSymbolType, VowelLengthType } from '../../shared/types';
import { ThaiConsonantType, ThaiVowelType } from '../../shared/interfaces';
import { TypeClassColorsMap } from '../../shared/map';

@Injectable({
  providedIn: 'root',
})
export class LetterUtilsService {
  isConsonant(letter: ThaiSymbolType): letter is ThaiConsonantType {
    return 'class' in letter;
  }

  isVowel(letter: ThaiSymbolType): letter is ThaiVowelType {
    return 'type' in letter;
  }

  getLetterColor(letter: ConsonantClassType | VowelLengthType): ColorsType {
    return TypeClassColorsMap[letter];
  }

  getVowelPosition(letter: ThaiSymbolType): ThaiVowelType['position'] | false {
    if (this.isVowel(letter)) {
      return letter.position;
    }
    return false;
  }

  getConsonantClassType(letter: ThaiSymbolType): ThaiConsonantType['class'] | false {
    if (this.isConsonant(letter)) {
      return letter.class;
    }
    return false;
  }

  getVowelType(letter: ThaiSymbolType): ThaiVowelType['type'] | false {
    if (this.isVowel(letter)) {
      return letter.type;
    }
    return false;
  }

  getTransliteration(letter: ThaiSymbolType): ThaiConsonantType['transcriptions'] | false {
    if (this.isConsonant(letter)) {
      return letter.transcriptions;
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
