import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-wip-dialog',
  imports: [TranslatePipe, MatDialogModule, MatButtonModule],
  templateUrl: './wip-dialog.html',
  styleUrl: './wip-dialog.scss',
})
export class WipDialog {}
