import { Routes } from '@angular/router';
import { Letters } from './features/letters/letters';

export const routes: Routes = [
  {
    path: '',
    component: Letters,
  },
  {
    path: 'quiz',
    loadComponent: () => import('./features/quiz/quiz').then(m => m.Quiz),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
