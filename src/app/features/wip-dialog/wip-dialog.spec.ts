import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipDialog } from './wip-dialog';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('WipDialog', () => {
  let component: WipDialog;
  let fixture: ComponentFixture<WipDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WipDialog, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(WipDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
