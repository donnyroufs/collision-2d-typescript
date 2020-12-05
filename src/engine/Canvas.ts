import { MouseTracker } from "./MouseTracker";
import { Loop } from "./Loop";
import { Entity } from "./Entity";
import { IData } from "./index";

export abstract class Canvas {
  protected context: CanvasRenderingContext2D;
  protected entities: Entity[] = [];
  protected readonly data: IData;

  constructor(
    canvasElement: HTMLCanvasElement,
    width: number,
    height: number,
    mouse: MouseTracker
  ) {
    this.context = canvasElement.getContext("2d");
    this.setDimensions(canvasElement, width, height);

    this.data = {
      canvas: canvasElement,
      mouse,
      entities: this.entities,
    };

    this.setup(this.data);
  }

  public run() {
    const loop = new Loop(this.update.bind(this), this.render.bind(this));
    loop.start();
  }

  public abstract setup(data: IData): void;

  public setDimensions(canvas: HTMLCanvasElement, width, height) {
    canvas.width = width;
    canvas.height = height;
  }

  public beforeUpdate(data: IData, delta: number) {}
  public afterUpdate(data: IData, delta: number) {}

  private update(delta: number) {
    this.beforeUpdate(this.data, delta);
    this.entities.forEach((entity) => {
      entity.update(this.data, delta);
    });
    this.afterUpdate(this.data, delta);
  }

  private render(delta: number) {
    this.clearCanvas();
    this.entities.forEach((entity) => entity.render(this.context));
  }

  protected addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  protected clearCanvas() {
    const { canvas } = this.data;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
