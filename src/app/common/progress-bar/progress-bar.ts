import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar {
  private readonly destroyRef = inject(DestroyRef);

  paused = input<boolean>(false);
  completed = output<void>();

  timerPercent = signal<number>(100);
  skipTransition = signal<boolean>(false);

  private timeLeft = 0;
  private totalDuration = 0;
  private lastTick = 0;
  private frameRef: number | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => this.stop());
  }

  start(durationMs: number): void {
    if (this.frameRef !== null) return;

    this.totalDuration = durationMs;

    if (this.timeLeft <= 0) {
      this.timeLeft = durationMs;
      this.timerPercent.set(100);
    }

    this.lastTick = performance.now();
    this.frameRef = requestAnimationFrame(() => this.tick());
  }

  stop(): void {
    if (this.frameRef !== null) {
      cancelAnimationFrame(this.frameRef);
      this.frameRef = null;
    }
    this.lastTick = 0;
  }

  reset(durationMs?: number): void {
    this.stop();
    if (durationMs != null) {
      this.totalDuration = durationMs;
    }
    this.timeLeft = this.totalDuration;
    this.skipTransition.set(true);
    this.timerPercent.set(100);

    requestAnimationFrame(() => {
      this.skipTransition.set(false);
    });
  }

  private tick(): void {
    const now = performance.now();
    const delta = this.lastTick ? now - this.lastTick : 0;
    this.lastTick = now;
    this.timeLeft -= delta;

    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.timerPercent.set(0);
      this.stop();
      this.completed.emit();
      return;
    }

    this.timerPercent.set((this.timeLeft / this.totalDuration) * 100);
    this.frameRef = requestAnimationFrame(() => this.tick());
  }
}
