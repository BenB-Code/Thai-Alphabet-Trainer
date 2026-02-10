import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';
import { provideZonelessChangeDetection } from '@angular/core';
import { StateService } from '../../services/state-service/state-service';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { EN } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';
import { TranslateModule } from '@ngx-translate/core';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;
  let stateService: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    const stateServiceSpy = jasmine.createSpyObj('stateService', ['setState'], {
      selected: jasmine.createSpy().and.returnValue([THAI_CONSONANTS[0]]),
      toggleLetter: jasmine.createSpy(),
    });
    stateService = stateServiceSpy;

    const i18nServiceSpy = jasmine.createSpyObj('i18nService', ['activeLanguage'], {
      activeLanguage: jasmine.createSpy().and.returnValue(EN),
    });

    await TestBed.configureTestingModule({
      imports: [Card, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: StateService,
          useValue: stateServiceSpy,
        },
        {
          provide: I18nService,
          useValue: i18nServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    fixture.componentRef.setInput('letter', THAI_CONSONANTS[0]);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleLetter from stateService', () => {
    component.toggleLetter();

    expect(stateService.toggleLetter).toHaveBeenCalledTimes(1);
  });
});
