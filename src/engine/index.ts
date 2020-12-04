import { MouseTracker } from "./MouseTracker";
import { Canvas } from "./Canvas";
import { Entity } from "./Entity";

interface IData {
  canvas: HTMLCanvasElement;
  mouse: MouseTracker;
}

interface IVec2 {
  x: number;
  y: number;
}

interface IEntityOptions {
  pos: IVec2;
  radius: number;
  width: number;
  height: number;
  color: string;
}

export { Canvas, Entity, IEntityOptions, IData, IVec2 };
