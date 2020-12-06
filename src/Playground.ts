import { Canvas, Entity, IData } from "./engine/index";
import { Vec2 } from "./engine/math/Vec2";

class circle extends Entity {
  public update(data: IData, delta: number) {
    super.update(data, delta);
  }
}

class StaticSquare extends Entity {
  public update(data: IData, delta: number) {}
}

export class Playground extends Canvas {
  setup({ mouse, canvas }: IData) {
    this.addEntity(
      new circle({
        x: mouse.pos.x,
        y: mouse.pos.y,
        radius: 10,
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
    const [c, r] = entities;
    r.color = this.circleCollidesWithRect(c, r) ? "orange" : "black";
  }

  private circleCollidesWithRect(c: Entity, r: Entity) {
    const test = new Vec2(c.pos.x, c.pos.y);

    // left else right
    if (c.pos.x < r.pos.x) {
      test.x = r.pos.x;
    } else if (c.pos.x > r.pos.x + r.width) {
      test.x = r.pos.x + r.width;
    }

    // top else bottom
    if (c.pos.y < r.pos.y) {
      test.y = r.pos.y;
    } else if (c.pos.y > r.pos.y + r.height) {
      test.y = r.pos.y + r.height;
    }

    const distance = c.pos.dist(test);

    if (distance <= c.radius) {
      return true;
    }

    return false;
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
