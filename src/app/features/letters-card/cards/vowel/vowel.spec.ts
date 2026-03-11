import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Vowel } from './vowel';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { VOWELS_DATA } from '../../../../data';
import { EN, RTGS, SARABUN } from '../../../../shared/constants';

describe('Vowel', () => {
  let component: Vowel;
  let fixture: ComponentFixture<Vowel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vowel, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            pronunciation: signal(RTGS),
            thaiFont: signal(SARABUN),
            language: signal(EN),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Vowel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('letter', VOWELS_DATA[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute activePronunciation from store', () => {
    expect(component.activePronunciation()).toBe(RTGS);
  });
});
