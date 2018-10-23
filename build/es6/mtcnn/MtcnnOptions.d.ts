export interface IMtcnnOptions {
    minFaceSize?: number;
    scaleFactor?: number;
    maxNumScales?: number;
    scoreThresholds?: number[];
    scaleSteps?: number[];
}
export declare class MtcnnOptions {
    protected _name: string;
    private _minFaceSize;
    private _scaleFactor;
    private _maxNumScales;
    private _scoreThresholds;
    private _scaleSteps;
    constructor({minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps}?: IMtcnnOptions);
    readonly minFaceSize: number;
    readonly scaleFactor: number;
    readonly maxNumScales: number;
    readonly scoreThresholds: number[];
    readonly scaleSteps: number[] | undefined;
}
