import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CONSONANT, VOWEL } from '../../shared/models';
import { StateService } from '../../services/state-service/state-service';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-selection-button-container',
  imports: [TranslatePipe, MatButtonModule, MatIconModule],
  templateUrl: './selection-button-container.html',
  styleUrl: './selection-button-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionButtonContainer {
  protected readonly stateService = inject<StateService>(StateService);

  kind = input.required<typeof CONSONANT | typeof VOWEL>();

  selectAll(): void {
    this.stateService.selectAll(this.kind());
  }

  deselectAll(): void {
    this.stateService.deselectAll(this.kind());
  }
}
