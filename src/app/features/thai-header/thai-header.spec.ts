import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiHeader } from './thai-header';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('ThaiHeader', () => {
  let component: ThaiHeader;
  let fixture: ComponentFixture<ThaiHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThaiHeader, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ThaiHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
