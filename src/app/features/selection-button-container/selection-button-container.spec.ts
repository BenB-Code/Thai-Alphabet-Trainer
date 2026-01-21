import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionButtonContainer } from './selection-button-container';
import { provideZonelessChangeDetection } from '@angular/core';
import { StateService } from '../../services/state-service/state-service';
import { CONSONANT } from '../../shared/models';
import { TranslateModule } from '@ngx-translate/core';

describe('SelectionButtonContainer', () => {
  let component: SelectionButtonContainer;
  let fixture: ComponentFixture<SelectionButtonContainer>;
  let stateService: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    const stateServiceSpy = jasmine.createSpyObj('stateService', ['selectAll', 'deselectAll'], {
      total: jasmine.createSpy().and.returnValue(new Set()),
      toggleLetter: jasmine.createSpy(),
    });
    stateService = stateServiceSpy;

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

    expect(stateService.selectAll).toHaveBeenCalledTimes(1);
  });

  it('deselectAll', () => {
    component.deselectAll();

    expect(stateService.deselectAll).toHaveBeenCalledTimes(1);
  });
});
