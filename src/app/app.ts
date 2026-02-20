import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { ThaiHeader } from './features/thai-header/thai-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, RouterOutlet, ThaiHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
