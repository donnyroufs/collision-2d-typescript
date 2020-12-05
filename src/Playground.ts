import { Canvas, Entity, IData } from "./engine/index";

class Circle extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

class StaticCircle extends Entity {
  public update(data: IData, delta: number) {}
}

export class Playground extends Canvas {
  setup({ mouse, canvas }: IData) {
    this.addEntity(
      new StaticCircle({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
      })
    );
    this.addEntity(
      new Circle({
        x: mouse.pos.x,
        y: mouse.pos.y,
        radius: 10,
        color: "purple",
      })
    );
  }

  beforeUpdate({}: IData, delta: number) {
    console.log({ delta });
  }

  afterUpdate({ entities }: IData, delta: number) {
    const [, movingEntity] = entities;
    console.log(movingEntity.pos);
  }
}
