import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LangContainer } from '../lang-container/lang-container';

@Component({
  selector: 'app-banner',
  imports: [LangContainer],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner {}
