import { MouseTracker } from "./MouseTracker";
import { Canvas } from "./Canvas";
import { Entity } from "./Entity";
import { Vec2 } from "./math/Vec2";

interface IData {
  canvas: HTMLCanvasElement;
  mouse: MouseTracker;
  entities: Entity[];
}

interface IVec2 {
  x: number;
  y: number;
}

interface IEntityOptions {
  x: number;
  y: number;
  radius: number;
  width: number;
  height: number;
  color: string;
}

export { Canvas, Entity, IEntityOptions, IData, IVec2 };
