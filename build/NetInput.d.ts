import * as tf from '@tensorflow/tfjs-core';
import { Point } from './Point';
import { TResolvedNetInput, Dimensions } from './types';
export declare class NetInput {
    private _inputs;
    private _canvases;
    private _isManaged;
    private _isBatchInput;
    private _inputDimensions;
    private _paddings;
    private _inputSize;
    constructor(inputs: tf.Tensor4D | Array<TResolvedNetInput>, isBatchInput?: boolean, keepCanvases?: boolean);
    readonly inputs: tf.Tensor3D[];
    readonly canvases: HTMLCanvasElement[];
    readonly isManaged: boolean;
    readonly isBatchInput: boolean;
    readonly batchSize: number;
    readonly inputDimensions: number[][];
    readonly paddings: Point[];
    readonly inputSize: number;
    readonly relativePaddings: Point[];
    readonly reshapedInputDimensions: Dimensions[];
    getInputDimensions(batchIdx: number): number[];
    getInputHeight(batchIdx: number): number;
    getInputWidth(batchIdx: number): number;
    getPaddings(batchIdx: number): Point;
    getRelativePaddings(batchIdx: number): Point;
    getReshapedInputDimensions(batchIdx: number): Dimensions;
    toBatchTensor(inputSize: number, isCenterInputs?: boolean): tf.Tensor4D;
    /**
     *  By setting the isManaged flag, all newly created tensors will be
     *  automatically disposed after the batch tensor has been created
     */
    managed(): this;
    dispose(): void;
}
