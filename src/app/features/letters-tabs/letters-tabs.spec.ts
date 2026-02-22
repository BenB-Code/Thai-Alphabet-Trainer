import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersTabs } from './letters-tabs';
import { AppStoreService } from '../../store/app/app-store.service';
import { SelectionStoreService } from '../../store/selection/selection-store.service';
import { TabsService } from '../../services/tabs-service/tabs-service';

describe('LettersTabs', () => {
  let component: LettersTabs;
  let fixture: ComponentFixture<LettersTabs>;

  const mockTabsConfig = [
    { tabSwitchConfig: { id: 0 }, payload: { mid: [], high: [] } },
    { tabSwitchConfig: { id: 1 }, payload: { mid: [] } },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersTabs, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            activeTab: signal(0),
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
        {
          provide: TabsService,
          useValue: { tabsConfig: mockTabsConfig },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('tabEntries', () => {
    it('should map tabsConfig to entries with id and categories', () => {
      const entries = component['tabEntries']();

      expect(entries.length).toBe(2);
      expect(entries[0].id).toBe(0);
      expect(entries[0].categories.length).toBe(2);
      expect(entries[1].id).toBe(1);
    });
  });
});
