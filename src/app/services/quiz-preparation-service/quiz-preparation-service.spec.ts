import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { QuizPreparationService } from './quiz-preparation-service';
import { LATIN, MIXED, THAI } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';
import { ThaiCharacter } from '../../shared/models';

describe('QuizPreparationService', () => {
  let service: QuizPreparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(QuizPreparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateQuizList', () => {
    function countById(list: ThaiCharacter[]) {
      return list.reduce(
        (acc, item) => {
          acc[item.id] = (acc[item.id] || 0) + 1;
          return acc;
        },
        {} as Record<number, number>
      );
    }

    it('generates exactly the requested number of questions', () => {
      service.quizSettings.set({
        display: LATIN,
        questions: 28,
        selected: THAI_CONSONANTS.slice(0, 5),
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      expect(service.quizSettings().randomized.length).toEqual(28);
    });

    it('distributes letters fairly: each appears at least floor(q/n) and at most ceil(q/n) times', () => {
      const selected = THAI_CONSONANTS.slice(0, 5);
      service.quizSettings.set({
        display: LATIN,
        questions: 28,
        selected,
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      const counts = countById(service.quizSettings().randomized);
      const min = Math.floor(28 / 5); // 5
      const max = Math.ceil(28 / 5); // 6

      selected.forEach(letter => {
        expect(counts[letter.id]).toBeGreaterThanOrEqual(min);
        expect(counts[letter.id]).toBeLessThanOrEqual(max);
      });
    });

    it('distributes evenly when questions is a multiple of selected length', () => {
      const selected = THAI_CONSONANTS.slice(0, 4);
      service.quizSettings.set({
        display: LATIN,
        questions: 20,
        selected,
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      const counts = countById(service.quizSettings().randomized);

      selected.forEach(letter => {
        expect(counts[letter.id]).toEqual(5);
      });
    });

    it('assigns the correct display type in LATIN mode', () => {
      service.quizSettings.set({
        display: LATIN,
        questions: 10,
        selected: THAI_CONSONANTS.slice(0, 2),
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      service.quizSettings().randomized.forEach(item => {
        expect(item.display).toEqual(LATIN);
      });
    });

    it('assigns the correct display type in THAI mode', () => {
      service.quizSettings.set({
        display: THAI,
        questions: 10,
        selected: THAI_CONSONANTS.slice(0, 2),
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      service.quizSettings().randomized.forEach(item => {
        expect(item.display).toEqual(THAI);
      });
    });

    it('distributes display types fairly per letter in MIXED mode', () => {
      const selected = THAI_CONSONANTS.slice(0, 3);
      service.quizSettings.set({
        display: MIXED,
        questions: 30,
        selected,
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      const randomized = service.quizSettings().randomized;

      selected.forEach(letter => {
        const entries = randomized.filter(item => item.id === letter.id);
        const latinCount = entries.filter(e => e.display === LATIN).length;
        const thaiCount = entries.filter(e => e.display === THAI).length;
        expect(Math.abs(latinCount - thaiCount)).toBeLessThanOrEqual(1);
      });
    });

    it('only contains LATIN and THAI display types in MIXED mode', () => {
      service.quizSettings.set({
        display: MIXED,
        questions: 20,
        selected: THAI_CONSONANTS.slice(0, 5),
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      service.quizSettings().randomized.forEach(item => {
        expect([LATIN, THAI]).toContain(item.display!);
      });
    });

    it('works with a single selected letter', () => {
      service.quizSettings.set({
        display: LATIN,
        questions: 7,
        selected: THAI_CONSONANTS.slice(0, 1),
        delay: 2,
        randomized: [],
      });

      service.generateQuizList();

      const randomized = service.quizSettings().randomized;
      expect(randomized.length).toEqual(7);
      randomized.forEach(item => {
        expect(item.id).toEqual(THAI_CONSONANTS[0].id);
      });
    });
  });
});
