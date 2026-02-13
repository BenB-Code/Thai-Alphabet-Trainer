import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMail(): void {
    window.open('mailto:contact@thai-flashcards.app', '_self');
  }
}
