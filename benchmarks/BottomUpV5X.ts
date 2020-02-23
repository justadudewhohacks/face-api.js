import * as faceapi from '../src';
import { tf } from '../src';


const dwdown = true
function createConvDown(name: string, cIn: number, cOut: number): faceapi.layers.Layer {
  return dwdown
    ? new faceapi.layers.DepthwiseSeparableConvolution(name, [2, 2], cIn, cOut)
    : new faceapi.layers.Convolution(name, [2, 2], cIn, cOut, 3)
}

export class BottomUpV5X extends faceapi.NeuralNetwork {

  private _convDown320: faceapi.layers.Layer
  private _mainModules320: faceapi.layers.XceptionMainModule[]
  private _convDown160: faceapi.layers.Layer
  private _mainModules160: faceapi.layers.XceptionMainModule[]
  private _convDown80: faceapi.layers.Layer
  private _mainModules80: faceapi.layers.XceptionMainModule[]
  private _reductionModule40: faceapi.layers.XceptionReductionModule
  private _mainModules40: faceapi.layers.XceptionMainModule[]
  private _reductionModule20: faceapi.layers.XceptionReductionModule
  private _mainModules20: faceapi.layers.XceptionMainModule[]
  private _reductionModule10: faceapi.layers.XceptionReductionModule
  private _mainModules10: faceapi.layers.XceptionMainModule[]
  private _reductionModule5: faceapi.layers.XceptionReductionModule
  private _mainModules5: faceapi.layers.XceptionMainModule[]

  private _topDown: faceapi.layers.TopDown
  private _inputSize: number

  constructor(
    inputSize: number = 640,
    numMainModules: number[] = [0, 0, 4, 3, 1, 0, 0],
    channels: number[] = [32, 32, 64, 64, 64, 64, 64],
    topDownOutChannels: number = 64
  ) {
    super('TinyXception')
    this._inputSize = inputSize
    this._convDown320 = new faceapi.layers.Convolution('bottom_up/conv_down_320', [2, 2], 3, channels[0], 3)
    //this._convDown320 = createConvDown('bottom_up/conv_down_320', 3, channels[0])
    this._mainModules320 = faceapi.utils.range(numMainModules[0], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_320${idx}`, 32))
    this._convDown160 = createConvDown('bottom_up/conv_down_160', channels[0], channels[1])
    this._mainModules160 = faceapi.utils.range(numMainModules[1], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_160${idx}`, channels[1]))
    this._convDown80 = createConvDown('bottom_up/conv_down_80', channels[1], channels[2])
    this._mainModules80 = faceapi.utils.range(numMainModules[2], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_80_${idx}`, channels[2]))
    this._reductionModule40 = new faceapi.layers.XceptionReductionModule('bottom_up/reduction_module_40', channels[2], channels[3])
    this._mainModules40 = faceapi.utils.range(numMainModules[3], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_40_${idx}`, channels[3]))
    this._reductionModule20 = new faceapi.layers.XceptionReductionModule('bottom_up/reduction_module_20', channels[3], channels[4])
    this._mainModules20 = faceapi.utils.range(numMainModules[4], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_20_${idx}`, channels[4]))
    this._reductionModule10 = new faceapi.layers.XceptionReductionModule('bottom_up/reduction_module_10', channels[4], channels[5])
    this._mainModules10 = faceapi.utils.range(numMainModules[5], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_10_${idx}`, channels[5]))
    this._reductionModule5 = new faceapi.layers.XceptionReductionModule('bottom_up/reduction_module_5', channels[5], channels[6])
    this._mainModules5 = faceapi.utils.range(numMainModules[6], 0, 1)
      .map(idx => new faceapi.layers.XceptionMainModule(`bottom_up/main_module_5_${idx}`, channels[6]))

    this._topDown = new faceapi.layers.TopDown('top_down', channels.slice(2).reverse(), topDownOutChannels)
    this._getParamLayers().forEach(l => l.initializeParams(num => new Float32Array(Array(num).fill(0))))
  }

  protected _getDefaultModelName(): string {
    return 'test';
  }

  protected _getParamLayers(): faceapi.layers.ILayer[] {
    return [
      this._convDown320,
      ...this._mainModules320,
      this._convDown160,
      ...this._mainModules160,
      this._convDown80,
      ...this._mainModules80,
      this._reductionModule40,
      ...this._mainModules40,
      this._reductionModule20,
      ...this._mainModules20,
      this._reductionModule10,
      ...this._mainModules10,
      this._reductionModule5,
      ...this._mainModules5,
      this._topDown
    ]
  }

  protected _forward(input: faceapi.NetInput): tf.Tensor4D {
    const batchTensor = input.toBatchTensor(this._inputSize, true)
    const meanRgb = [122.782, 117.001, 104.298]
    const normalized = faceapi.normalize(batchTensor, meanRgb).div(tf.scalar(256)) as tf.Tensor4D

    let out = this._convDown320.apply(normalized)
    this._mainModules320.forEach(l => out = l.apply(out))
    out = tf.relu(out)
    out = this._convDown160.apply(out)
    this._mainModules160.forEach(l => out = l.apply(out))
    out = tf.relu(out)

    out = this._convDown80.apply(out)
    this._mainModules80.forEach(l => out = l.apply(out))
    const out80 = out

    out = this._reductionModule40.apply(out)
    this._mainModules40.forEach(l => out = l.apply(out))
    const out40 = out

    out = this._reductionModule20.apply(out)
    this._mainModules20.forEach(l => out = l.apply(out))
    const out20 = out

    out = this._reductionModule10.apply(out)
    this._mainModules10.forEach(l => out = l.apply(out))
    const out10 = out

    out = this._reductionModule5.apply(out)
    this._mainModules5.forEach(l => out = l.apply(out))
    const out5 = out

    let outputs = [out5, out10, out20, out40, out80]
    outputs = this._topDown.apply(outputs)
    return outputs
  }
}