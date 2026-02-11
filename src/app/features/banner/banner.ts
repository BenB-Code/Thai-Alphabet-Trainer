import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LangContainer } from '../lang-container/lang-container';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner',
  imports: [LangContainer, MatIconModule, MatButtonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner {
  redirect(url: string): void {
    window.open(url, '_self');
  }
}
