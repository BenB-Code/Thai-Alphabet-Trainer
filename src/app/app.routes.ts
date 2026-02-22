import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Letters } from './features/letters/letters';
import { QuizStoreService } from './store/quiz/quiz-store.service';

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
        const quizStoreService = inject<QuizStoreService>(QuizStoreService);
        return quizStoreService.isQuizValid();
      },
    ],
  },
  {
    path: 'result',
    loadComponent: () => import('./features/result/result').then(m => m.Result),
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
