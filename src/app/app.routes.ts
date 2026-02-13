import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { QuizPreparationService } from './services/quiz-preparation-service/quiz-preparation-service';
import { FINISHED } from './shared/constants';
import { QuizSessionService } from './services/quiz-session-service/quiz-session-service';
import { Letters } from './rework/features/letters/letters';

export const routes: Routes = [
  {
    path: '',
    component: Letters,
  },
  {
    path: 'quiz',
    loadComponent: () => import('./features/quiz/quiz').then(m => m.Quiz),
    canMatch: [
      () => {
        const prepService = inject<QuizPreparationService>(QuizPreparationService);
        return prepService.isValid();
      },
    ],
  },
  {
    path: 'result',
    loadComponent: () => import('./features/quiz-result/quiz-result').then(m => m.QuizResult),
    canMatch: [
      () => {
        const sessionService = inject<QuizSessionService>(QuizSessionService);
        return sessionService.progressState() === FINISHED;
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
