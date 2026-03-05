import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { PronunciationSwitchSelector } from './pronunciation-switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { KANIT, SARABUN, SRIRACHA } from '../../shared/constants';

describe('PronunciationSwitchSelector', () => {
  let component: PronunciationSwitchSelector;
  let fixture: ComponentFixture<PronunciationSwitchSelector>;
  let appStoreService: AppStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronunciationSwitchSelector],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            thaiFont: signal(SARABUN),
            switchPronunciation: jasmine.createSpy('switchPronunciation'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PronunciationSwitchSelector);
    component = fixture.componentInstance;
    appStoreService = TestBed.inject(AppStoreService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 fonts in the list', () => {
    expect(component.pronunciationsList.length).toBe(3);
    expect(component.pronunciationsList[0].class).toBe(SARABUN);
    expect(component.pronunciationsList[1].class).toBe(KANIT);
    expect(component.pronunciationsList[2].class).toBe(SRIRACHA);
  });

  describe('activeId', () => {
    it('should call switchPronunciation with the correct font', () => {
      component.activeId(1);

      expect(appStoreService.switchPronunciation).toHaveBeenCalledWith(KANIT);
    });
  });

  describe('activePronunciationIndex', () => {
    it('should return the index of the active pronunciation', () => {
      expect(component['activePronunciationIndex']()).toBe(0);
    });

    it('should update when pronunciation changes', () => {
      (appStoreService.thaiFont as ReturnType<typeof signal>).set(SRIRACHA);

      expect(component['activePronunciationIndex']()).toBe(2);
    });
  });
});
