import * as tf from '@tensorflow/tfjs-core';

export class TensorArray {
  private _tensors: tf.Tensor[]

  constructor(
    size: number,
    private _dtype: tf.DataType | null = null,
    private _elementShape: number[] | null = null,
    private _dynamicSize: boolean = false,
    private _clearAfterRead: boolean = true,
    private _identicalElementShapes: boolean = false,
    private _tensorArrayName: string = ''
  ) {
    this._tensors = size
      ? Array(size).fill(0).map(_ => tf.scalar(0))
      : []
  }

  public scatter(indices: tf.Tensor1D, value: tf.Tensor, unusedFlow: tf.Scalar): tf.Scalar {
    this.expectValidSize('scatter', indices)
    if (indices.shape.length !== 1) {
      throw new Error(`scatter - expected rank of indices (${indices.shape.length}) to be 1`)
    }
    if (indices.shape[0] !== value.shape[0]) {
      throw new Error(`scatter - expected indices.shape[0] (${indices.shape[0]}) to equal value.shape[0] (${value.shape[0]})`)
    }

    const unstacked = tf.unstack(value, 0)
    Array.from(indices.dataSync()).forEach((idx, i) => {
      (this._tensors as tf.Tensor[])[idx] = unstacked[i]
    })

    const unusedFlowOut = tf.scalar(0)
    return unusedFlowOut
  }

  public gather(indices: tf.Tensor1D, unusedFlow: tf.Scalar, dtype?: tf.DataType, elementShape?: number[]) : tf.Tensor {
    this.expectValidSize('gather', indices)
    const tensors = Array.from(indices.dataSync()).map(idx => this._tensors[idx])
    return tf.concat(tensors)
  }

  public size(unusedFlow?: tf.Scalar) {
    return this._tensors.length
  }

  private expectValidSize(methodName: string, indices: tf.Tensor1D) {
    if (!this._tensors) {
      throw new Error('scatter - TensorArray is not initialized')
    }
    if (indices.shape[0] > this._tensors.length) {
      throw new Error(`${methodName} - expected indices.shape[0] (${indices.shape[0]}) to be >= this.size() (${this.size()})`)
    }
  }
}