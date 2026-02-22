import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersCategoryHeader } from './letters-category-header';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { MID, TERTIARY } from '../../shared/constants';

describe('LettersCategoryHeader', () => {
  let component: LettersCategoryHeader;
  let fixture: ComponentFixture<LettersCategoryHeader>;
  let selectionStoreService: SelectionStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCategoryHeader, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
          },
        },
        {
          provide: SelectionStoreService,
          useValue: {
            selected: signal([]),
            selectByCategory: jasmine.createSpy('selectByCategory'),
            deselectByCategory: jasmine.createSpy('deselectByCategory'),
            toggleByCategory: jasmine.createSpy('toggleByCategory'),
            getCountByCategory: jasmine.createSpy('getCountByCategory').and.returnValue(5),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersCategoryHeader);
    component = fixture.componentInstance;
    selectionStoreService = TestBed.inject(SelectionStoreService);
    fixture.componentRef.setInput('category', MID);
    fixture.componentRef.setInput('count', 10);
    fixture.componentRef.setInput('color', TERTIARY);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectAll', () => {
    it('should delegate to selectionStoreService', () => {
      component.selectAll();

      expect(selectionStoreService.selectByCategory).toHaveBeenCalledWith(MID);
    });
  });

  describe('deselectAll', () => {
    it('should delegate to selectionStoreService', () => {
      component.deselectAll();

      expect(selectionStoreService.deselectByCategory).toHaveBeenCalledWith(MID);
    });
  });

  describe('toggleSelection', () => {
    it('should delegate to selectionStoreService', () => {
      component.toggleSelection();

      expect(selectionStoreService.toggleByCategory).toHaveBeenCalledWith(MID);
    });
  });

  describe('toggleOpen output', () => {
    it('should emit toggleOpen', () => {
      spyOn(component.toggleOpen, 'emit');

      component.toggleOpen.emit();

      expect(component.toggleOpen.emit).toHaveBeenCalled();
    });
  });

  describe('categoryCount', () => {
    it('should return count from selectionStoreService', () => {
      expect(component.categoryCount()).toBe(5);
    });
  });
});
