import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Consonant } from './consonant';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { CONSONANTS_DATA } from '../../../../data';
import { EN, RTGS, SARABUN } from '../../../../shared/constants';

describe('Consonant', () => {
  let component: Consonant;
  let fixture: ComponentFixture<Consonant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consonant, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            pronunciation: signal(RTGS),
            thaiFont: signal(SARABUN),
            language: signal(EN),
            isDarkThemeActive: signal(false),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Consonant);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('letter', CONSONANTS_DATA[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute activePronunciation from store', () => {
    expect(component.activePronunciation()).toBe(RTGS);
  });
});
