import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContainer } from './cards-container';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GREEN } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';

describe('CardsContainer', () => {
  let component: CardsContainer;
  let fixture: ComponentFixture<CardsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsContainer, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsContainer);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('list', THAI_CONSONANTS);
    fixture.componentRef.setInput('color', GREEN);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
