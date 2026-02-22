import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersCategoryContainer } from './letters-category-container';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { MID } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';

describe('LettersCategoryContainer', () => {
  let component: LettersCategoryContainer;
  let fixture: ComponentFixture<LettersCategoryContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCategoryContainer, TranslateModule.forRoot()],
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
            selected: signal([]),
            toggleLetter: jasmine.createSpy(),
            selectByCategory: jasmine.createSpy(),
            deselectByCategory: jasmine.createSpy(),
            toggleByCategory: jasmine.createSpy(),
            getCountByCategory: jasmine.createSpy().and.returnValue(0),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersCategoryContainer);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('category', MID);
    fixture.componentRef.setInput('list', THAI_CONSONANTS.slice(0, 3));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleOpen', () => {
    it('should close when open', () => {
      component.toggleOpen();

      expect(component.isOpen()).toBeFalse();
    });

    it('should reopen after toggling twice', () => {
      component.toggleOpen();
      component.toggleOpen();

      expect(component.isOpen()).toBeTrue();
    });
  });

  describe('color', () => {
    it('should compute color from the category', () => {
      expect(component.color()).toBeTruthy();
    });
  });
});
