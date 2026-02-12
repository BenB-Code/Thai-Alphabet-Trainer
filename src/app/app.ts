import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WipDialog } from './features/wip-dialog/wip-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, RouterOutlet],
})
export class App implements OnInit {
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(WipDialog);
  }
}
