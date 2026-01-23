import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ThaiConsonant, ThaiVowel } from '../../shared/models';
import { Card } from '../card/card';
import { COLORS, PRIMARY } from '../../shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { MatMiniFabButton } from '@angular/material/button';
import { StateService } from '../../services/state-service/state-service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards-container',
  imports: [Card, TranslatePipe, MatMiniFabButton, MatIconModule],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-color]': 'color()',
  },
})
export class CardsContainer {
  color = input<COLORS>(PRIMARY);
  kind = input.required<string>();
  list = input.required<ThaiConsonant[] | ThaiVowel[]>();
  isAllSelected = computed(() => this.list().every(letter => this.stateService.total().has(letter)));

  protected readonly stateService: StateService = inject<StateService>(StateService);

  toggleSelection(): void {
    const action = this.isAllSelected() ? this.stateService.deselectLetter : this.stateService.selectLetter;

    this.list().forEach(letter => action.call(this.stateService, letter));
    console.log(this.stateService.total());
  }
}
