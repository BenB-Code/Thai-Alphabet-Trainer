import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { Numeral } from './numeral';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { NUMERAL_DATA } from '../../../../data';
import { RTGS, SARABUN } from '../../../../shared/constants';

describe('Numeral', () => {
  let component: Numeral;
  let fixture: ComponentFixture<Numeral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numeral],
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

    fixture = TestBed.createComponent(Numeral);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('letter', NUMERAL_DATA[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute activePronunciation from store', () => {
    expect(component.activePronunciation()).toBe(RTGS);
  });
});
