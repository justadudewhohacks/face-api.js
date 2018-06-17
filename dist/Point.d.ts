export interface IPoint {
    x: number;
    y: number;
}
export declare class Point implements IPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(pt: IPoint): Point;
    sub(pt: IPoint): Point;
    mul(pt: IPoint): Point;
    div(pt: IPoint): Point;
}
