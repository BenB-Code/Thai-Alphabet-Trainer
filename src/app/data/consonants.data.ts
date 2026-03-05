import { ThaiConsonantType } from '../shared/interfaces';
import {
  AFFRICATE,
  ALVEOLAR,
  ALVEOLO_PALATAL,
  APPROXIMANT,
  ASPIRATED,
  BILABIAL,
  CONSONANT,
  FINAL,
  FRICATIVE,
  GLOTTAL,
  HIGH,
  INITIAL,
  LABIO_DENTAL,
  LATERAL,
  LOW,
  MID,
  NASAL,
  PALATAL,
  PLOSIVE,
  UNASPIRATED,
  VELAR,
  VOICED,
  VOICELESS,
} from '../shared/constants';

export const CONSONANTS_DATA: ThaiConsonantType[] = [
  {
    id: 0,
    kind: CONSONANT,
    symbol: 'ก',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ก',
      rtgs: 'ko',
      ipa: '/kɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'k',
        ipa: '/k/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'k',
        ipa: '/k/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ไก่',
      rtgs: 'kài',
      ipa: '/kàj/',
      translation: {
        en: 'chicken',
        fr: 'poulet',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 1,
    kind: CONSONANT,
    symbol: 'ข',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ข',
      rtgs: 'khǒ',
      ipa: '/kʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'kh',
        ipa: '/kʰ/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'k',
        ipa: '/k/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ไข่',
      rtgs: 'khài',
      ipa: '/kʰàj/',
      translation: {
        en: 'egg',
        fr: 'oeuf',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 2,
    kind: CONSONANT,
    symbol: 'ฃ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ฃ',
      rtgs: 'khǒ',
      ipa: '/kʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'kh',
        ipa: '/kʰ/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ขวด',
      rtgs: 'khùat',
      ipa: '/kʰùat/',
      translation: {
        en: 'bottle',
        fr: 'bouteille',
      },
    },
    obsolete: {
      en: 'ฃ khǒ khùat is obsolete and replaced by ข khǒ khài, which has identical phonetic values',
      fr: 'ฃ khǒ khùat est obsolète et a été remplacé par ข khǒ khài, qui possède une valeur phonétique identique',
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 3,
    kind: CONSONANT,
    symbol: 'ค',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ค',
      rtgs: 'kho',
      ipa: '/kʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'kh',
        ipa: '/kʰ/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'k',
        ipa: '/k/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ควาย',
      rtgs: 'khwai',
      ipa: '/kʰwaːj/',
      translation: {
        en: 'buffalo',
        fr: 'buffle',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 4,
    kind: CONSONANT,
    symbol: 'ฅ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฅ',
      rtgs: 'kho',
      ipa: '/kʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'kh',
        ipa: '/kʰ/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'คน',
      rtgs: 'khon',
      ipa: '/kʰon/',
      translation: {
        en: 'person',
        fr: 'humain',
      },
    },
    obsolete: {
      en: 'ฅ kho khon is obsolete and replaced by ค kho khwai, which has identical phonetic values.',
      fr: 'ฅ kho khon est obsolète et a été remplacé par ค kho khwai, qui possède une valeur phonétique identique',
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 5,
    kind: CONSONANT,
    symbol: 'ฆ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฆ',
      rtgs: 'kho',
      ipa: '/kʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'kh',
        ipa: '/kʰ/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'k',
        ipa: '/k/',
        articulation: {
          manner: VELAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ระฆัง',
      rtgs: 'rákhang',
      ipa: '/rá.kʰaŋ/',
      translation: {
        en: 'bell',
        fr: 'cloche',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 6,
    kind: CONSONANT,
    symbol: 'ง',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ง',
      rtgs: 'ngo',
      ipa: '/ŋɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ng',
        ipa: '/ŋ/',
        articulation: {
          manner: VELAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'ng',
        ipa: '/ŋ/',
        articulation: {
          manner: VELAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'งู',
      rtgs: 'ngu',
      ipa: '/ŋuː/',
      translation: {
        en: 'snake',
        fr: 'serpent',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 7,
    kind: CONSONANT,
    symbol: 'จ',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'จ',
      rtgs: 'cho',
      ipa: '/tɕɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ch',
        ipa: '/tɕ/',
        articulation: {
          manner: ALVEOLO_PALATAL,
          place: AFFRICATE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'จาน',
      rtgs: 'chan',
      ipa: '/tɕaːn/',
      translation: {
        en: 'plate',
        fr: 'assiette',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 8,
    kind: CONSONANT,
    symbol: 'ฉ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ฉ',
      rtgs: 'chǒ',
      ipa: '/tɕʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ch',
        ipa: '/tɕʰ/',
        articulation: {
          manner: ALVEOLO_PALATAL,
          place: AFFRICATE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ฉิ่ง',
      rtgs: 'chìng',
      ipa: '/tɕʰìŋ/',
      translation: {
        en: 'cymbals',
        fr: 'cymbales',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 9,
    kind: CONSONANT,
    symbol: 'ช',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ช',
      rtgs: 'cho',
      ipa: '/tɕʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ch',
        ipa: '/tɕʰ/',
        articulation: {
          manner: ALVEOLO_PALATAL,
          place: AFFRICATE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ช้าง',
      rtgs: 'cháng',
      ipa: '/tɕʰáːŋ/',
      translation: {
        en: 'elephant',
        fr: 'éléphant',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 10,
    kind: CONSONANT,
    symbol: 'ซ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ซ',
      rtgs: 'cho',
      ipa: '/sɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 's',
        ipa: '/s/',
        articulation: {
          manner: ALVEOLAR,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'โซ่',
      rtgs: 'sô',
      ipa: '/sôː/',
      translation: {
        en: 'chain',
        fr: 'chaîne',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 11,
    kind: CONSONANT,
    symbol: 'ฌ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฌ',
      rtgs: 'cho',
      ipa: '/tɕʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ch',
        ipa: '/tɕʰ/',
        articulation: {
          manner: ALVEOLO_PALATAL,
          place: AFFRICATE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เฌอ',
      rtgs: 'choe',
      ipa: '/tɕʰɤː/',
      translation: {
        en: 'tree',
        fr: 'arbre',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 12,
    kind: CONSONANT,
    symbol: 'ญ',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ญ',
      rtgs: 'yo',
      ipa: '/jɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'y',
        ipa: '/j/',
        articulation: {
          manner: PALATAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'หญิง',
      rtgs: 'yǐng',
      ipa: '/jǐŋ/',
      translation: {
        en: 'woman',
        fr: 'femme',
      },
    },
    info: {
      en: 'The lower curves of the letter ญ are removed when certain letters are written below them.',
      fr: 'Les courbes inférieures de la lettre ญ sont supprimées lorsque certaines lettres sont écrites en dessous d’elles.',
    },
  },
  {
    id: 13,
    kind: CONSONANT,
    symbol: 'ฎ',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ฎ',
      rtgs: 'do',
      ipa: '/dɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'd',
        ipa: '/d/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ชฎา',
      rtgs: 'cháda',
      ipa: '/tɕʰá.daː/',
      translation: {
        en: 'thai headdress',
        fr: 'coiffe',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 14,
    kind: CONSONANT,
    symbol: 'ฏ',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ฏ',
      rtgs: 'to',
      ipa: '/tɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ปฏัก',
      rtgs: 'pàtàk',
      ipa: '/pà.tàk/',
      translation: {
        en: 'javelin',
        fr: 'aiguillon',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 15,
    kind: CONSONANT,
    symbol: 'ฐ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ฐ',
      rtgs: 'thǒ',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ฐาน',
      rtgs: 'thǎn',
      ipa: '/tʰǎːn/',
      translation: {
        en: 'pedestal',
        fr: 'piédestal',
      },
    },
    info: {
      en: 'The lower curves of the letter ฐ are removed when certain letters are written below them.',
      fr: 'Les courbes inférieures de la lettre ฐ sont supprimées lorsque certaines lettres sont écrites en dessous d’elles.',
    },
  },
  {
    id: 16,
    kind: CONSONANT,
    symbol: 'ฑ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฑ',
      rtgs: 'tho',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'มณโฑ',
      rtgs: 'Montho',
      ipa: '/mon.tʰoː/',
      translation: {
        en: 'Montho',
        fr: 'Montho',
      },
    },
    info: {
      en: 'Character from Ramayana',
      fr: 'Personnage de Ramayana',
    },
  },
  {
    id: 17,
    kind: CONSONANT,
    symbol: 'ฒ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฒ',
      rtgs: 'tho',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ผู้เฒ่า',
      rtgs: 'phû thâo',
      ipa: '/pʰûː.tʰâw/',
      translation: {
        en: 'elder',
        fr: 'aîné',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 18,
    kind: CONSONANT,
    symbol: 'ณ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ณ',
      rtgs: 'no',
      ipa: '/nɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เณร',
      rtgs: 'nen',
      ipa: '/neːn/',
      translation: {
        en: 'novice monk',
        fr: 'moine novice',
      },
    },
    info: {
      en: 'Called Samanera',
      fr: 'Appelé Samanera',
    },
  },
  {
    id: 19,
    kind: CONSONANT,
    symbol: 'ด',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ด',
      rtgs: 'do',
      ipa: '/dɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'd',
        ipa: '/d/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เด็ก',
      rtgs: 'dèk',
      ipa: '/dèk/',
      translation: {
        en: 'child',
        fr: 'enfant',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 20,
    kind: CONSONANT,
    symbol: 'ต',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ต',
      rtgs: 'to',
      ipa: '/tɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เต่า',
      rtgs: 'tào',
      ipa: '/tàw/',
      translation: {
        en: 'turtle',
        fr: 'tortue',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 21,
    kind: CONSONANT,
    symbol: 'ถ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ถ',
      rtgs: 'thǒ',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ถุง',
      rtgs: 'thǔng',
      ipa: '/tʰǔŋ/',
      translation: {
        en: 'bag',
        fr: 'sac',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 22,
    kind: CONSONANT,
    symbol: 'ท',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ท',
      rtgs: 'tho',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ทหาร',
      rtgs: 'tháhǎn',
      ipa: '/tʰá.hǎːn/',
      translation: {
        en: 'soldier',
        fr: 'soldat',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 23,
    kind: CONSONANT,
    symbol: 'ธ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ธ',
      rtgs: 'tho',
      ipa: '/tʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'th',
        ipa: '/tʰ/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ธง',
      rtgs: 'thong',
      ipa: '/tʰoŋ/',
      translation: {
        en: 'flag',
        fr: 'drapeau',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 24,
    kind: CONSONANT,
    symbol: 'น',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'น',
      rtgs: 'no',
      ipa: '/nɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'หนู',
      rtgs: 'nǔ',
      ipa: '/nǔː/',
      translation: {
        en: 'mouse',
        fr: 'souris',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 25,
    kind: CONSONANT,
    symbol: 'บ',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'บ',
      rtgs: 'bo',
      ipa: '/bɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'b',
        ipa: '/b/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ใบไม้',
      rtgs: 'baimái',
      ipa: '/baj.máːj/',
      translation: {
        en: 'leaf',
        fr: 'feuille',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 26,
    kind: CONSONANT,
    symbol: 'ป',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'ป',
      rtgs: 'po',
      ipa: '/pɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ปลา',
      rtgs: 'pla',
      ipa: '/plaː/',
      translation: {
        en: 'fish',
        fr: 'poisson',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 27,
    kind: CONSONANT,
    symbol: 'ผ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ผ',
      rtgs: 'phǒ',
      ipa: '/pʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ph',
        ipa: '/pʰ/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ผึ้ง',
      rtgs: 'phûeng',
      ipa: '/pʰɯ̂ŋ/',
      translation: {
        en: 'bee',
        fr: 'abeille',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 28,
    kind: CONSONANT,
    symbol: 'ฝ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ฝ',
      rtgs: 'fǒ',
      ipa: '/fɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'f',
        ipa: '/f/',
        articulation: {
          manner: LABIO_DENTAL,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ฝา',
      rtgs: 'fǎ',
      ipa: '/fǎː/',
      translation: {
        en: 'lid',
        fr: 'couvercle',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 29,
    kind: CONSONANT,
    symbol: 'พ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'พ',
      rtgs: 'pho',
      ipa: '/pʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ph',
        ipa: '/pʰ/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'พาน',
      rtgs: 'phan',
      ipa: '/pʰaːn/',
      translation: {
        en: 'offering tray',
        fr: 'plateau à offrandes',
      },
    },
    info: {
      en: 'Phan is an artistically decorated tray with pedestal',
      fr: 'Phan est un plateau artistiquement décoré, muni d’un piédestal',
    },
  },
  {
    id: 30,
    kind: CONSONANT,
    symbol: 'ฟ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฟ',
      rtgs: 'fo',
      ipa: '/fɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'f',
        ipa: '/f/',
        articulation: {
          manner: LABIO_DENTAL,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ฟัน',
      rtgs: 'fan',
      ipa: '/fan/',
      translation: {
        en: 'tooth',
        fr: 'dent',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 31,
    kind: CONSONANT,
    symbol: 'ภ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ภ',
      rtgs: 'pho',
      ipa: '/pʰɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'ph',
        ipa: '/pʰ/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'p',
        ipa: '/p/',
        articulation: {
          manner: BILABIAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'สำเภา',
      rtgs: 'sǎmphao',
      ipa: '/sǎm.pʰaw/',
      translation: {
        en: 'junk boat',
        fr: 'jonque',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 32,
    kind: CONSONANT,
    symbol: 'ม',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ม',
      rtgs: 'mo',
      ipa: '/mɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'm',
        ipa: '/m/',
        articulation: {
          manner: BILABIAL,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'm',
        ipa: '/m/',
        articulation: {
          manner: BILABIAL,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ม้า',
      rtgs: 'má',
      ipa: '/máː/',
      translation: {
        en: 'horse',
        fr: 'cheval',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 33,
    kind: CONSONANT,
    symbol: 'ย',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ย',
      rtgs: 'yo',
      ipa: '/jɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'y',
        ipa: '/j/',
        articulation: {
          manner: PALATAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'i',
        ipa: '/j/',
        articulation: {
          manner: PALATAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ยักษ์',
      rtgs: 'yák',
      ipa: '/ják/',
      translation: {
        en: 'giant',
        fr: 'géant',
      },
    },
    info: {
      en: 'When ย ends a syllable, it is usually part of the vowel.',
      fr: 'Quand ย termine une syllable, il fait généralement parti de la voyelle',
    },
  },
  {
    id: 34,
    kind: CONSONANT,
    symbol: 'ร',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ร',
      rtgs: 'ro',
      ipa: '/rɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'r',
        ipa: '/r/',
        articulation: {
          manner: PALATAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: PALATAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เรือ',
      rtgs: 'ruea',
      ipa: '/rɯːa/',
      translation: {
        en: 'boat',
        fr: 'bateau',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 35,
    kind: CONSONANT,
    symbol: 'ล',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ล',
      rtgs: 'lo',
      ipa: '/lɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'l',
        ipa: '/l/',
        articulation: {
          manner: ALVEOLAR,
          place: LATERAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ลิง',
      rtgs: 'ling',
      ipa: '/liŋ/',
      translation: {
        en: 'monkey',
        fr: 'singe',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 36,
    kind: CONSONANT,
    symbol: 'ว',
    class: LOW,
    live: true,
    transcriptions: {
      thai: 'ว',
      rtgs: 'wo',
      ipa: '/wɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'w',
        ipa: '/w/',
        articulation: {
          manner: BILABIAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'o',
        ipa: '/w/',
        articulation: {
          manner: BILABIAL,
          place: APPROXIMANT,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'แหวน',
      rtgs: 'wǎen',
      ipa: '/wɛ̌ːn/',
      translation: {
        en: 'ring',
        fr: 'anneau',
      },
    },
    info: {
      en: 'When ว ends a syllable, it is always part of the vowel',
      fr: 'Quand ว termine une syllable, il est toujours associé de la voyelle',
    },
  },
  {
    id: 37,
    kind: CONSONANT,
    symbol: 'ศ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ศ',
      rtgs: 'sǒ',
      ipa: '/sɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 's',
        ipa: '/s/',
        articulation: {
          manner: ALVEOLAR,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ศาลา',
      rtgs: 'sǎla',
      ipa: '/sǎː.laː/',
      translation: {
        en: 'pavilion',
        fr: 'pavillon',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 38,
    kind: CONSONANT,
    symbol: 'ษ',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ษ',
      rtgs: 'sǒ',
      ipa: '/sɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 's',
        ipa: '/s/',
        articulation: {
          manner: ALVEOLAR,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'ฤๅษี',
      rtgs: 'ruesǐ',
      ipa: '/rɯː.sǐː/',
      translation: {
        en: 'hermit',
        fr: 'ermite',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 39,
    kind: CONSONANT,
    symbol: 'ส',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ส',
      rtgs: 'sǒ',
      ipa: '/sɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 's',
        ipa: '/s/',
        articulation: {
          manner: ALVEOLAR,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 't',
        ipa: '/t/',
        articulation: {
          manner: ALVEOLAR,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'เสือ',
      rtgs: 'sǔea',
      ipa: '/sɯ̌ːa/',
      translation: {
        en: 'tiger',
        fr: 'tigre',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 40,
    kind: CONSONANT,
    symbol: 'ห',
    class: HIGH,
    live: false,
    transcriptions: {
      thai: 'ห',
      rtgs: 'hǒ',
      ipa: '/hɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'h',
        ipa: '/h/',
        articulation: {
          manner: GLOTTAL,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'หีบ',
      rtgs: 'hìp',
      ipa: '/hìːp/',
      translation: {
        en: 'chest',
        fr: 'coffre',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 41,
    kind: CONSONANT,
    symbol: 'ฬ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฬ',
      rtgs: 'lo',
      ipa: '/lɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'l',
        ipa: '/l/',
        articulation: {
          manner: ALVEOLAR,
          place: LATERAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
      {
        position: FINAL,
        rtgs: 'n',
        ipa: '/n/',
        articulation: {
          manner: ALVEOLAR,
          place: NASAL,
          voicing: VOICED,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'จุฬา',
      rtgs: 'chùla',
      ipa: '/tɕù.laː/',
      translation: {
        en: 'kite',
        fr: 'cerf-volant',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
  {
    id: 42,
    kind: CONSONANT,
    symbol: 'อ',
    class: MID,
    live: false,
    transcriptions: {
      thai: 'อ',
      rtgs: 'o',
      ipa: '/ʔɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: '-',
        ipa: '/ʔ/',
        articulation: {
          manner: GLOTTAL,
          place: PLOSIVE,
          voicing: VOICELESS,
          aspiration: UNASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'อ่าง',
      rtgs: 'àng',
      ipa: '/àːŋ/',
      translation: {
        en: 'basin',
        fr: 'bassin',
      },
    },
    info: {
      en: 'อ is a special case in that at the beginning of a word it is used as a silent initial for syllables that start with a vowel',
      fr: 'อ est un cas particulier : au début d’un mot, il est utilisé comme consonne initiale muette pour les syllabes qui commencent par une voyelle',
    },
  },
  {
    id: 43,
    kind: CONSONANT,
    symbol: 'ฮ',
    class: LOW,
    live: false,
    transcriptions: {
      thai: 'ฮ',
      rtgs: 'ho',
      ipa: '/hɔː/',
    },
    position: [
      {
        position: INITIAL,
        rtgs: 'h',
        ipa: '/h/',
        articulation: {
          manner: GLOTTAL,
          place: FRICATIVE,
          voicing: VOICELESS,
          aspiration: ASPIRATED,
        },
      },
    ],
    exemple: {
      thai: 'นกฮูก',
      rtgs: 'nók hûk',
      ipa: '/nók.hûːk/',
      translation: {
        en: 'owl',
        fr: 'hiboux',
      },
    },
    info: {
      en: '',
      fr: '',
    },
  },
];
