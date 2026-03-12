import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuizCard } from './quiz-card';
import { AppStoreService } from '../../store/app/app-store.service';
import { QuizStoreService } from '../../store/quiz/quiz-store.service';
import { CONSONANTS_DATA } from '../../data';
import { EN, RTGS, SARABUN, THAI } from '../../shared/constants';

describe('QuizCard', () => {
  let component: QuizCard;
  let fixture: ComponentFixture<QuizCard>;
  let quizStoreService: QuizStoreService;

  const mockCard = { ...CONSONANTS_DATA[0], display: THAI };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCard, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            thaiFont: signal(SARABUN),
            pronunciation: signal(RTGS),
            language: signal(EN),
          },
        },
        {
          provide: QuizStoreService,
          useValue: {
            currentCard: signal(mockCard),
            isFlipped: signal(false),
            cardAnimation: signal(null),
            toggleFlip: jasmine.createSpy('toggleFlip'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCard);
    component = fixture.componentInstance;
    quizStoreService = TestBed.inject(QuizStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('flip', () => {
    it('should delegate to quizStoreService.toggleFlip', () => {
      component.flip();

      expect(quizStoreService.toggleFlip).toHaveBeenCalled();
    });
  });

  describe('activePronunciation', () => {
    it('should return the current pronunciation from appStoreService', () => {
      expect(component.activePronunciation()).toBe(RTGS);
    });
  });
});
