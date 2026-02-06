import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { QuizPreparationService } from './quiz-preparation-service';
import { LATIN, MIXED, THAI } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';

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

  it('generates a randomized list using the selected pool', () => {
    service.quizSettings.set({
      display: LATIN,
      questions: 2,
      selected: THAI_CONSONANTS.slice(0, 2),
      delay: 2,
      randomized: [],
    });

    spyOn(Math, 'random').and.returnValues(0, 0.9);

    service.generateQuizList();

    const randomized = service.quizSettings().randomized;
    expect(randomized.length).toEqual(2);
    expect(randomized[0].display).toEqual(LATIN);
    expect(randomized[1].display).toEqual(LATIN);
  });

  it('generates mixed display types when MIXED is selected', () => {
    service.quizSettings.set({
      display: MIXED,
      questions: 2,
      selected: THAI_CONSONANTS.slice(0, 2),
      delay: 2,
      randomized: [],
    });

    spyOn(Math, 'random').and.returnValues(0, 0.4, 0.9, 0.6);

    service.generateQuizList();

    const randomized = service.quizSettings().randomized;
    expect(randomized[0].display).toEqual(LATIN);
    expect(randomized[1].display).toEqual(THAI);
  });
});
