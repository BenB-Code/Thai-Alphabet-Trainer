import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Letters } from './rework/features/letters/letters';
import { QuizStoreService } from './rework/store/quiz/quiz-store.service';

export const routes: Routes = [
  {
    path: '',
    component: Letters,
  },
  {
    path: 'quiz',
    loadComponent: () => import('./rework/features/quiz/quiz').then(m => m.Quiz),
    canMatch: [
      () => {
        const quizStoreService = inject<QuizStoreService>(QuizStoreService);
        return quizStoreService.isQuizValid();
      },
    ],
  },
  {
    path: 'result',
    loadComponent: () => import('./features/quiz-result/quiz-result').then(m => m.QuizResult),
    canMatch: [
      () => {
        const quizStoreService = inject<QuizStoreService>(QuizStoreService);
        return quizStoreService.isFinished();
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
