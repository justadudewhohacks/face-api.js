export interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class Rect implements IRect {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    readonly right: number;
    readonly bottom: number;
    toSquare(): Rect;
    pad(padX: number, padY: number): Rect;
    floor(): Rect;
    clipAtImageBorders(imgWidth: number, imgHeight: number): Rect;
}
