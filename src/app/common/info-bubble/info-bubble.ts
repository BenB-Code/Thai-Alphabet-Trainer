import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-info-bubble',
  imports: [],
  templateUrl: './info-bubble.html',
  styleUrl: './info-bubble.scss',
})
export class InfoBubble {
  @HostListener('touchstart', ['$event'])
  onTouch(event: TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.toggleInfos();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleInfos();
  }

  @HostListener('document:click')
  @HostListener('document:touchstart')
  onTouchOutside(): void {
    this.showInfos.update(() => false);
  }
  info = input.required<string | string[]>();
  showInfos = signal(false);

  toggleInfos = () => {
    this.showInfos.update(el => !el);
  };

  protected readonly isArray = Array.isArray;
}
