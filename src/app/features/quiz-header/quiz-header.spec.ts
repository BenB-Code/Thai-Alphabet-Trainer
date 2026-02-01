import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHeader } from './quiz-header';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { NavigationService } from '../../services/navigation-service/navigation-service';

describe('QuizHeader', () => {
  let component: QuizHeader;
  let fixture: ComponentFixture<QuizHeader>;

  let navigationServiceSpy: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [QuizHeader, TranslateModule.forRoot()],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: NavigationService,
          useValue: navigationServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigation', () => {
    component.exit();

    expect(navigationServiceSpy.navigate).toHaveBeenCalledTimes(1);
  });
});
