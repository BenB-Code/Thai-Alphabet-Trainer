import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router = inject<Router>(Router);

  navigate(route: string, ...args: string[]): void {
    this.router.navigate([route, ...args]);
  }
}
