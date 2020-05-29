import { Box } from './Box';

export interface ICtRect {
  ctx: number
  cty: number
  width: number
  height: number
}

export class CtRect extends Box<CtRect> implements ICtRect {
  constructor(ctx: number, cty: number, width: number, height: number, allowNegativeDimensions: boolean = false) {
    const x = ctx - width / 2
    const y = cty - height / 2
    super({ x, y, width, height }, allowNegativeDimensions)
  }
}