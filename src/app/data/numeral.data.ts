import { NUMERAL } from '../shared/constants';
import { ThaiNumeral } from '../shared/interfaces';

export const NUMERAL_DATA: ThaiNumeral[] = [
  {
    id: 0,
    kind: NUMERAL,
    symbol: '๐',
    transcriptions: {
      thai: 'ศูนย์',
      rtgs: 'sun',
      ipa: '/sǔːn/',
    },
    number: '0',
  },
  {
    id: 1,
    kind: NUMERAL,
    symbol: '๑',
    transcriptions: {
      thai: 'หนึ่ง',
      rtgs: 'nueng',
      ipa: '/nɯ̀ŋ/',
    },
    number: '1',
  },
  {
    id: 2,
    kind: NUMERAL,
    symbol: '๒',
    transcriptions: {
      thai: 'สอง',
      rtgs: 'song',
      ipa: '/sɔ̌ːŋ/',
    },
    number: '2',
  },
  {
    id: 3,
    kind: NUMERAL,
    symbol: '๓',
    transcriptions: {
      thai: 'สาม',
      rtgs: 'sam',
      ipa: '/sǎːm/',
    },
    number: '3',
  },
  {
    id: 4,
    kind: NUMERAL,
    symbol: '๔',
    transcriptions: {
      thai: 'สี่',
      rtgs: 'si',
      ipa: '/sìː/',
    },
    number: '4',
  },
  {
    id: 5,
    kind: NUMERAL,
    symbol: '๕',
    transcriptions: {
      thai: 'ห้า',
      rtgs: 'ha',
      ipa: '/hâː/',
    },
    number: '5',
  },
  {
    id: 6,
    kind: NUMERAL,
    symbol: '๖',
    transcriptions: {
      thai: 'หก',
      rtgs: 'hok',
      ipa: '/hòk/',
    },
    number: '6',
  },
  {
    id: 7,
    kind: NUMERAL,
    symbol: '๗',
    transcriptions: {
      thai: 'เจ็ด',
      rtgs: 'chet',
      ipa: '/tɕèt/',
    },
    number: '7',
  },
  {
    id: 8,
    kind: NUMERAL,
    symbol: '๘',
    transcriptions: {
      thai: 'แปด',
      rtgs: 'paet',
      ipa: '/pɛ̀ːt/',
    },
    number: '8',
  },
  {
    id: 9,
    kind: NUMERAL,
    symbol: '๙',
    transcriptions: {
      thai: 'เก้า',
      rtgs: 'kao',
      ipa: '/kâːw/',
    },
    number: '9',
  },
  {
    id: 10,
    kind: NUMERAL,
    symbol: '๑๐',
    transcriptions: {
      thai: 'สิบ',
      rtgs: 'sip',
      ipa: '/sìp/',
    },
    number: '10',
  },
  {
    id: 11,
    kind: NUMERAL,
    symbol: '๑๑',
    transcriptions: {
      thai: 'เอ็ด',
      rtgs: 'sip et',
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
    symbol: '๑๒',
    transcriptions: {
      thai: 'สอง',
      rtgs: 'sip song',
      ipa: '/sìp sɔ̌ːŋ/',
    },
    number: '12',
  },
  {
    id: 13,
    kind: NUMERAL,
    symbol: '๒๐',
    transcriptions: {
      thai: 'ยี่สิบ',
      rtgs: 'yi sip',
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
    symbol: '๓๐',
    transcriptions: {
      thai: 'สามสิบ',
      rtgs: 'sam sip',
      ipa: '/sǎːm sìp/',
    },
    number: '30',
  },
  {
    id: 15,
    kind: NUMERAL,
    symbol: '๑๐๐',
    transcriptions: {
      thai: 'ร้อย',
      rtgs: 'roi',
      ipa: '/rɔ́ːj/',
    },
    number: '100',
  },
  {
    id: 16,
    kind: NUMERAL,
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
    symbol: '๑๐๐๐๐',
    transcriptions: {
      thai: 'หมื่น',
      rtgs: 'muen',
      ipa: '/mɯ̀ːn/',
    },
    number: '10000',
  },
  {
    id: 18,
    kind: NUMERAL,
    symbol: '๑๐๐๐๐๐',
    transcriptions: {
      thai: 'แสน',
      rtgs: 'saen',
      ipa: '/sɛ̌ːn/',
    },
    number: '100000',
  },
  {
    id: 19,
    kind: NUMERAL,
    symbol: '๑๐๐๐๐๐๐',
    transcriptions: {
      thai: 'ล้าน',
      rtgs: 'lan',
      ipa: '/láːn/',
    },
    number: '1000000',
    info: {
      en:
        'Numbers above a million are constructed by prefixing "lan" with a multiplier.\n' +
        'For example, ten million is "sip lan", and a trillion (10¹², a billion) is "lan lan".',
      fr:
        'Les nombres supérieurs à un million sont construits en préfixant "lan" avec un multiplicateur.\n' +
        'Par exemple, dix millions se dit "sip lan", et un billion (10¹², soit un milliard) se dit "lan lan".',
    },
  },
];
