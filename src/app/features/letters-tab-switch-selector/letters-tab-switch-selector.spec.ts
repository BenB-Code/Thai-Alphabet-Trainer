import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LettersTabSwitchSelector } from './letters-tab-switch-selector';
import { AppStoreService } from '../../store/app/app-store.service';
import { TabsService } from '../../services/tabs-service/tabs-service';

describe('LettersTabSwitchSelector', () => {
  let component: LettersTabSwitchSelector;
  let fixture: ComponentFixture<LettersTabSwitchSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersTabSwitchSelector, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            activeTab: signal(0),
            isDarkThemeActive: signal(false),
            changeTab: jasmine.createSpy(),
          },
        },
        {
          provide: TabsService,
          useValue: {
            tabsSwitchConfig: [
              {
                label: { display: true, text: 'All' },
                icon: { display: false, path: '', alt: '', right: false },
                id: 0,
                class: '',
              },
              {
                label: { display: true, text: 'Consonants' },
                icon: { display: false, path: '', alt: '', right: false },
                id: 1,
                class: '',
              },
            ],
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LettersTabSwitchSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
