import * as tf from '@tensorflow/tfjs-core';
import { Point } from './Point';
import { TResolvedNetInput } from './types';
export declare class NetInput {
    private _inputs;
    private _isManaged;
    private _isBatchInput;
    private _inputDimensions;
    private _paddings;
    constructor(inputs: tf.Tensor4D | Array<TResolvedNetInput>, isBatchInput?: boolean);
    readonly inputs: tf.Tensor3D[];
    readonly isManaged: boolean;
    readonly isBatchInput: boolean;
    readonly batchSize: number;
    readonly inputDimensions: number[][];
    readonly paddings: Point[];
    getInputDimensions(batchIdx: number): number[];
    getInputHeight(batchIdx: number): number;
    getInputWidth(batchIdx: number): number;
    getPaddings(batchIdx: number): Point;
    toBatchTensor(inputSize: number, isCenterInputs?: boolean): tf.Tensor4D;
    /**
     *  By setting the isManaged flag, all newly created tensors will be automatically
     *  automatically disposed after the batch tensor has been created
     */
    managed(): this;
    dispose(): void;
}
