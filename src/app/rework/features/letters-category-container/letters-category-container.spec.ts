import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCategoryContainer } from './letters-category-container';

describe('LettersCategoryContainer', () => {
  let component: LettersCategoryContainer;
  let fixture: ComponentFixture<LettersCategoryContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersCategoryContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersCategoryContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
