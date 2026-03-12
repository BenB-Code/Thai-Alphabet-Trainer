import { Component, computed, inject, input } from '@angular/core';
import { ThaiVowel } from '../../../../shared/interfaces';
import { AppStoreService } from '../../../../store/app/app-store.service';
import { StatusBadge } from '../../../../common/status-badge/status-badge';
import { TranslatePipe } from '@ngx-translate/core';
import { LONG, SHORT } from '../../../../shared/constants';

@Component({
  selector: 'app-vowel',
  imports: [StatusBadge, TranslatePipe],
  templateUrl: './vowel.html',
  styleUrl: './vowel.scss',
})
export class Vowel {
  protected readonly appStoreService = inject(AppStoreService);

  activePronunciation = computed(() => this.appStoreService.pronunciation());

  letter = input.required<ThaiVowel>();
  protected readonly SHORT = SHORT;
  protected readonly LONG = LONG;
}
