import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
