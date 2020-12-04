import { MouseTracker } from "./engine/MouseTracker";
import { Playground } from "./Playground";

async function bootstrap() {
  const canvasEl = document.querySelector("canvas") as HTMLCanvasElement;
  const mouse = new MouseTracker(canvasEl);

  const canvas = new Playground(canvasEl, 600, 400, mouse);

  canvasEl.focus();
  canvas.run();
}

bootstrap();
