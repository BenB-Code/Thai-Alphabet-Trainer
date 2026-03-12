import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { Tones } from './tones';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { TONES_DATA } from '../../../../data';
import { RTGS, SARABUN } from '../../../../shared/constants';

describe('Tones', () => {
  let component: Tones;
  let fixture: ComponentFixture<Tones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tones],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            pronunciation: signal(RTGS),
            thaiFont: signal(SARABUN),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tones);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('letter', TONES_DATA[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute activePronunciation from store', () => {
    expect(component.activePronunciation()).toBe(RTGS);
  });
});
