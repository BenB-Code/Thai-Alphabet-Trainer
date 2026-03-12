import { LATIN, MIXED, THAI } from '../display-options.constants';
import { DisplayType } from '../../types';

export const QUIZ_FORM_CONF = {
  questions: {
    min: 1,
    max: 500,
  },
  delay: [2, 3, 5, 10, 0],
  autoFlip: [false, true],
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
