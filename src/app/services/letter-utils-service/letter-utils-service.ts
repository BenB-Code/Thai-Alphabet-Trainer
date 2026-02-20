import { Injectable } from '@angular/core';
import { TypeClassColorsMap } from '../../shared/constants';
import { Colors, ConsonantClass, ThaiCharacter, VowelType } from '../../shared/types';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class LetterUtilsService {
  isConsonant(letter: ThaiCharacter): letter is ThaiConsonant {
    return 'class' in letter;
  }

  isVowel(letter: ThaiCharacter): letter is ThaiVowel {
    return 'type' in letter;
  }

  getLetterColor(letter: ConsonantClass | VowelType): Colors {
    return TypeClassColorsMap[letter];
  }

  getVowelPosition(letter: ThaiCharacter): ThaiVowel['position'] | false {
    if (this.isVowel(letter)) {
      return letter.position;
    }
    return false;
  }

  getConsonantClass(letter: ThaiCharacter): ThaiConsonant['class'] | false {
    if (this.isConsonant(letter)) {
      return letter.class;
    }
    return false;
  }

  getVowelType(letter: ThaiCharacter): ThaiVowel['type'] | false {
    if (this.isVowel(letter)) {
      return letter.type;
    }
    return false;
  }

  getTransliteration(letter: ThaiCharacter): ThaiConsonant['transliteration'] | false {
    if (this.isConsonant(letter)) {
      return letter.transliteration;
    }
    return false;
  }

  isOutdated(letter: ThaiCharacter): boolean {
    return this.isConsonant(letter) && letter.outdated;
  }
}
