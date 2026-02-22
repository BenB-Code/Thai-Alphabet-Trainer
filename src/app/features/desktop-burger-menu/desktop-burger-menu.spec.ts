import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DesktopBurgerMenu } from './desktop-burger-menu';
import { AppStoreService } from '../../store/app/app-store.service';
import { ContactService } from '../../services/contact.service/contact.service';

describe('MobileBurgerMenu', () => {
  let component: DesktopBurgerMenu;
  let fixture: ComponentFixture<DesktopBurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopBurgerMenu, TranslateModule.forRoot()],
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

    fixture = TestBed.createComponent(DesktopBurgerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
