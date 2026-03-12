import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersCard } from './letters-card';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { CONSONANTS_DATA, VOWELS_DATA } from '../../data';
import { ThaiSymbolType } from '../../shared/types';
import { EN, RTGS, SARABUN } from '../../shared/constants';

describe('LettersCard', () => {
  let component: LettersCard;
  let fixture: ComponentFixture<LettersCard>;
  let selectionStoreService: SelectionStoreService;
  const testConsonant = CONSONANTS_DATA[0];
  const selectedSignal = signal<ThaiSymbolType[]>([]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCard, TranslateModule.forRoot()],
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
          provide: SelectionStoreService,
          useValue: {
            selected: selectedSignal,
            toggleLetter: jasmine.createSpy('toggleLetter'),
          },
        },
      ],
    }).compileComponents();

    selectedSignal.set([]);
    fixture = TestBed.createComponent(LettersCard);
    component = fixture.componentInstance;
    selectionStoreService = TestBed.inject(SelectionStoreService);
    fixture.componentRef.setInput('letter', testConsonant);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectLetter', () => {
    it('should delegate to selectionStoreService.toggleLetter', () => {
      component.selectLetter();

      expect(selectionStoreService.toggleLetter).toHaveBeenCalledWith(testConsonant);
    });
  });

  describe('isActive', () => {
    it('should return false when letter is not selected', () => {
      expect(component.isActive()).toBeFalse();
    });

    it('should return true when letter is selected (same id + kind)', () => {
      selectedSignal.set([testConsonant]);

      expect(component.isActive()).toBeTrue();
    });

    it('should return false for same id but different kind', () => {
      const vowelWithSameId = { ...VOWELS_DATA[0], id: testConsonant.id };
      selectedSignal.set([vowelWithSameId]);

      expect(component.isActive()).toBeFalse();
    });
  });
});
