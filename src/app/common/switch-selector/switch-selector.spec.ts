import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SwitchSelector } from './switch-selector';
import { SwitchSelectorItem } from '../../shared/types';

const MOCK_LIST: SwitchSelectorItem[] = [
  {
    label: { display: true, text: 'Item A' },
    icon: { display: false, path: '', alt: '', right: false },
    id: 0,
    class: 'item-a',
  },
  {
    label: { display: true, text: 'Item B' },
    icon: { display: false, path: '', alt: '', right: false },
    id: 1,
    class: 'item-b',
  },
  {
    label: { display: true, text: 'Item C' },
    icon: { display: false, path: '', alt: '', right: false },
    id: 2,
    class: 'item-c',
  },
];

describe('SwitchSelector', () => {
  let component: SwitchSelector;
  let fixture: ComponentFixture<SwitchSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchSelector],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchSelector);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('list', MOCK_LIST);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('rendering', () => {
    it('should render one button per list item', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');

      expect(buttons.length).toBe(3);
    });

    it('should display label text', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');

      expect(buttons[0].textContent).toContain('Item A');
      expect(buttons[1].textContent).toContain('Item B');
    });
  });

  describe('activate', () => {
    it('should update activeIndex', () => {
      component.activate(2);

      expect(component.activeIndex()).toBe(2);
    });

    it('should emit activeItem with the id', () => {
      spyOn(component.activeItem, 'emit');

      component.activate(1);

      expect(component.activeItem.emit).toHaveBeenCalledWith(1);
    });
  });

  describe('activeIndex linked signal', () => {
    it('should default to initialIndex', () => {
      expect(component.activeIndex()).toBe(0);
    });

    it('should follow initialIndex changes', async () => {
      fixture.componentRef.setInput('initialIndex', 2);
      await fixture.whenStable();

      expect(component.activeIndex()).toBe(2);
    });
  });

  describe('active class', () => {
    it('should apply active class to the selected button', async () => {
      component.activate(1);
      await fixture.whenStable();
      const buttons = fixture.nativeElement.querySelectorAll('button');

      expect(buttons[1].classList.contains('active')).toBeTrue();
      expect(buttons[0].classList.contains('active')).toBeFalse();
    });
  });
});
