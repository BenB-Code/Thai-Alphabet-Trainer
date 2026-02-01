import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { FINISHED, IN_PROGRESS, LATIN, MIXED, PAUSE, QUIZ_FORM_BASE_CONF, THAI } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateQuizList', () => {
    it('should generate an random list based on quantity', () => {
      service.quizSettings.update(() => ({
        display: LATIN,
        questions: 22,
        selected: THAI_CONSONANTS,
        delay: QUIZ_FORM_BASE_CONF.delay[2],
        randomized: [],
      }));

      expect(service.quizSettings().randomized.length).toEqual(0);
      service.generateQuizList();

      expect(service.quizSettings().randomized.length).toEqual(22);
      expect(service.quizSettings().randomized[0].display).toEqual(LATIN);
    });
  });

  describe('generateDisplayType', () => {
    it('should return the same display setting', () => {
      service.generateDisplayType();

      expect(service.generateDisplayType()).toBe(service.quizSettings().display);
    });

    it('should return the randomly selected display setting', () => {
      service.quizSettings.update(set => ({
        ...set,
        display: MIXED,
      }));
      spyOn(Math, 'random').and.returnValues(0.4, 0.7);

      expect(service.generateDisplayType()).toContain(LATIN);
      expect(service.generateDisplayType()).toContain(THAI);
    });
  });

  describe('incrProgress', () => {
    beforeEach(() => {
      service.generateQuizList();
    });

    it('should update canGoForward, canGoBack and index', () => {
      service.index.update(() => 5);

      service.incrProgress();

      expect(service.canGoBack()).toEqual(true);
      expect(service.canGoForward()).toEqual(true);
      expect(service.index()).toEqual(6);
    });

    it('should update state', () => {
      service.index.update(() => service.quizSettings().questions - 2);

      service.incrProgress();

      expect(service.state()).toEqual(FINISHED);
      expect(service.canGoBack()).toEqual(true);
      expect(service.canGoForward()).toEqual(true);
      expect(service.index()).toEqual(9);
    });

    it('should update canGoForward', () => {
      service.index.update(() => 999);

      service.incrProgress();

      expect(service.canGoForward()).toEqual(false);
    });
  });

  describe('decrProgress', () => {
    it('should update index and canGoBack', () => {
      service.index.update(() => 5);
      service.decrProgress();

      expect(service.canGoBack()).toEqual(true);
      expect(service.index()).toEqual(4);
    });

    it('should update canGoBack', () => {
      service.index.update(() => 1);
      service.decrProgress();

      expect(service.canGoBack()).toEqual(false);
      expect(service.index()).toEqual(0);
    });
  });

  describe('toggleProgressState', () => {
    it('should change state to PAUSE', () => {
      service.toggleProgressState();

      expect(service.state()).toEqual(PAUSE);
    });

    it('should change state to IN_PROGRESS', () => {
      service.toggleProgressState();
      service.toggleProgressState();

      expect(service.state()).toEqual(IN_PROGRESS);
    });
  });

  describe('resetQuiz', () => {
    it('should set the default value', () => {
      service.isValid.update(() => true);
      service.canGoBack.update(() => true);
      service.canGoForward.update(() => false);
      service.index.update(() => 12);
      service.state.update(() => PAUSE);

      service.resetQuiz();

      expect(service.isValid()).toEqual(false);
      expect(service.canGoBack()).toEqual(false);
      expect(service.canGoForward()).toEqual(true);
      expect(service.index()).toEqual(0);
      expect(service.state()).toEqual(IN_PROGRESS);
    });
  });
});
