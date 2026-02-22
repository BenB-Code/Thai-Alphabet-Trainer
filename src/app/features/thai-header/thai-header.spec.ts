import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThaiHeader } from './thai-header';
import { AppStoreService } from '../../store/app/app-store.service';
import { ContactService } from '../../services/contact.service/contact.service';

describe('ThaiHeader', () => {
  let component: ThaiHeader;
  let fixture: ComponentFixture<ThaiHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThaiHeader, TranslateModule.forRoot()],
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

    fixture = TestBed.createComponent(ThaiHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title and subtitle', () => {
    expect(component.title).toBe('Thai');
    expect(component.subtitle).toBe('Flashcards');
  });
});
