import * as faceapi from '../src';
import { tf } from '../src';


const dwdown = true
function createConvDown(name: string, cIn: number, cOut: number): faceapi.layers.Layer {
  return dwdown
    ? new faceapi.layers.DepthwiseSeparableConvolution(name, [2, 2], cIn, cOut)
    : new faceapi.layers.Convolution(name, [2, 2], cIn, cOut, 3)
}

class MnetV2MainModule extends faceapi.layers.ComposedLayer  {
  private _bottleneckedConv0: faceapi.layers.BottleneckedConv
  private _bottleneckedConv1: faceapi.layers.BottleneckedConv
  private _bottleneckedConv2: faceapi.layers.BottleneckedConv

  constructor(name: string, channels: number, expansionFactor: number) {
    super(name)
    this._bottleneckedConv0 = new faceapi.layers.BottleneckedConv(this._withNamePath('bottlenecked_conv_0'), channels, expansionFactor, false)
    this._bottleneckedConv1 = new faceapi.layers.BottleneckedConv(this._withNamePath('bottlenecked_conv_1'), channels, expansionFactor, false)
    this._bottleneckedConv2 = new faceapi.layers.BottleneckedConv(this._withNamePath('bottlenecked_conv_2'), channels, expansionFactor, false)
  }

  protected _getLayers(): faceapi.layers.ILayer[] {
    return [this._bottleneckedConv0, this._bottleneckedConv1, this._bottleneckedConv2]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._bottleneckedConv0.apply(x)
    out = this._bottleneckedConv1.apply(out)
    out = this._bottleneckedConv2.apply(out)
    return out
  }
}

class MnetV2ReductionModule extends faceapi.layers.ComposedLayer  {
  private _bottleneckedConv0: faceapi.layers.BottleneckedConv
  private _bottleneckedConv1: faceapi.layers.BottleneckedConv

  constructor(name: string, channels: number, expansionFactor: number) {
    super(name)
    this._bottleneckedConv0 = new faceapi.layers.BottleneckedConv(this._withNamePath('bottlenecked_conv_0'), channels, expansionFactor, true)
    this._bottleneckedConv1 = new faceapi.layers.BottleneckedConv(this._withNamePath('bottlenecked_conv_1'), channels, expansionFactor, false)
  }

  protected _getLayers(): faceapi.layers.ILayer[] {
    return [this._bottleneckedConv0, this._bottleneckedConv1]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._bottleneckedConv0.apply(x)
    out = this._bottleneckedConv1.apply(out)
    return out
  }
}

export class BottomUpV5XMnetV2 extends faceapi.NeuralNetwork {

  private _convDown320: faceapi.layers.Layer
  private _mainModules320: MnetV2MainModule[]
  private _convDown160: faceapi.layers.Layer
  private _mainModules160: MnetV2MainModule[]
  private _convDown80: faceapi.layers.Layer
  private _mainModules80: MnetV2MainModule[]
  private _reductionModule40: MnetV2ReductionModule
  private _mainModules40: MnetV2MainModule[]
  private _reductionModule20: MnetV2ReductionModule
  private _mainModules20: MnetV2MainModule[]
  private _reductionModule10: MnetV2ReductionModule
  private _mainModules10: MnetV2MainModule[]
  private _reductionModule5: MnetV2ReductionModule
  private _mainModules5: MnetV2MainModule[]

  private _topDown: faceapi.layers.TopDown
  private _inputSize: number

  constructor(
    inputSize: number = 640,
    numMainModules: number[] = [0, 0, 4, 3, 1, 0, 0],
    channels: number[] = [16, 16, 16, 16, 16, 16, 16],
    expansionFactors: number[] = [2, 2, 4, 4, 4, 4, 4],
    topDownOutChannels: number = 64
  ) {
    super('BottomUpV5XMnetV2')
    this._inputSize = inputSize
    this._convDown320 = new faceapi.layers.Convolution('bottom_up/conv_down_320', [2, 2], 3, channels[0], 3)
    //this._convDown320 = createConvDown('bottom_up/conv_down_320', 3, channels[0])
    this._mainModules320 = faceapi.utils.range(numMainModules[0], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_320${idx}`, channels[0], expansionFactors[0]))
    this._convDown160 = createConvDown('bottom_up/conv_down_160', channels[0], channels[1])
    this._mainModules160 = faceapi.utils.range(numMainModules[1], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_160${idx}`, channels[1], expansionFactors[1]))
    this._convDown80 = createConvDown('bottom_up/conv_down_80', channels[1], channels[2])
    this._mainModules80 = faceapi.utils.range(numMainModules[2], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_80_${idx}`, channels[2], expansionFactors[2]))
    this._reductionModule40 = new MnetV2ReductionModule('bottom_up/reduction_module_40', channels[2], expansionFactors[3])
    this._mainModules40 = faceapi.utils.range(numMainModules[3], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_40_${idx}`, channels[3], expansionFactors[3]))
    this._reductionModule20 = new MnetV2ReductionModule('bottom_up/reduction_module_20', channels[3], expansionFactors[4])
    this._mainModules20 = faceapi.utils.range(numMainModules[4], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_20_${idx}`, channels[4], expansionFactors[4]))
    this._reductionModule10 = new MnetV2ReductionModule('bottom_up/reduction_module_10', channels[4], expansionFactors[5])
    this._mainModules10 = faceapi.utils.range(numMainModules[5], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_10_${idx}`, channels[5], expansionFactors[5]))
    this._reductionModule5 = new MnetV2ReductionModule('bottom_up/reduction_module_5', channels[5], expansionFactors[6])
    this._mainModules5 = faceapi.utils.range(numMainModules[6], 0, 1)
      .map(idx => new MnetV2MainModule(`bottom_up/main_module_5_${idx}`, channels[6], expansionFactors[6]))

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