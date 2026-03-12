import { ThaiSymbol } from '../shared/interfaces';
import { DIACRITIC } from '../shared/constants';

export const DIACRITICS_DATA: ThaiSymbol[] = [
  {
    id: 0,
    kind: DIACRITIC,
    category: DIACRITIC,
    symbol: '◌็',
    transcriptions: {
      thai: 'ไม้ไต่คู้',
      rtgs: 'mái tài khú',
      ipa: 'máj tàj kʰúː',
    },
    info: {
      en: 'Shortens vowel',
      fr: 'Raccourcit la voyelle',
    },
  },
  {
    id: 1,
    kind: DIACRITIC,
    category: DIACRITIC,
    symbol: '◌์',
    transcriptions: {
      thai: 'ทัณฑฆาต',
      rtgs: 'thǎnthákhàt',
      ipa: 'tʰǎn.tʰá.kʰàːt',
    },
    info: {
      en: ['Also called "การันต์" karan', 'Indicates silent letter'],
      fr: ['Également appelé "การันต์" karan', 'Indique une lettre muette'],
    },
  },
  {
    id: 2,
    kind: DIACRITIC,
    category: DIACRITIC,
    symbol: '"',
    transcriptions: {
      thai: 'ฟันหนู',
      rtgs: 'fán nǔ',
      ipa: 'fán nǔː',
    },
    info: {
      en: [
        'Combined with short sara i (◌ิ) to make long sara ue (◌ื)',
        'Combined with fong man (๏) to make fong man fan nu (๏")',
      ],
      fr: [
        'Combiné avec sara i court (◌ิ) pour former sara ue long (◌ื)',
        'Combiné avec fong man (๏) pour former fong man fan nu (๏")',
      ],
    },
  },
];
