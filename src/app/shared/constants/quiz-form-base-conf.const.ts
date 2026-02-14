import { DisplayType } from '../models';
import { LATIN, MIXED, THAI } from './letters.const';

export const QUIZ_FORM_BASE_CONF = {
  questions: {
    min: 1,
    max: 500,
  },
  delay: [2, 3, 5, 10, 0],
  display: [
    {
      value: THAI as DisplayType,
      label: `quiz.${THAI}`,
    },
    {
      value: LATIN as DisplayType,
      label: `quiz.${LATIN}`,
    },
    {
      value: MIXED as DisplayType,
      label: `quiz.${MIXED}`,
    },
  ],
};
