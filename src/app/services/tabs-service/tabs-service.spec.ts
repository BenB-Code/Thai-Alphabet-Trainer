import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TabsService } from './tabs-service';
import { DataService } from '../data-service/data-service';

describe('TabsService', () => {
  let service: TabsService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(TabsService);
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tabsConfig', () => {
    it('should have 5 tabs', () => {
      expect(service.tabsConfig.length).toBe(5);
    });

    it('should have tab 0 (All) with all symbols sorted', () => {
      const tab = service.tabsConfig[0];

      expect(tab.tabSwitchConfig.id).toBe(0);
      expect(tab.tabSwitchConfig.label.text).toBe('buttons.all');
      expect(tab.payload).toEqual(dataService.allSymbolsSorted());
    });

    it('should have tab 1 (Consonants) with sorted consonants', () => {
      const tab = service.tabsConfig[1];

      expect(tab.tabSwitchConfig.id).toBe(1);
      expect(tab.tabSwitchConfig.label.text).toBe('app.consonants');
      expect(tab.payload).toEqual(dataService.consonantsSortedByCategory());
    });

    it('should have tab 2 (Vowels) with sorted vowels', () => {
      const tab = service.tabsConfig[2];

      expect(tab.tabSwitchConfig.id).toBe(2);
      expect(tab.tabSwitchConfig.label.text).toBe('app.vowels');
      expect(tab.payload).toEqual(dataService.vowelsSortedByCategory());
    });

    it('should have tab 3 (Numerals) with sorted numerals', () => {
      const tab = service.tabsConfig[3];

      expect(tab.tabSwitchConfig.id).toBe(4);
      expect(tab.tabSwitchConfig.label.text).toBe('app.numerals');
      expect(tab.payload).toEqual(dataService.numeralsSortedByCategory());
    });

    it('should have tab 4 (Diacritics) with sorted diacritics', () => {
      const tab = service.tabsConfig[4];

      expect(tab.tabSwitchConfig.id).toBe(5);
      expect(tab.tabSwitchConfig.label.text).toBe('app.diacritics');
      expect(tab.payload).toEqual(dataService.diacriticsSortedByCategory());
    });

    it('should have all tabs with letter-tab-switch-selector class', () => {
      service.tabsConfig.forEach(tab => {
        expect(tab.tabSwitchConfig.class).toBe('letter-tab-switch-selector');
      });
    });

    it('should have all tabs with display label true', () => {
      service.tabsConfig.forEach(tab => {
        expect(tab.tabSwitchConfig.label.display).toBeTrue();
      });
    });

    it('should have all tabs with icon display false', () => {
      service.tabsConfig.forEach(tab => {
        expect(tab.tabSwitchConfig.icon.display).toBeFalse();
      });
    });
  });

  describe('tabsSwitchConfig', () => {
    it('should have 5 switch configs', () => {
      expect(service.tabsSwitchConfig.length).toBe(5);
    });

    it('should extract tabSwitchConfig from each tab', () => {
      service.tabsSwitchConfig.forEach((switchConfig, index) => {
        expect(switchConfig).toEqual(service.tabsConfig[index].tabSwitchConfig);
      });
    });
  });
});
