import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let windowSpy: jasmine.SpyObj<Window>;

  beforeEach(() => {
    windowSpy = jasmine.createSpyObj('Window', ['open']);

    const mockDocument = {
      defaultView: windowSpy,
    };

    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), { provide: DOCUMENT, useValue: mockDocument }],
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendMail', () => {
    it('should open mailto link with _self target', () => {
      service.sendMail();

      expect(windowSpy.open).toHaveBeenCalledWith('mailto:contact@thai-flashcards.app', '_self');
    });
  });

  describe('donate', () => {
    it('should open paypal link with _blank target', () => {
      service.donate();

      expect(windowSpy.open).toHaveBeenCalledWith(
        'https://www.paypal.com/donate/?business=3TU592X8462AJ&no_recurring=0&currency_code=EUR',
        '_blank'
      );
    });
  });
});
