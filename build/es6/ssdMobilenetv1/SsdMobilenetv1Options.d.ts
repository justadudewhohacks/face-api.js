export interface ISsdMobilenetv1Options {
    minConfidence?: number;
    maxResults?: number;
}
export declare class SsdMobilenetv1Options {
    protected _name: string;
    private _minConfidence;
    private _maxResults;
    constructor({minConfidence, maxResults}?: ISsdMobilenetv1Options);
    readonly minConfidence: number;
    readonly maxResults: number;
}
