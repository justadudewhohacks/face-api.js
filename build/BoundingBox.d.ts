import { Rect } from './Rect';
export declare class BoundingBox {
    private _left;
    private _top;
    private _right;
    private _bottom;
    constructor(_left: number, _top: number, _right: number, _bottom: number);
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly width: number;
    readonly height: number;
    toSquare(): BoundingBox;
    round(): BoundingBox;
    padAtBorders(imageHeight: number, imageWidth: number): {
        dy: number;
        edy: number;
        dx: number;
        edx: number;
        y: number;
        ey: number;
        x: number;
        ex: number;
        w: number;
        h: number;
    };
    calibrate(region: BoundingBox): BoundingBox;
    toRect(): Rect;
}
