import { Canvas, Entity, IData } from "./engine/index";

class Circle extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

export class Playground extends Canvas {
  setup({ mouse }: IData) {
    this.addEntity(
      new Circle({
        pos: {
          x: mouse.pos.x,
          y: mouse.pos.y,
        },
        radius: 10,
      })
    );
  }
}
