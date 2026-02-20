import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCategoryHeader } from './letters-category-header';

describe('LettersCategoryHeader', () => {
  let component: LettersCategoryHeader;
  let fixture: ComponentFixture<LettersCategoryHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCategoryHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersCategoryHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
