export declare type TMediaElement = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
export declare type TNetInputArg = string | TMediaElement;
export declare type TNetInput = TNetInputArg | Array<TNetInputArg>;
export declare type Dimensions = {
    width: number;
    height: number;
};
export declare type DrawBoxOptions = {
    lineWidth?: number;
    color?: string;
};
export declare type DrawTextOptions = {
    lineWidth?: number;
    fontSize?: number;
    fontStyle?: string;
    color?: string;
};
export declare type DrawLandmarksOptions = {
    lineWidth?: number;
    color?: string;
};
export declare type DrawOptions = {
    lineWidth: number;
    fontSize: number;
    fontStyle: string;
    color: string;
};
