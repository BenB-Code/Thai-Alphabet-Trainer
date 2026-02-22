import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThaiHeader } from './features/thai-header/thai-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, ThaiHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
