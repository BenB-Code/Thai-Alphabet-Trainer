import { Component, input } from '@angular/core';

@Component({
  selector: 'app-extension-panel',
  imports: [],
  templateUrl: './extension-panel.html',
  styleUrl: './extension-panel.scss',
})
export class ExtensionPanel {
  open = input(false);
}
