import { Vec2 } from "./math/Vec2";

export class Utils {
  static getMousePos(canvas: HTMLCanvasElement, e: any) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return new Vec2(
      (e.clientX - rect.left) * scaleX,
      (e.clientY - rect.top) * scaleY
    );
  }
}
