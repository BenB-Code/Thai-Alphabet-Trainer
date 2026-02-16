import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { TabsService } from '../../services/tabs-service/tabs-service';

@Component({
  selector: 'app-letters-tabs',
  imports: [JsonPipe],
  templateUrl: './letters-tabs.html',
  styleUrl: './letters-tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersTabs {
  protected readonly tabsService = inject(TabsService);
}
