import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCard } from './letters-card';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LettersCard', () => {
  let component: LettersCard;
  let fixture: ComponentFixture<LettersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCard, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
