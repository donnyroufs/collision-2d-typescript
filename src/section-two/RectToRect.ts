import { Canvas, Entity, IData } from "../engine/index";
import { Vec2 } from "../engine/math/Vec2";

class Square extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

class StaticSquare extends Entity {
  public update(data: IData, delta: number) {}
}

export class RectToRect extends Canvas {
  setup({ mouse, canvas }: IData) {
    this.addEntity(
      new Square({
        x: mouse.pos.x + 30,
        y: mouse.pos.y - 30,
        height: 30,
        width: 30,
        color: "purple",
      })
    );
    this.addEntity(
      new StaticSquare({
        x: canvas.width / 2 - 30,
        y: canvas.height / 2 - 30,
        height: 60,
        width: 60,
      })
    );
  }

  beforeUpdate({ entities }: IData, delta: number) {
    const [r1, r2] = entities;
    r2.color = this.isCollidingWithAnotherRect(r1, r2) ? "orange" : "black";
  }

  private isCollidingWithAnotherRect(r1: Entity, r2: Entity) {
    const right = r1.pos.x + r1.width >= r2.pos.x;
    const left = r1.pos.x <= r2.pos.x + r2.width;
    const bottom = r1.pos.y + r1.height >= r2.pos.y;
    const top = r1.pos.y <= r2.pos.y + r2.height;

    if (right && left && bottom && top) {
      return true;
    }
    return false;
  }

  private pointToRectCollision(p: Entity, r: Entity) {
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
