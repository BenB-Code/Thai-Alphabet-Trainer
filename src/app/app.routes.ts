import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
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
