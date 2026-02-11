import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangContainer } from './lang-container';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LangContainer', () => {
  let component: LangContainer;
  let fixture: ComponentFixture<LangContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangContainer, TranslateModule.forRoot()],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(LangContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
