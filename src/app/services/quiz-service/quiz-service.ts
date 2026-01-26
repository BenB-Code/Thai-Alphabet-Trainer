import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  isValid = signal<boolean>(false);

  baseValues = {
    questions: {
      min: 1,
      max: 500,
    },
    delayOptions: [2, 3, 5, 10],
    displayOptions: [
      {
        value: 'roman',
        label: 'quiz.roman',
      },
      {
        value: 'thai',
        label: 'quiz.thai',
      },
      {
        value: 'thai',
        label: 'quiz.random',
      },
    ],
  };
}
