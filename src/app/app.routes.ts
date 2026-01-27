import { Routes } from '@angular/router';
import { Letters } from './features/letters/letters';
import { inject } from '@angular/core';
import { QuizService } from './services/quiz-service/quiz-service';

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
        const quizService = inject<QuizService>(QuizService);
        return !!quizService.quizSettings();
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
