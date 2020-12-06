import { Canvas, Entity, IData } from "../engine/index";

class Circle extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

class StaticSquare extends Entity {
  public update(data: IData, delta: number) {}
}

export class PointToRect extends Canvas {
  setup({ mouse, canvas }: IData) {
    this.addEntity(
      new StaticSquare({
        x: canvas.width / 2 - 30,
        y: canvas.height / 2 - 30,
        height: 60,
        width: 60,
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
    const [r, p] = entities;
    r.color = this.rectCollision(p, r) ? "orange" : "black";
  }

  private rectCollision(p: Entity, r: Entity) {
    if (
      // Right of the left edge
      p.pos.x >= r.pos.x &&
      // Left of the right edge
      p.pos.x <= r.pos.x + r.width &&
      // Below the top
      p.pos.y >= r.pos.y &&
      // Above the bottom
      p.pos.y <= r.pos.y + r.height
    ) {
      return true;
    }
    return false;
  }

  private isCollidingWithAnotherCircle(entityA, entityB) {
    const distance = entityA.pos.dist(entityB.pos);
    const radiusSum = entityA.radius + entityB.radius;
    return distance < radiusSum;
  }
}
