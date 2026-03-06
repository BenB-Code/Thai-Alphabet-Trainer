import { DIGIT, NUMBER, NUMERAL } from '../shared/constants';
import { ThaiNumeral } from '../shared/interfaces';

export const NUMERAL_DATA: ThaiNumeral[] = [
  {
    id: 0,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๐',
    transcriptions: {
      thai: 'ศูนย์',
      rtgs: 'sǔn',
      ipa: '/sǔːn/',
    },
    number: '0',
  },
  {
    id: 1,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๑',
    transcriptions: {
      thai: 'หนึ่ง',
      rtgs: 'nùeng',
      ipa: '/nɯ̀ŋ/',
    },
    number: '1',
  },
  {
    id: 2,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๒',
    transcriptions: {
      thai: 'สอง',
      rtgs: 'sǒng',
      ipa: '/sɔ̌ːŋ/',
    },
    number: '2',
  },
  {
    id: 3,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๓',
    transcriptions: {
      thai: 'สาม',
      rtgs: 'sǎm',
      ipa: '/sǎːm/',
    },
    number: '3',
  },
  {
    id: 4,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๔',
    transcriptions: {
      thai: 'สี่',
      rtgs: 'sì',
      ipa: '/sìː/',
    },
    number: '4',
  },
  {
    id: 5,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๕',
    transcriptions: {
      thai: 'ห้า',
      rtgs: 'hâ',
      ipa: '/hâː/',
    },
    number: '5',
  },
  {
    id: 6,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๖',
    transcriptions: {
      thai: 'หก',
      rtgs: 'hòk',
      ipa: '/hòk/',
    },
    number: '6',
  },
  {
    id: 7,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๗',
    transcriptions: {
      thai: 'เจ็ด',
      rtgs: 'chèt',
      ipa: '/tɕèt/',
    },
    number: '7',
  },
  {
    id: 8,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๘',
    transcriptions: {
      thai: 'แปด',
      rtgs: 'pàet',
      ipa: '/pɛ̀ːt/',
    },
    number: '8',
  },
  {
    id: 9,
    kind: NUMERAL,
    category: DIGIT,
    symbol: '๙',
    transcriptions: {
      thai: 'เก้า',
      rtgs: 'kâo',
      ipa: '/kâːw/',
    },
    number: '9',
  },
  {
    id: 10,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐',
    transcriptions: {
      thai: 'สิบ',
      rtgs: 'sìp',
      ipa: '/sìp/',
    },
    number: '10',
  },
  {
    id: 11,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๑',
    transcriptions: {
      thai: 'เอ็ด',
      rtgs: 'sìp èt',
      ipa: '/sìp ʔèt/',
    },
    number: '11',
    info: {
      en: 'Only "et" for 1 as the ending digit in other cases',
      fr: 'Seul "et" est utilisé pour le chiffre 1 lorsqu’il apparaît comme chiffre final dans les autres cas.\n',
    },
  },
  {
    id: 12,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๒',
    transcriptions: {
      thai: 'สอง',
      rtgs: 'sìp sǒng',
      ipa: '/sìp sɔ̌ːŋ/',
    },
    number: '12',
  },
  {
    id: 13,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๒๐',
    transcriptions: {
      thai: 'ยี่สิบ',
      rtgs: 'yî sìp',
      ipa: '/jîː sìp/',
    },
    number: '20',
    info: {
      en: '"yi" is only used for 2 as the tens digit.',
      fr: '"yi" est utilisé uniquement pour le chiffre 2 lorsqu’il se trouve à la position des dizaines.',
    },
  },
  {
    id: 14,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๓๐',
    transcriptions: {
      thai: 'สามสิบ',
      rtgs: 'sǎm sìp',
      ipa: '/sǎːm sìp/',
    },
    number: '30',
  },
  {
    id: 15,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐๐',
    transcriptions: {
      thai: 'ร้อย',
      rtgs: 'rói',
      ipa: '/rɔ́ːj/',
    },
    number: '100',
  },
  {
    id: 16,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐๐๐',
    transcriptions: {
      thai: 'พัน',
      rtgs: 'phan',
      ipa: '/pʰān/',
    },
    number: '1000',
  },
  {
    id: 17,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐๐๐๐',
    transcriptions: {
      thai: 'หมื่น',
      rtgs: 'mùen',
      ipa: '/mɯ̀ːn/',
    },
    number: '10000',
  },
  {
    id: 18,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐๐๐๐๐',
    transcriptions: {
      thai: 'แสน',
      rtgs: 'sǎen',
      ipa: '/sɛ̌ːn/',
    },
    number: '100000',
  },
  {
    id: 19,
    kind: NUMERAL,
    category: NUMBER,
    symbol: '๑๐๐๐๐๐๐',
    transcriptions: {
      thai: 'ล้าน',
      rtgs: 'lán',
      ipa: '/láːn/',
    },
    number: '1000000',
    info: {
      en:
        'Numbers above a million are constructed by prefixing "lán" with a multiplier.\n' +
        'For example, ten million is "sip lán", and a trillion (10¹², a billion) is "lán lán".',
      fr:
        'Les nombres supérieurs à un million sont construits en préfixant "lán" avec un multiplicateur.\n' +
        'Par exemple, dix millions se dit "sip lán", et un billion (10¹², soit un milliard) se dit "lán lán".',
    },
  },
];
