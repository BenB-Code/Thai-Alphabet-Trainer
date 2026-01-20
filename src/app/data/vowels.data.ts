import { DIPHTHONG, LONG, SHORT, SPECIAL, ThaiVowel, VOWEL } from '../shared/models';

export const THAI_VOWELS: ThaiVowel[] = [
  {
    id: 1,
    kind: VOWEL,
    character: 'อะ',
    romanization: 'a',
    exampleWord: 'ka',
    exampleWordThai: 'กะ',
    en: {
      exampleMeaning: 'to estimate',
    },
    fr: {
      exampleMeaning: 'estimer',
    },
    type: SHORT,
  },
  {
    id: 2,
    kind: VOWEL,
    character: 'อา',
    romanization: 'aa',
    exampleWord: 'kaa',
    exampleWordThai: 'กา',
    en: {
      exampleMeaning: 'crow',
    },
    fr: {
      exampleMeaning: 'corbeau',
    },
    type: LONG,
  },
  {
    id: 3,
    kind: VOWEL,
    character: 'อิ',
    romanization: 'i',
    exampleWord: 'ki',
    exampleWordThai: 'กิ',
    en: {
      exampleMeaning: 'prefix',
    },
    fr: {
      exampleMeaning: 'préfixe',
    },
    type: SHORT,
  },
  {
    id: 4,
    kind: VOWEL,
    character: 'อี',
    romanization: 'ii',
    exampleWord: 'kii',
    exampleWordThai: 'กี',
    en: {
      exampleMeaning: 'to hinder',
    },
    fr: {
      exampleMeaning: 'gêner',
    },
    type: LONG,
  },
  {
    id: 5,
    kind: VOWEL,
    character: 'อึ',
    romanization: 'ue',
    exampleWord: 'kuek',
    exampleWordThai: 'กึก',
    en: {
      exampleMeaning: 'sound',
    },
    fr: {
      exampleMeaning: 'son',
    },
    type: SHORT,
  },
  {
    id: 6,
    kind: VOWEL,
    character: 'อื',
    romanization: 'uue',
    exampleWord: 'kuue',
    exampleWordThai: 'กื',
    en: {
      exampleMeaning: 'prefix',
    },
    fr: {
      exampleMeaning: 'préfixe',
    },
    type: LONG,
  },
  {
    id: 7,
    kind: VOWEL,
    character: 'อุ',
    romanization: 'u',
    exampleWord: 'ku',
    exampleWordThai: 'กุ',
    en: {
      exampleMeaning: 'prefix',
    },
    fr: {
      exampleMeaning: 'préfixe',
    },
    type: SHORT,
  },
  {
    id: 8,
    kind: VOWEL,
    character: 'อู',
    romanization: 'uu',
    exampleWord: 'kuu',
    exampleWordThai: 'กู',
    en: {
      exampleMeaning: 'I (informal)',
    },
    fr: {
      exampleMeaning: 'je (familier)',
    },
    type: LONG,
  },
  {
    id: 9,
    kind: VOWEL,
    character: 'เอะ',
    romanization: 'e',
    exampleWord: 'ke',
    exampleWordThai: 'เกะ',
    en: {
      exampleMeaning: 'messy',
    },
    fr: {
      exampleMeaning: 'désordonné',
    },
    type: SHORT,
  },
  {
    id: 10,
    kind: VOWEL,
    character: 'เอ',
    romanization: 'ee',
    exampleWord: 'kee',
    exampleWordThai: 'เก',
    en: {
      exampleMeaning: 'old',
    },
    fr: {
      exampleMeaning: 'vieux',
    },
    type: LONG,
  },
  {
    id: 11,
    kind: VOWEL,
    character: 'แอะ',
    romanization: 'ae',
    exampleWord: 'kae',
    exampleWordThai: 'แกะ',
    en: {
      exampleMeaning: 'sheep',
    },
    fr: {
      exampleMeaning: 'mouton',
    },
    type: SHORT,
  },
  {
    id: 12,
    kind: VOWEL,
    character: 'แอ',
    romanization: 'aae',
    exampleWord: 'kaae',
    exampleWordThai: 'แก',
    en: {
      exampleMeaning: 'old',
    },
    fr: {
      exampleMeaning: 'vieux',
    },
    type: LONG,
  },
  {
    id: 13,
    kind: VOWEL,
    character: 'โอะ',
    romanization: 'o',
    exampleWord: 'ko',
    exampleWordThai: 'โกะ',
    en: {
      exampleMeaning: 'bald',
    },
    fr: {
      exampleMeaning: 'chauve',
    },
    type: SHORT,
  },
  {
    id: 14,
    kind: VOWEL,
    character: 'โอ',
    romanization: 'oo',
    exampleWord: 'koo',
    exampleWordThai: 'โก',
    en: {
      exampleMeaning: 'to cheat',
    },
    fr: {
      exampleMeaning: 'tricher',
    },
    type: LONG,
  },
  {
    id: 15,
    kind: VOWEL,
    character: 'เอาะ',
    romanization: 'aw',
    exampleWord: 'kaw',
    exampleWordThai: 'เกาะ',
    en: {
      exampleMeaning: 'island',
    },
    fr: {
      exampleMeaning: 'île',
    },
    type: SHORT,
  },
  {
    id: 16,
    kind: VOWEL,
    character: '-อ',
    romanization: 'aaw',
    exampleWord: 'kaaw',
    exampleWordThai: 'กอ',
    en: {
      exampleMeaning: 'to embrace',
    },
    fr: {
      exampleMeaning: 'embrasser',
    },
    type: LONG,
  },
  {
    id: 17,
    kind: VOWEL,
    character: 'เ-อะ',
    romanization: 'oe',
    exampleWord: 'koe',
    exampleWordThai: 'เกอะ',
    en: {
      exampleMeaning: 'informal',
    },
    fr: {
      exampleMeaning: 'informel',
    },
    type: SHORT,
  },
  {
    id: 18,
    kind: VOWEL,
    character: 'เ-อ',
    romanization: 'ooe',
    exampleWord: 'kooe',
    exampleWordThai: 'เกอ',
    en: {
      exampleMeaning: 'prefix',
    },
    fr: {
      exampleMeaning: 'préfixe',
    },
    type: LONG,
  },
  // Diphthongs
  {
    id: 19,
    kind: VOWEL,
    character: 'เอีย',
    romanization: 'ia',
    exampleWord: 'kia',
    exampleWordThai: 'เกีย',
    en: {
      exampleMeaning: 'related to',
    },
    fr: {
      exampleMeaning: 'lié à',
    },
    type: DIPHTHONG,
  },
  {
    id: 20,
    kind: VOWEL,
    character: 'เอือ',
    romanization: 'uea',
    exampleWord: 'kuea',
    exampleWordThai: 'เกือ',
    en: {
      exampleMeaning: 'almost',
    },
    fr: {
      exampleMeaning: 'presque',
    },
    type: DIPHTHONG,
  },
  {
    id: 21,
    kind: VOWEL,
    character: 'อัว',
    romanization: 'ua',
    exampleWord: 'kua',
    exampleWordThai: 'กัว',
    en: {
      exampleMeaning: 'to stir',
    },
    fr: {
      exampleMeaning: 'remuer',
    },
    type: DIPHTHONG,
  },
  {
    id: 22,
    kind: VOWEL,
    character: 'ไอ',
    romanization: 'ai',
    exampleWord: 'kai',
    exampleWordThai: 'ไก',
    en: {
      exampleMeaning: 'far',
    },
    fr: {
      exampleMeaning: 'loin',
    },
    type: DIPHTHONG,
  },
  {
    id: 23,
    kind: VOWEL,
    character: 'ใอ',
    romanization: 'ai',
    exampleWord: 'kai',
    exampleWordThai: 'ใก',
    en: {
      exampleMeaning: 'near',
    },
    fr: {
      exampleMeaning: 'près',
    },
    type: DIPHTHONG,
  },
  {
    id: 24,
    kind: VOWEL,
    character: 'เอา',
    romanization: 'ao',
    exampleWord: 'kao',
    exampleWordThai: 'เกา',
    en: {
      exampleMeaning: 'to scratch',
    },
    fr: {
      exampleMeaning: 'gratter',
    },
    type: DIPHTHONG,
  },
  // Special
  {
    id: 25,
    kind: VOWEL,
    character: 'อำ', //
    romanization: 'am',
    exampleWord: 'kam',
    exampleWordThai: 'กำ',
    en: {
      exampleMeaning: 'to grasp',
    },
    fr: {
      exampleMeaning: 'saisir',
    },
    type: SPECIAL,
  },
  {
    id: 26,
    kind: VOWEL,
    character: 'ฤ',
    romanization: 'rue',
    exampleWord: 'krue',
    exampleWordThai: 'ครุ',
    en: {
      exampleMeaning: 'heavy',
    },
    fr: {
      exampleMeaning: 'lourd',
    },
    type: SPECIAL,
  },
  {
    id: 27,
    kind: VOWEL,
    character: 'ฤๅ',
    romanization: 'ruue',
    exampleWord: 'kruue',
    exampleWordThai: 'กรื',
    en: {
      exampleMeaning: 'long rue',
    },
    fr: {
      exampleMeaning: 'rue long',
    },
    type: SPECIAL,
  },
  {
    id: 28,
    kind: VOWEL,
    character: 'ฦ',
    romanization: 'lue',
    exampleWord: 'klue',
    exampleWordThai: 'กลึ',
    en: {
      exampleMeaning: 'to lathe',
    },
    fr: {
      exampleMeaning: 'tourner',
    },
    type: SPECIAL,
  },
  {
    id: 29,
    kind: VOWEL,
    character: 'ฦๅ',
    romanization: 'luue',
    exampleWord: 'kluue',
    exampleWordThai: 'กลื',
    en: {
      exampleMeaning: 'long lue',
    },
    fr: {
      exampleMeaning: 'lue long',
    },
    type: SPECIAL,
  },
];
