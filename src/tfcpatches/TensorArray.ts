import * as tf from '@tensorflow/tfjs-core';

export class TensorArray {
  private _tensors: tf.Tensor[] | undefined

  constructor(
    private _size: number,
    private _dtype: tf.DataType = null,
    private _elementShape: number[] = null,
    private _dynamicSize: boolean = false,
    private _clearAfterRead: boolean = true,
    private _identicalElementShapes: boolean = false,
    private _tensorArrayName: string = null
  ) {
    if (_size) {
      this._tensors = Array(_size).fill(0).map(_ => tf.scalar(0))
    }
  }

  public scatter(indices: tf.Tensor1D, value: tf.Tensor, unusedFlow: tf.Scalar): tf.Scalar {
    if (indices.shape.length !== 1) {
      throw new Error(`scatter - expected rank of indices (${indices.shape.length}) to be 1`)
    }
    if (indices.shape[0] > this._size) {
      throw new Error(`scatter - expected indices.shape[0] (${indices.shape[0]}) to be >= this._size (${this.size})`)
    }
    if (indices.shape[0] !== value.shape[0]) {
      throw new Error(`scatter - expected indices.shape[0] (${indices.shape[0]}) to equal value.shape[0] (${value.shape[0]})`)
    }

    const unstacked = tf.unstack(value, 0)
    Array.from(indices.dataSync()).forEach((idx, i) => {
      this._tensors[idx] = unstacked[i]
    })

    const unusedFlowOut = tf.scalar(0)
    return unusedFlowOut
  }

  public gather(indices: tf.Tensor1D, unusedFlow: tf.Scalar, dtype?: tf.DataType, elementShape?: number[]) : tf.Tensor {
    const tensors = Array.from(indices.dataSync()).map(idx => this._tensors[idx])
    return tf.concat(tensors)
  }

  public size(unusedFlow: tf.Scalar) {
    return this._size
  }
}