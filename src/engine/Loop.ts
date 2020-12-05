import { DeltaTracker } from "./DeltaTracker";

type RenderFn = () => void;
type UpdateFn = (delta: number) => void;
export class Loop {
  private deltaTracker: DeltaTracker;

  constructor(
    private updateFunction: UpdateFn,
    private renderFunction: RenderFn
  ) {
    this.deltaTracker = new DeltaTracker();
  }

  public start() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  private loop() {
    const delta = this.deltaTracker.getAndUpdateDelta();

    this.updateFunction(delta);
    this.renderFunction();

    window.requestAnimationFrame(this.loop.bind(this));
  }
}
