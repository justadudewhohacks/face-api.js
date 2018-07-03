import * as tf from '@tensorflow/tfjs-core';

import { isTensor3D, isTensor4D } from './commons/isTensor';
import { padToSquare } from './padToSquare';
import { Point } from './Point';
import { TResolvedNetInput } from './types';
import { createCanvasFromMedia } from './utils';

export class NetInput {
  private _inputs: tf.Tensor3D[] = []
  private _isManaged: boolean = false
  private _isBatchInput: boolean = false

  private _inputDimensions: number[][] = []
  private _paddings: Point[] = []

  constructor(
    inputs: tf.Tensor4D | Array<TResolvedNetInput>,
    isBatchInput: boolean = false
  ) {
    if (isTensor4D(inputs)) {
      this._inputs = tf.unstack(inputs as tf.Tensor4D) as tf.Tensor3D[]
    }

    if (Array.isArray(inputs)) {
      this._inputs = inputs.map(input => {
        if (isTensor3D(input)) {
          // TODO: make sure not to dispose original tensors passed in by the user
          return tf.clone(input as tf.Tensor3D)
        }

        if (isTensor4D(input)) {
          const shape = (input as tf.Tensor4D).shape
          const batchSize = shape[0]
          if (batchSize !== 1) {
            throw new Error(`NetInput - tf.Tensor4D with batchSize ${batchSize} passed, but not supported in input array`)
          }

          return (input as tf.Tensor4D).reshape(shape.slice(1) as [number, number, number]) as tf.Tensor3D
        }

        return tf.fromPixels(
          input instanceof HTMLCanvasElement ? input : createCanvasFromMedia(input as HTMLImageElement | HTMLVideoElement)
        )
      })
    }

    this._isBatchInput = this.batchSize > 1 || isBatchInput
    this._inputDimensions = this._inputs.map(t => t.shape)
  }

  public get inputs(): tf.Tensor3D[] {
    return this._inputs
  }

  public get isManaged(): boolean {
    return this._isManaged
  }

  public get isBatchInput(): boolean {
    return this._isBatchInput
  }

  public get batchSize(): number {
    return this._inputs.length
  }

  public get inputDimensions(): number[][] {
    return this._inputDimensions
  }

  public get paddings(): Point[] {
    return this._paddings
  }

  public getInputDimensions(batchIdx: number): number[] {
    return this._inputDimensions[batchIdx]
  }

  public getInputHeight(batchIdx: number): number {
    return this._inputDimensions[batchIdx][0]
  }

  public getInputWidth(batchIdx: number): number {
    return this._inputDimensions[batchIdx][1]
  }

  public getPaddings(batchIdx: number): Point {
    return this._paddings[batchIdx]
  }

  public toBatchTensor(inputSize: number, isCenterInputs: boolean = true): tf.Tensor4D {

    return tf.tidy(() => {

      const inputTensors = this._inputs.map((inputTensor: tf.Tensor3D) => {
        const [originalHeight, originalWidth] = inputTensor.shape

        let imgTensor = inputTensor.expandDims().toFloat() as tf.Tensor4D
        imgTensor = padToSquare(imgTensor, isCenterInputs)

        const [heightAfterPadding, widthAfterPadding] = imgTensor.shape.slice(1)

        if (heightAfterPadding !== inputSize || widthAfterPadding !== inputSize) {
          imgTensor = tf.image.resizeBilinear(imgTensor, [inputSize, inputSize])
        }

        this._paddings.push(new Point(
          widthAfterPadding - originalWidth,
          heightAfterPadding - originalHeight
        ))
        return imgTensor
      })

      const batchTensor = tf.stack(inputTensors).as4D(this.batchSize, inputSize, inputSize, 3)

      if (this.isManaged) {
        this.dispose()
      }

      return batchTensor
    })
  }

  /**
   *  By setting the isManaged flag, all newly created tensors will be automatically
   *  automatically disposed after the batch tensor has been created
   */
  public managed() {
    this._isManaged = true
    return this
  }

  public dispose() {
    this._inputs.forEach(t => t.dispose())
  }
}