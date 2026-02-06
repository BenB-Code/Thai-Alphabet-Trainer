import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { Router } from '@angular/router';

describe('NavigationService', () => {
  let service: NavigationService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj(Router, ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call navigate with all arguments', () => {
    service.navigate('test', 'john', 'doe');

    expect(routerSpy.navigate).toHaveBeenCalledWith(['test', 'john', 'doe']);
  });
});
