import { MouseTracker } from "./engine/MouseTracker";
import { Playground } from "./Playground";
import {
  PointToPoint,
  PointToCircle,
  CircleToCircle,
} from "./section-one/index";

async function bootstrap() {
  const canvasEl = document.querySelector("canvas") as HTMLCanvasElement;

  const mouse = new MouseTracker(canvasEl);
  // const canvas = new Playground(canvasEl, 600, 400, mouse);

  // const canvas = new PointToPoint(canvasEl, 600, 400, mouse);
  // const canvas = new PointToCircle(canvasEl, 600, 400, mouse);
  const canvas = new CircleToCircle(canvasEl, 600, 400, mouse);

  canvasEl.focus();
  canvas.run();
}

bootstrap();
