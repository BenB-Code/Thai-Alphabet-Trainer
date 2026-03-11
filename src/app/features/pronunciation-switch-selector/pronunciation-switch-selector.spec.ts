import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal, WritableSignal } from '@angular/core';
import { PronunciationSwitchSelector } from './pronunciation-switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { IPA, RTGS } from '../../shared/constants';
import { PronunciationsType } from '../../shared/types';

describe('PronunciationSwitchSelector', () => {
  let component: PronunciationSwitchSelector;
  let fixture: ComponentFixture<PronunciationSwitchSelector>;
  let appStoreService: AppStoreService;
  let pronunciationSignal: WritableSignal<PronunciationsType>;

  beforeEach(async () => {
    pronunciationSignal = signal<PronunciationsType>(RTGS);

    await TestBed.configureTestingModule({
      imports: [PronunciationSwitchSelector],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            isDarkThemeActive: signal(false),
            pronunciation: pronunciationSignal,
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

  it('should have 2 pronunciations in the list', () => {
    expect(component.pronunciationsList.length).toBe(2);
    expect(component.pronunciationsList[0].class).toBe(RTGS);
    expect(component.pronunciationsList[1].class).toBe(IPA);
  });

  describe('activeId', () => {
    it('should call switchPronunciation with RTGS for id 0', () => {
      component.activeId(0);

      expect(appStoreService.switchPronunciation).toHaveBeenCalledWith(RTGS);
    });

    it('should call switchPronunciation with IPA for id 1', () => {
      component.activeId(1);

      expect(appStoreService.switchPronunciation).toHaveBeenCalledWith(IPA);
    });
  });

  describe('activePronunciationIndex', () => {
    it('should return 0 for RTGS', () => {
      expect(component['activePronunciationIndex']()).toBe(0);
    });

    it('should return 1 when pronunciation is IPA', () => {
      pronunciationSignal.set(IPA);

      expect(component['activePronunciationIndex']()).toBe(1);
    });
  });
});
