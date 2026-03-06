import { Component, computed, inject, input } from '@angular/core';
import { ThaiSymbol } from '../../../../shared/interfaces';
import { AppStoreService } from '../../../../store/app/app-store.service';

@Component({
  selector: 'app-diacritics',
  imports: [],
  templateUrl: './diacritics.html',
  styleUrl: './diacritics.scss',
})
export class Diacritics {
  protected readonly appStoreService = inject(AppStoreService);

  activePronunciation = computed(() => this.appStoreService.pronunciation());

  letter = input.required<ThaiSymbol>();
}
