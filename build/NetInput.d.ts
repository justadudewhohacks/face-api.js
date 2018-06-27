import { Dimensions, TMediaElement } from './types';
export declare class NetInput {
    private _canvases;
    constructor(medias: Array<TMediaElement>, dims?: Dimensions);
    private initCanvas(media, dims?);
    readonly canvases: HTMLCanvasElement[];
    readonly width: number;
    readonly height: number;
    readonly dims: Dimensions | null;
}
