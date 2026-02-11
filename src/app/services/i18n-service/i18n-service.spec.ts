import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FR } from '../../shared/constants';

describe('I18nService', () => {
  let service: I18nService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: TranslateService,
          useValue: translateServiceSpy,
        },
      ],
    });
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change lang from EN to FR', () => {
    expect(service.activeLanguage()).toEqual(FR);

    service.switchLanguage(FR);
    expect(service.activeLanguage()).toEqual(FR);
    expect(translateServiceSpy.use).toHaveBeenCalledWith(FR);
  });
});
