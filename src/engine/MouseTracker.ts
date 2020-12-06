import { Utils } from "./Utils";
import { Vec2 } from "./math/Vec2";

export class MouseTracker {
  public pos: Vec2 = new Vec2(0, 0);

  constructor(canvasElement: HTMLCanvasElement, x?: number, y?: number) {
    this.pos.x = x || canvasElement.width;
    this.pos.y = y || canvasElement.height;

    canvasElement.addEventListener("mousemove", (e) => {
      const mousePos = Utils.getMousePos(canvasElement, e);
      this.pos.add(mousePos);
    });
  }
}
