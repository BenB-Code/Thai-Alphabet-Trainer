import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterDetailInfo } from './letter-detail-info';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { EN, FINAL, MEDIAL } from '../../constants';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../../data';
import { ThaiVowel } from '../../models';

describe('LetterDetailInfo', () => {
  let component: LetterDetailInfo;
  let fixture: ComponentFixture<LetterDetailInfo>;

  beforeEach(async () => {
    const i18nServiceSpy = jasmine.createSpyObj('i18nService', ['activeLanguage'], {
      activeLanguage: jasmine.createSpy().and.returnValue(EN),
    });

    await TestBed.configureTestingModule({
      imports: [LetterDetailInfo, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: I18nService,
          useValue: i18nServiceSpy,
        },
      ],
    }).compileComponents();
  });

  describe('with consonant', () => {
    beforeEach(async () => {
      fixture = TestBed.createComponent(LetterDetailInfo);
      fixture.componentRef.setInput('letter', THAI_CONSONANTS[0]);
      component = fixture.componentInstance;
      await fixture.whenStable();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display the trad paragraph', () => {
      const trad = fixture.nativeElement.querySelector('.trad');

      expect(trad).toBeTruthy();
      expect(trad.textContent).toContain(THAI_CONSONANTS[0].exampleWord.roman);
    });

    it('should display consonant class via quiz-info-line', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');

      expect(infoLines.length).toBe(1);
    });

    it('should not display vowel info', () => {
      const trad = fixture.nativeElement.querySelector('.trad');
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');

      expect(trad).toBeTruthy();
      expect(infoLines.length).toBe(1);
    });
  });

  describe('with vowel', () => {
    beforeEach(async () => {
      fixture = TestBed.createComponent(LetterDetailInfo);
      fixture.componentRef.setInput('letter', THAI_VOWELS[0]);
      component = fixture.componentInstance;
      await fixture.whenStable();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should not display trad paragraph', () => {
      const trad = fixture.nativeElement.querySelector('.trad');

      expect(trad).toBeFalsy();
    });

    it('should display vowel type and position via quiz-info-lines', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');

      expect(infoLines.length).toBe(2);
    });

    it('should render the vowel type in first quiz-info-line', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');
      const typeLabel = infoLines[0].querySelector('.label');

      expect(typeLabel).toBeTruthy();
      expect(typeLabel.textContent).toContain(':');
    });

    it('should render the vowel position in second quiz-info-line', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');
      const posLabel = infoLines[1].querySelector('.label');

      expect(posLabel).toBeTruthy();
      expect(posLabel.textContent).toContain(':');
    });
  });

  describe('with vowel having both MEDIAL and FINAL positions', () => {
    let vowelWithBothPositions: ThaiVowel;

    beforeEach(async () => {
      vowelWithBothPositions = THAI_VOWELS.find(v => v.position.includes(MEDIAL) && v.position.includes(FINAL))!;

      fixture = TestBed.createComponent(LetterDetailInfo);
      fixture.componentRef.setInput('letter', vowelWithBothPositions);
      component = fixture.componentInstance;
      await fixture.whenStable();
    });

    it('should display both positions separated by pipe', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');
      const positionLine = infoLines[1];

      expect(positionLine.textContent).toContain('|');
    });

    it('should display type and position info-lines', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');

      expect(infoLines.length).toBe(2);
    });
  });

  describe('with vowel having only FINAL position', () => {
    let vowelFinalOnly: ThaiVowel;

    beforeEach(async () => {
      vowelFinalOnly = THAI_VOWELS.find(v => v.position.includes(FINAL) && !v.position.includes(MEDIAL))!;

      fixture = TestBed.createComponent(LetterDetailInfo);
      fixture.componentRef.setInput('letter', vowelFinalOnly);
      component = fixture.componentInstance;
      await fixture.whenStable();
    });

    it('should not display pipe separator', () => {
      const infoLines = fixture.nativeElement.querySelectorAll('app-quiz-info-line');
      const positionLine = infoLines[1];

      expect(positionLine.textContent).not.toContain('|');
    });
  });
});
