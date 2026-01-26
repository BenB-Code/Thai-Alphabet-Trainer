import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LangContainer } from './features/lang-container/lang-container';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule, LangContainer, RouterOutlet],
})
export class App {}
