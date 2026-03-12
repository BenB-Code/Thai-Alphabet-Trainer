import { Component, computed, inject, input } from '@angular/core';
import { ThaiSymbol } from '../../../../shared/interfaces';
import { AppStoreService } from '../../../../store/app/app-store.service';

@Component({
  selector: 'app-tones',
  imports: [],
  templateUrl: './tones.html',
  styleUrl: './tones.scss',
})
export class Tones {
  protected readonly appStoreService = inject(AppStoreService);

  activePronunciation = computed(() => this.appStoreService.pronunciation());

  letter = input.required<ThaiSymbol>();
}
