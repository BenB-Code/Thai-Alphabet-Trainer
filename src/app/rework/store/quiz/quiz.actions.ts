import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { DisplayType, ThaiCharacter } from '../../../shared/models';

export const QuizSettingsActions = createActionGroup({
  source: 'Quiz Settings',
  events: {
    'Update Display': props<{ display: DisplayType }>(),
    'Update Questions': props<{ questions: number }>(),
    'Update Delay': props<{ delay: number }>(),
    'Update Selected': props<{ selected: ThaiCharacter[] }>(),
    'Set Randomized List': props<{ randomized: ThaiCharacter[] }>(),
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
    'Set Animation': props<{ animation: string | null }>(),
    Finish: emptyProps(),
    'Timer Expired': emptyProps(),
  },
});
