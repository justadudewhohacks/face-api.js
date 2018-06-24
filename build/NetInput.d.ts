import { Dimensions, TNetInput } from './types';
export declare class NetInput {
    private _canvases;
    constructor(mediaArg: TNetInput, dims?: Dimensions);
    private initCanvas(media, dims?);
    readonly canvases: HTMLCanvasElement[];
    readonly width: number;
    readonly height: number;
    readonly dims: Dimensions | null;
}
