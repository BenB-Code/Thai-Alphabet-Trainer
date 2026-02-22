import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { FontSwitchSelector } from './font-switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { KANIT, SARABUN, SRIRACHA } from '../../shared/constants';

describe('FontSwitchSelector', () => {
  let component: FontSwitchSelector;
  let fixture: ComponentFixture<FontSwitchSelector>;
  let appStoreService: AppStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSwitchSelector],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            thaiFont: signal(SARABUN),
            switchFont: jasmine.createSpy('switchFont'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FontSwitchSelector);
    component = fixture.componentInstance;
    appStoreService = TestBed.inject(AppStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 fonts in the list', () => {
    expect(component.fontsList.length).toBe(3);
    expect(component.fontsList[0].class).toBe(SARABUN);
    expect(component.fontsList[1].class).toBe(KANIT);
    expect(component.fontsList[2].class).toBe(SRIRACHA);
  });

  describe('activeId', () => {
    it('should call switchFont with the correct font', () => {
      component.activeId(1);

      expect(appStoreService.switchFont).toHaveBeenCalledWith(KANIT);
    });
  });

  describe('activeFontIndex', () => {
    it('should return the index of the active font', () => {
      expect(component['activeFontIndex']()).toBe(0);
    });

    it('should update when font changes', () => {
      (appStoreService.thaiFont as ReturnType<typeof signal>).set(SRIRACHA);

      expect(component['activeFontIndex']()).toBe(2);
    });
  });
});
