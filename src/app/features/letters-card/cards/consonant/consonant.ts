import { Component, computed, inject, input } from '@angular/core';
import { ThaiConsonant } from '../../../../shared/interfaces';
import { LetterUtilsService } from '../../../../services/letter-utils-service/letter-utils-service';
import { TranslatePipe } from '@ngx-translate/core';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { StatusBadge } from '../../../../common/status-badge/status-badge';
import { FINAL, INITIAL } from '../../../../shared/constants';

@Component({
  selector: 'app-consonant',
  imports: [TranslatePipe, StatusBadge],
  templateUrl: './consonant.html',
  styleUrl: './consonant.scss',
})
export class Consonant {
  protected readonly letterUtilsService = inject(LetterUtilsService);
  protected readonly appStoreService = inject(AppStoreService);

  activePronunciation = computed(() => this.appStoreService.pronunciation());

  letter = input.required<ThaiConsonant>();
  protected readonly INITIAL = INITIAL;
  protected readonly FINAL = FINAL;
}
