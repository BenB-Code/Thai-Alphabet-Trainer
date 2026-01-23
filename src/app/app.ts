import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LettersTab } from './features/letters-tab/letters-tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, LettersTab],
})
export class App {}
