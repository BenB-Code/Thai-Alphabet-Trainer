import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-extension-panel',
  imports: [],
  templateUrl: './extension-panel.html',
  styleUrl: './extension-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtensionPanel {
  open = input(false);
}
