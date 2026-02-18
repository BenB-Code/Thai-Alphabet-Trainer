import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ThaiCharacter } from '../../../shared/models';
import { Card } from '../../common/card/card';
import { ThemeService } from '../../services/theme-service/theme-service';
import { LetterUtilsService } from '../../../services/letter-utils-service/letter-utils-service';
import { I18nService } from '../../../services/i18n-service/i18n-service';
import { FINAL, MEDIAL } from '../../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusBadge } from '../../common/status-badge/status-badge';
import { DarkMode } from '../../common/dark-mode/dark-mode';

@Component({
  selector: 'app-letters-card',
  imports: [Card, TranslatePipe, StatusBadge, DarkMode],
  templateUrl: './letters-card.html',
  styleUrl: './letters-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersCard {
  protected readonly themeService = inject(ThemeService);
  protected readonly i18nService = inject(I18nService);
  protected readonly letterUtilsService = inject(LetterUtilsService);

  letter = input.required<ThaiCharacter>();
  protected readonly FINAL = FINAL;
  protected readonly MEDIAL = MEDIAL;
}
