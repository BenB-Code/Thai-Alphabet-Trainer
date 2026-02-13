import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, RouterOutlet],
})
export class App {
  // readonly dialog = inject(MatDialog);

  constructor() {
    // afterNextRender(() => this.dialog.open(WipDialog));
  }
}
