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

  donate(): void {
    this.window?.open(
      'https://www.paypal.com/donate/?business=3TU592X8462AJ&no_recurring=0&currency_code=EUR',
      '_blank'
    );
  }
}
