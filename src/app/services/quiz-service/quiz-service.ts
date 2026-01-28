import { Injectable, signal } from '@angular/core';
import { QuizFormat } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  isValid = signal<boolean>(false);
  quizSettings = signal<QuizFormat | null>(null);

  generateList(): void {
    console.log(this.quizSettings());
  }
  //
  // randomiseList(list) {
  //   const newList = new Set();
  //   const quantity = this.quizSettings()?.questions || 1;
  //   const selected = this.quizSettings()?.selected || new Set();
  //
  //   for (let i = 0; i < quantity; i++) {
  //     const randomIndex = Math.floor(Math.random() * selected.size);
  //     newList.add(selected.keys(randomIndex));
  //   }
  // }
}
