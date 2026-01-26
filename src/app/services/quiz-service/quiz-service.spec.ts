import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz-service';
import { provideZonelessChangeDetection } from '@angular/core';

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
});
