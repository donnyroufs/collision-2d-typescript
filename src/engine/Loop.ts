import { DeltaTracker } from "./DeltaTracker";

export class Loop {
  private updateFunction: (delta: number) => void;
  private deltaTracker: DeltaTracker;

  constructor(updateFunction: (delta: number) => void) {
    this.updateFunction = updateFunction;
    this.deltaTracker = new DeltaTracker();
  }

  public start() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  private loop() {
    const delta = this.deltaTracker.getAndUpdateDelta();

    this.updateFunction(delta);

    window.requestAnimationFrame(this.loop.bind(this));
  }
}
