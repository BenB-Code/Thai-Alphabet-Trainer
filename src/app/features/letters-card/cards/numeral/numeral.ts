import { Component, computed, inject, input } from '@angular/core';
import { ThaiSymbol } from '../../../../shared/interfaces';
import { AppStoreService } from '../../../../store/app/app-store.service';

@Component({
  selector: 'app-numeral',
  imports: [],
  templateUrl: './numeral.html',
  styleUrl: './numeral.scss',
})
export class Numeral {
  protected readonly appStoreService = inject(AppStoreService);

  activePronunciation = computed(() => this.appStoreService.pronunciation());

  letter = input.required<ThaiSymbol>();
}
