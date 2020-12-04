import { MouseTracker } from "./MouseTracker";
import { Loop } from "./Loop";
import { Entity } from "./Entity";
import { IData } from "./index";

export abstract class Canvas {
  protected context: CanvasRenderingContext2D;
  protected entities: Entity[] = [];
  private data: IData;

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
    };

    this.setup(this.data);
  }

  public run() {
    const loop = new Loop(this.update.bind(this));
    loop.start();
  }

  public abstract setup(data: IData): void;

  public setDimensions(canvas: HTMLCanvasElement, width, height) {
    canvas.width = width;
    canvas.height = height;
  }

  protected addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  private update(delta: number) {
    const { canvas } = this.data;

    this.context.clearRect(0, 0, canvas.width, canvas.height);

    this.entities.forEach((entity) => {
      entity.render(this.context);
      entity.update(this.data, delta);
    });
  }
}
