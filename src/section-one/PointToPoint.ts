import { Canvas, Entity, IData } from "../engine/index";

const button = document.querySelector("button") as HTMLButtonElement;

class Point extends Entity {
  public update(data: IData, delta: number) {}
}

export class PointToPoint extends Canvas {
  setup({ mouse, canvas, entities }: IData) {
    this.addEntity(
      new Point({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
      })
    );
    this.addEntity(
      new Point({
        x: mouse.pos.x,
        y: mouse.pos.y,
        radius: 10,
        color: "purple",
      })
    );

    button.addEventListener("click", () => {
      const [dot1, dot2] = entities;
      const { x, y } = dot1.pos;

      if (dot2.pos.x === x && dot2.pos.y === y) {
        dot2.pos.x = 80;
        dot2.pos.y = 140;
      } else {
        dot2.pos.x = canvas.width / 2;
        dot2.pos.y = canvas.height / 2;
      }
    });
  }

  beforeUpdate({ entities, canvas }: IData, delta: number) {
    const [entityA, entityB] = entities;

    const isColliding = this.isColliding(entityA, entityB);
    canvas.style.background = isColliding ? "green" : "white";
  }

  private isColliding(
    { pos: { x: x1, y: y1 } }: Entity,
    { pos: { x: x2, y: y2 } }: Entity
  ) {
    if (x1 === x2 && y1 === y2) {
      return true;
    }
    return false;
  }
}
