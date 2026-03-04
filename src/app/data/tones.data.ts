import { ThaiSymbol } from '../shared/interfaces';
import { TONE_MARK } from '../shared/constants';

export const TONES_DATA: ThaiSymbol[] = [
  {
    id: 0,
    kind: TONE_MARK,
    symbol: '◌่',
    transcriptions: {
      thai: 'ไม้เอก',
      rtgs: 'mái èk',
      ipa: '/máːj èːk/',
    },
  },
  {
    id: 1,
    kind: TONE_MARK,
    symbol: '◌้',
    transcriptions: {
      thai: 'ไม้โท',
      rtgs: 'mái tho',
      ipa: '/máːj tʰoː/',
    },
  },
  {
    id: 2,
    kind: TONE_MARK,
    symbol: '◌๊',
    transcriptions: {
      thai: 'ไม้ตรี',
      rtgs: 'mái tri',
      ipa: '/máːj triː/',
    },
  },
  {
    id: 3,
    kind: TONE_MARK,
    symbol: '◌๋',
    transcriptions: {
      thai: 'ไม้จัตวา',
      rtgs: 'mái chàttàwa',
      ipa: '/máːj tɕàt.tà.waː/',
    },
  },
];
