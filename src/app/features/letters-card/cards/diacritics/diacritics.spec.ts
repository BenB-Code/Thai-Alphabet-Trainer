import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { Diacritics } from './diacritics';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { DIACRITICS_DATA } from '../../../../data';
import { RTGS, SARABUN } from '../../../../shared/constants';

describe('Diacritics', () => {
  let component: Diacritics;
  let fixture: ComponentFixture<Diacritics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diacritics],
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

    fixture = TestBed.createComponent(Diacritics);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('letter', DIACRITICS_DATA[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute activePronunciation from store', () => {
    expect(component.activePronunciation()).toBe(RTGS);
  });
});
