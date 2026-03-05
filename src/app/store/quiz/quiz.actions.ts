import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CardAnimationType, DisplayType, ThaiSymbolType } from '../../shared/types';

export const QuizSettingsActions = createActionGroup({
  source: 'Quiz Settings',
  events: {
    'Update Display': props<{ display: DisplayType }>(),
    'Update Questions': props<{ questions: number }>(),
    'Update Delay': props<{ delay: number }>(),
    'Update Selected': props<{ selected: ThaiSymbolType[] }>(),
    'Set Randomized List': props<{ randomized: ThaiSymbolType[] }>(),
  },
});

export const QuizSessionActions = createActionGroup({
  source: 'Quiz Session',
  events: {
    Start: emptyProps(),
    Reset: emptyProps(),
    Next: emptyProps(),
    Previous: emptyProps(),
    'Toggle Flip': emptyProps(),
    'Toggle Pause': emptyProps(),
    'Set Index': props<{ index: number }>(),
    'Set Animation': props<{ animation: CardAnimationType }>(),
    Finish: emptyProps(),
    'Timer Expired': emptyProps(),
  },
});
