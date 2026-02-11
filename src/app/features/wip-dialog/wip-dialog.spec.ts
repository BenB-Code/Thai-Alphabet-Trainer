import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipDialog } from './wip-dialog';

describe('WipDialog', () => {
  let component: WipDialog;
  let fixture: ComponentFixture<WipDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WipDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(WipDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
