import { Component, input } from '@angular/core';
import { ThaiVowel } from '../../../../shared/interfaces';

@Component({
  selector: 'app-vowel',
  imports: [],
  templateUrl: './vowel.html',
  styleUrl: './vowel.scss',
})
export class Vowel {
  letter = input.required<ThaiVowel>();
}
