import { Component, inject } from '@angular/core';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { JsonPipe } from '@angular/common';
import { Card } from '../../common/card/card';

@Component({
  selector: 'app-quiz-card',
  imports: [JsonPipe, Card],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.scss',
})
export class QuizCard {
  protected readonly quizStoreService = inject(QuizStoreService);
}
