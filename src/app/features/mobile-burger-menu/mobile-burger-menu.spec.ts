import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MobileBurgerMenu } from './mobile-burger-menu';
import { AppStoreService } from '../../store/app/app-store.service';
import { ContactService } from '../../services/contact.service/contact.service';

describe('MobileBurgerMenu', () => {
  let component: MobileBurgerMenu;
  let fixture: ComponentFixture<MobileBurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileBurgerMenu, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: AppStoreService,
          useValue: {
            theme: signal('light'),
            isDarkThemeActive: signal(false),
            themeIcon: signal('icons/moon.svg'),
            thaiFont: signal('sarabun'),
            language: signal('en'),
            toggleTheme: jasmine.createSpy(),
            toggleLanguage: jasmine.createSpy(),
            switchFont: jasmine.createSpy(),
          },
        },
        {
          provide: ContactService,
          useValue: { sendMail: jasmine.createSpy() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileBurgerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
