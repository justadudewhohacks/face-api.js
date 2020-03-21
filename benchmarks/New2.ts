import * as faceapi from '../src';
import { tf } from '../src';

export class New2 extends faceapi.NeuralNetwork {

  private _convDown320: faceapi.layers.Convolution
  private _convs320: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _convDown160: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate
  private _convs160: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _convDown80: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate
  private _convs80: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _convDown40: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate
  private _convs40: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _convDown20: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate
  private _convs20: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]

  private _detectionModules: faceapi.layers.SshDetectionModule[]

  private _topDown: faceapi.layers.TopDown
  private _inputSize: number

  constructor(
    inputSize: number = 640,
    withBn: boolean = true,
    numConvs: number[] = [1, 1, 3, 2, 1],
    channels: number[] = [16, 32, 64, 128, 256],
    topDownOutChannels: number = 64,
    detectorChannels: number[] = [64, 64, 64, 64, 64]
  ) {
    super('TinyXception')
    this._inputSize = inputSize

    const bnOpts = withBn ? new faceapi.layers.BatchNormOptionals() : null

    this._convDown320 = new faceapi.layers.Convolution('bottom_up/conv_down_320', [2, 2], 3, channels[0], 3, bnOpts)
    //this._convDown320 = createConvDown('bottom_up/conv_down_320', 3, channels[0])
    this._convs320 = faceapi.utils.range(numConvs[0], 0, 1)
      .map(idx => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(`bottom_up/conv_320${idx}`, [1, 1], channels[0], channels[0], bnOpts))
    this._convDown160 = new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate('bottom_up/conv_down_160', [2, 2],  channels[0], channels[1], bnOpts)
    this._convs160 = faceapi.utils.range(numConvs[1], 0, 1)
      .map(idx => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(`bottom_up/conv_160${idx}`, [1, 1], channels[1], channels[1], bnOpts))
    this._convDown80 = new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate('bottom_up/conv_down_80', [2, 2], channels[1], channels[2], bnOpts)
    this._convs80 = faceapi.utils.range(numConvs[2], 0, 1)
      .map(idx => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(`bottom_up/conv_80_${idx}`, [1, 1], channels[2], channels[2], bnOpts))
    this._convDown40 = new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate('bottom_up/conv_down_40', [2, 2], channels[2], channels[3], bnOpts)
    this._convs40 = faceapi.utils.range(numConvs[3], 0, 1)
      .map(idx => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(`bottom_up/conv_40_${idx}`, [1, 1], channels[3], channels[3], bnOpts))
    this._convDown20 = new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate('bottom_up/conv_down_20', [2, 2], channels[3], channels[4], bnOpts)
    this._convs20 = faceapi.utils.range(numConvs[4], 0, 1)
      .map(idx => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(`bottom_up/conv_20_${idx}`, [1, 1], channels[4], channels[4], bnOpts))

    const outChannels = channels.slice(2).reverse()
    this._topDown = topDownOutChannels
      ? new faceapi.layers.TopDown('top_down', outChannels, topDownOutChannels, null, bnOpts)
      : null


    this._detectionModules = detectorChannels
      ? detectorChannels.map((channels, stage_idx) => channels
        ? new faceapi.layers.SshDetectionModule(`det_stage_${stage_idx}`, topDownOutChannels, channels)
        : null
      ) : null
    this._getParamLayers().forEach(l => l.initializeParams(num => new Float32Array(Array(num).fill(0))))
  }

  protected _getDefaultModelName(): string {
    return 'test';
  }

  protected _getParamLayers(): faceapi.layers.ILayer[] {
    return [
      this._convDown320,
      ...this._convs320,
      this._convDown160,
      ...this._convs160,
      this._convDown80,
      ...this._convs80,
      this._convDown40,
      ...this._convs40,
      this._convDown20,
      ...this._convs20,
      this._topDown,
      ...(this._detectionModules || [])
    ].filter(l => !!l)
  }

  protected _forward(input: faceapi.NetInput): tf.Tensor4D {
    const batchTensor = input.toBatchTensor(this._inputSize, true)
    const meanRgb = [122.782, 117.001, 104.298]
    const normalized = faceapi.normalize(batchTensor, meanRgb).div(tf.scalar(256)) as tf.Tensor4D

    let out = this._convDown320.apply(normalized)
    this._convs320.forEach(l => out = tf.relu(l.apply(out)))
    out = tf.relu(this._convDown160.apply(out))
    this._convs160.forEach(l => out = tf.relu(l.apply(out)))

    out = tf.relu(this._convDown80.apply(out))
    this._convs80.forEach(l => out = tf.relu(l.apply(out)))
    const out80 = out

    out = tf.relu(this._convDown40.apply(out))
    this._convs40.forEach(l => out = tf.relu(l.apply(out)))
    const out40 = out

    out = tf.relu(this._convDown20.apply(out))
    this._convs20.forEach(l => out = tf.relu(l.apply(out)))
    const out20 = out

    let outputs = [out20, out40, out80]
    if (this._topDown) {
      outputs = this._topDown.apply(outputs)
    }
    if (this._detectionModules) {
      outputs = outputs.map((out, stage_idx) => this._detectionModules[stage_idx]
        ? this._detectionModules[stage_idx].apply(out)
        : out
      )
    }
    return outputs
  }
}