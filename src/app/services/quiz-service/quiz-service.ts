import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  isValid = signal<boolean>(false);
  formValues = signal({});
}
