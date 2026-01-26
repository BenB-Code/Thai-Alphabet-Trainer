import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EN, FR } from '../../shared/constants';
import { I18nService } from '../../services/i18n-service/i18n-service';
import { MatButtonModule } from '@angular/material/button';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-lang-container',
  imports: [MatButtonModule, UpperCasePipe],
  templateUrl: './lang-container.html',
  styleUrl: './lang-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangContainer {
  protected readonly i18nService = inject<I18nService>(I18nService);

  protected readonly EN = EN;
  protected readonly FR = FR;
}
