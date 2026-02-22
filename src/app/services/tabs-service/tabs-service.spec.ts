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
    it('should have 3 tabs', () => {
      expect(service.tabsConfig.length).toBe(3);
    });

    it('should have tab 0 (All) with all letters', () => {
      const tab = service.tabsConfig[0];

      expect(tab.tabSwitchConfig.id).toBe(0);
      expect(tab.tabSwitchConfig.label.text).toBe('buttons.all');
      expect(tab.payload).toEqual(dataService.getAll());
    });

    it('should have tab 1 (Consonants) with sorted consonants', () => {
      const tab = service.tabsConfig[1];

      expect(tab.tabSwitchConfig.id).toBe(1);
      expect(tab.tabSwitchConfig.label.text).toBe('app.consonants');
      expect(tab.payload).toEqual(dataService.getAllConsonantsSorted());
    });

    it('should have tab 2 (Vowels) with sorted vowels', () => {
      const tab = service.tabsConfig[2];

      expect(tab.tabSwitchConfig.id).toBe(2);
      expect(tab.tabSwitchConfig.label.text).toBe('app.vowels');
      expect(tab.payload).toEqual(dataService.getAllVowelsSorted());
    });
  });

  describe('tabsSwitchConfig', () => {
    it('should have 3 switch configs', () => {
      expect(service.tabsSwitchConfig.length).toBe(3);
    });

    it('should extract tabSwitchConfig from each tab', () => {
      service.tabsSwitchConfig.forEach((switchConfig, index) => {
        expect(switchConfig).toEqual(service.tabsConfig[index].tabSwitchConfig);
      });
    });
  });
});
