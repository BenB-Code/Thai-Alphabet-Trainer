import { Injectable, signal } from '@angular/core';
import { QuizFormat, ThaiCharacter } from '../../shared/models';
import { LATIN, MIXED, QUIZ_FORM_BASE_CONF, THAI } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class QuizPreparationService {
  quizSettings = signal<QuizFormat>({
    display: LATIN,
    questions: 10,
    selected: [],
    delay: QUIZ_FORM_BASE_CONF.delay[2],
    randomized: [],
  });
  isValid = signal<boolean>(false);

  generateQuizList() {
    const quantity = this.quizSettings().questions;
    const selected = this.quizSettings().selected;
    const newList: ThaiCharacter[] = [];

    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * selected.length);
      console.log(randomIndex);
      const letter = {
        ...selected[randomIndex],
        display: this.generateDisplayType(),
      };
      newList.push(letter);
    }

    this.quizSettings.update(setting => ({ ...setting, randomized: newList }));
  }

  private generateDisplayType() {
    if (this.quizSettings()?.display === MIXED) {
      return Math.random() < 0.5 ? LATIN : THAI;
    }
    return this.quizSettings()?.display;
  }
}
