import { IEntityOptions, IData } from "./index";
import { Vec2 } from "./math/Vec2";

export class Entity {
  public pos: Vec2;
  public radius: number;
  public width: number;
  public height: number;
  public color: string;

  constructor({
    x = 0,
    y = 0,
    radius,
    width,
    height,
    color = "black",
  }: Partial<IEntityOptions>) {
    this.pos = new Vec2(x, y);
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  public update({ mouse }: IData, delta: number) {
    this.pos.x = mouse.pos.x;
    this.pos.y = mouse.pos.y;
  }

  public render(ctx: CanvasRenderingContext2D) {
    if (this.height && this.width) {
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }

    if (this.radius) {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }
}
