import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionPanel } from './extension-panel';

describe('ExtensionPanel', () => {
  let component: ExtensionPanel;
  let fixture: ComponentFixture<ExtensionPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtensionPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
