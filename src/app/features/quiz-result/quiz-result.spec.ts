import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResult } from './quiz-result';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { TypeClassColorsMap } from '../../shared/constants';

describe('QuizResult', () => {
  let component: QuizResult;
  let fixture: ComponentFixture<QuizResult>;

  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    navigationServiceSpy = jasmine.createSpyObj<NavigationService>('NavigationService', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [QuizResult, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: NavigationService,
          useValue: navigationServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getColor', () => {
    it('should get right color based on class', () => {
      const res = component.getColor(THAI_CONSONANTS[0]);

      expect(res).toEqual(TypeClassColorsMap[THAI_CONSONANTS[0].class]);
    });

    it('should get right color based on type', () => {
      const res = component.getColor(THAI_VOWELS[0]);

      expect(res).toEqual(TypeClassColorsMap[THAI_VOWELS[0].type]);
    });
  });

  it('should redirect correctly', () => {
    component.redirect();

    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
  });
});
