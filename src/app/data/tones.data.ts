import { ThaiSymbol } from '../shared/interfaces';
import { TONE_MARK } from '../shared/constants';

export const TONES_DATA: ThaiSymbol[] = [
  {
    id: 0,
    kind: TONE_MARK,
    symbol: '◌่',
    transcriptions: {
      thai: 'ไม้เอก',
      rtgs: 'mai ek',
      ipa: '/máːj èːk/',
    },
  },
  {
    id: 1,
    kind: TONE_MARK,
    symbol: '◌้',
    transcriptions: {
      thai: 'ไม้โท',
      rtgs: 'mai tho',
      ipa: '/máːj tʰoː/',
    },
  },
  {
    id: 2,
    kind: TONE_MARK,
    symbol: '◌๊',
    transcriptions: {
      thai: 'ไม้ตรี',
      rtgs: 'mai tri',
      ipa: '/máːj triː/',
    },
  },
  {
    id: 3,
    kind: TONE_MARK,
    symbol: '◌๋',
    transcriptions: {
      thai: 'ไม้จัตวา',
      rtgs: 'mai chattawa',
      ipa: '/máːj tɕàt.tà.waː/',
    },
  },
];
