import { Box } from '../classes';

export class MtcnnBox extends Box<MtcnnBox> {
  constructor(left: number, top: number, right: number, bottom: number) {
    super({ left, top, right, bottom }, true)
  }
}