import { Injectable, signal } from '@angular/core';
import { QuizFormat, ThaiLetter } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  isValid = signal<boolean>(false);
  formValues = signal<QuizFormat | undefined>(undefined);
  list = signal<ThaiLetter[]>;
}
