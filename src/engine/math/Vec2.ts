import { IVec2 } from "../index";

export class Vec2 implements IVec2 {
  constructor(public x: number, public y: number) {}

  add({ x, y }: Vec2) {
    this.x = x;
    this.y = y;
  }

  dist({ x, y }: Vec2) {
    const distX = x - this.x;
    const distY = y - this.y;
    return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
  }
}
