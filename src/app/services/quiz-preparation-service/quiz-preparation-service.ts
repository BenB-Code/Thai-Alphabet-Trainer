import { computed, inject, Injectable, signal } from '@angular/core';
import { QuizFormat, ThaiCharacter } from '../../shared/models';
import { LATIN, MIXED, QUIZ_FORM_BASE_CONF, THAI } from '../../shared/constants';
import { LetterUtilsService } from '../letter-utils-service/letter-utils-service';

@Injectable({
  providedIn: 'root',
})
export class QuizPreparationService {
  private readonly letterUtilsService = inject(LetterUtilsService);

  quizSettings = signal<QuizFormat>({
    display: THAI,
    questions: 10,
    selected: [],
    delay: QUIZ_FORM_BASE_CONF.delay[2],
    randomized: [],
  });
  isValid = signal<boolean>(false);

  isQuizValid = computed(() => {
    if (!this.quizSettings().display) return false;
    if (
      !this.quizSettings().questions ||
      this.quizSettings().questions < QUIZ_FORM_BASE_CONF.questions.min ||
      this.quizSettings().questions > QUIZ_FORM_BASE_CONF.questions.max
    )
      return false;
    if (this.quizSettings().selected.length <= 0) return false;
    if (!this.quizSettings().delay) return false;
    return true;
  });

  generateQuizList() {
    const { questions, selected, display } = this.quizSettings();
    const base = Math.floor(questions / selected.length);
    const remainder = questions % selected.length;
    const shuffledIndexes = this.shuffled([...selected.keys()]);

    const newList: ThaiCharacter[] = [];
    for (let i = 0; i < selected.length; i++) {
      const count = base + (shuffledIndexes.indexOf(i) < remainder ? 1 : 0);
      const displays = this.distributeDisplayTypes(count, display);
      for (let j = 0; j < count; j++) {
        newList.push({ ...selected[i], display: displays[j] });
      }
    }

    this.quizSettings.update(s => ({ ...s, randomized: this.shuffled(newList) }));
  }

  getCountByCategory(category: string): number {
    return this.quizSettings().selected.filter(letter => {
      if (this.letterUtilsService.isVowel(letter)) {
        return letter.type === category;
      } else if (this.letterUtilsService.isConsonant(letter)) {
        return letter.class === category;
      }
      return false;
    }).length;
  }

  private distributeDisplayTypes(count: number, display: string) {
    if (display !== MIXED) {
      return new Array(count).fill(display);
    }
    const half = Math.floor(count / 2);
    const types = [...new Array(half).fill(LATIN), ...new Array(count - half).fill(THAI)];
    return this.shuffled(types);
  }

  private shuffled<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
