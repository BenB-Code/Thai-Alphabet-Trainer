import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly window = inject(DOCUMENT).defaultView;

  sendMail(): void {
    this.window?.open('mailto:contact@thai-flashcards.app', '_self');
  }
}
