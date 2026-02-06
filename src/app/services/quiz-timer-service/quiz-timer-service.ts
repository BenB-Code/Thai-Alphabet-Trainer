import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizTimerService {
  private timeLeft = 0;
  private lastTick = 0;
  private frameRef: number | null = null;
  private onTimeout: (() => void) | null = null;

  timerPercent = signal<number>(100);
  skipTransition = signal<boolean>(false);

  start(delayMs: number, onTimeout: () => void) {
    if (this.frameRef !== null) {
      return;
    }

    this.onTimeout = onTimeout;

    if (this.timeLeft <= 0) {
      this.timeLeft = delayMs;
      this.timerPercent.set(100);
    }

    this.lastTick = performance.now();
    this.frameRef = requestAnimationFrame(() => this.runAnimationFrame(delayMs));
  }

  stop() {
    if (this.frameRef !== null) {
      cancelAnimationFrame(this.frameRef);
      this.frameRef = null;
    }
    this.lastTick = 0;
  }

  reset(delayMs: number) {
    this.stop();
    this.timeLeft = delayMs;
    this.skipTransition.set(true);
    this.timerPercent.set(100);

    requestAnimationFrame(() => {
      this.skipTransition.set(false);
    });
  }

  private runAnimationFrame(delayMs: number) {
    const now = performance.now();
    const delta = this.lastTick ? now - this.lastTick : 0;
    this.lastTick = now;
    this.timeLeft -= delta;

    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.timerPercent.set(0);
      this.stop();
      const timeout = this.onTimeout;
      this.onTimeout = null;
      if (timeout) {
        timeout();
      }
      return;
    }

    this.timerPercent.set((this.timeLeft / delayMs) * 100);
    this.frameRef = requestAnimationFrame(() => this.runAnimationFrame(delayMs));
  }
}
