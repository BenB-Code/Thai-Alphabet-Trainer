import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LettersTabSwitchSelector } from '../letters-tab-switch-selector/letters-tab-switch-selector';

@Component({
  selector: 'app-letters',
  imports: [LettersTabSwitchSelector],
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Letters {}
