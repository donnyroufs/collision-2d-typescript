import { Canvas, Entity, IData } from "../engine/index";

class Circle extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

class StaticCircle extends Entity {
  public update(data: IData, delta: number) {}
}

export class CircleToCircle extends Canvas {
  setup({ mouse, canvas }: IData) {
    this.addEntity(
      new StaticCircle({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 30,
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

  beforeUpdate({ entities, canvas }: IData, delta: number) {
    const [entityA, entityB] = entities;
    entityA.color = this.isColliding(entityA, entityB) ? "orange" : "black";
  }

  private isColliding(entityA, entityB) {
    const distance = entityA.pos.dist(entityB.pos);
    const radiusSum = entityA.radius + entityB.radius;
    return distance < radiusSum;
  }
}
