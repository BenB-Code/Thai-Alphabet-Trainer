import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContainer } from './cards-container';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CONSONANT, GREEN } from '../../shared/constants';
import { THAI_CONSONANTS } from '../../data';
import { StateService } from '../../services/state-service/state-service';

describe('CardsContainer', () => {
  let component: CardsContainer;
  let fixture: ComponentFixture<CardsContainer>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    stateServiceSpy = jasmine.createSpyObj('StateService', ['selectLetter', 'deselectLetter'], {
      selected: jasmine.createSpy().and.returnValue([]),
    });

    await TestBed.configureTestingModule({
      imports: [CardsContainer, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection(), { provide: StateService, useValue: stateServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsContainer);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('list', THAI_CONSONANTS);
    fixture.componentRef.setInput('color', GREEN);
    fixture.componentRef.setInput('kind', CONSONANT);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleSelection', () => {
    it('should call deselectLetter when all selected', () => {
      stateServiceSpy.selected.and.returnValue(THAI_CONSONANTS);

      component.toggleSelection();

      expect(stateServiceSpy.deselectLetter).toHaveBeenCalledTimes(THAI_CONSONANTS.length);
      expect(stateServiceSpy.selectLetter).not.toHaveBeenCalled();
    });

    it('should call selectLetter when not all selected', () => {
      stateServiceSpy.selected.and.returnValue([]);

      component.toggleSelection();

      expect(stateServiceSpy.selectLetter).toHaveBeenCalledTimes(THAI_CONSONANTS.length);
      expect(stateServiceSpy.deselectLetter).not.toHaveBeenCalled();
    });
  });
});
