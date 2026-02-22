import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersCard } from './letters-card';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { THAI_CONSONANTS, THAI_VOWELS } from '../../data';
import { ThaiCharacter } from '../../shared/types';

describe('LettersCard', () => {
  let component: LettersCard;
  let fixture: ComponentFixture<LettersCard>;
  let selectionStoreService: SelectionStoreService;
  const testConsonant = THAI_CONSONANTS[0];
  const selectedSignal = signal<ThaiCharacter[]>([]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCard, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            thaiFont: signal('sarabun'),
            language: signal('en'),
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
      const vowelWithSameId = { ...THAI_VOWELS[0], id: testConsonant.id };
      selectedSignal.set([vowelWithSameId]);

      expect(component.isActive()).toBeFalse();
    });
  });
});
