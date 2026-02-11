import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionButtonContainer } from './selection-button-container';
import { provideZonelessChangeDetection } from '@angular/core';
import { StateService } from '../../services/state-service/state-service';
import { TranslateModule } from '@ngx-translate/core';
import { CONSONANT } from '../../shared/constants';

describe('SelectionButtonContainer', () => {
  let component: SelectionButtonContainer;
  let fixture: ComponentFixture<SelectionButtonContainer>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    stateServiceSpy = jasmine.createSpyObj('stateService', ['selectAll', 'deselectAll'], {
      toggleLetter: jasmine.createSpy(),
    });

    await TestBed.configureTestingModule({
      imports: [SelectionButtonContainer, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: StateService,
          useValue: stateServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionButtonContainer);
    fixture.componentRef.setInput('kind', CONSONANT);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectAll', () => {
    component.selectAll();

    expect(stateServiceSpy.selectAll).toHaveBeenCalledTimes(1);
  });

  it('deselectAll', () => {
    component.deselectAll();

    expect(stateServiceSpy.deselectAll).toHaveBeenCalledTimes(1);
  });
});
