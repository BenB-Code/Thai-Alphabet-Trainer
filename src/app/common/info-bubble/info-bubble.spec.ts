import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBubble } from './info-bubble';

describe('InfoBubble', () => {
  let component: InfoBubble;
  let fixture: ComponentFixture<InfoBubble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBubble],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBubble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
