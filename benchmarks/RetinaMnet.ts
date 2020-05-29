import * as faceapi from '../src';
import { tf, Point, CtRect } from '../src';
import { range } from '../src/utils/index';
import { Dimensions, IDimensions } from '../src/classes/Dimensions';
import { Box } from '../src/classes/Box';
import { Rect } from '../src/classes/Rect';
import { FaceDetection } from '../src/classes/FaceDetection';
import { IPoint } from '../build/es6/classes/Point';
import { bgrToRgbTensor } from '../src/mtcnn/bgrToRgbTensor';
import { nonMaxSuppression } from '../src/ops';

const batchNormOptionals = new faceapi.layers.BatchNormOptionals(true, true, 1e-05)

class Mnet extends faceapi.layers.ComposedLayer<tf.Tensor4D, tf.Tensor4D[]>  {
  private _convIn: faceapi.layers.Convolution
  private _stage1Layers: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _stage2Layers: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]
  private _stage3Layers: faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate[]

  constructor(name: string) {
    super(name)
    this._convIn = new faceapi.layers.Convolution(this._withNamePath('stage_0/conv_0'), [2, 2], 3, 8, 3, batchNormOptionals)
    this._stage1Layers = this._createStageLayers(0, [[8, 16, 1], [16, 32, 2], [32, 32, 1], [32, 64, 2], [64, 64, 1]], 1)
    this._stage2Layers = this._createStageLayers(1, [[64, 128, 2], ...range(5).map(() => [128, 128, 1])])
    this._stage3Layers = this._createStageLayers(2, [[128, 256, 2], [256, 256, 1]])
}

  private _createStageLayers(stageIdx: number, layerDescriptions: number[][], startIdx: number = 0) {
    return layerDescriptions.map(([cIn, cOut, stride], i) => new faceapi.layers.DepthwiseSeparableConvolutionWithIntermediate(
      this._withNamePath(`stage_${stageIdx}/conv_${i + startIdx}`), [stride, stride], cIn, cOut, batchNormOptionals
    ))
  }

  protected _getLayers(): faceapi.layers.ILayer[] {
    return [this._convIn, ...this._stage1Layers, ...this._stage2Layers, ...this._stage3Layers]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D[] {
    let tmp = tf.relu(this._convIn.apply(x))
    this._stage1Layers.forEach(layer => tmp = tf.relu(layer.apply(tmp)))
    const s1 = tmp
    this._stage2Layers.forEach(layer => tmp = tf.relu(layer.apply(tmp)))
    const s2 = tmp
    this._stage3Layers.forEach(layer => tmp = tf.relu(layer.apply(tmp)))
    const s3 = tmp
    return [s1, s2, s3]
  }
}

export class FpnConfig {
  private _anchors: Dimensions[][]
  private _varianceCoord: number
  private _varianceScale: number
  private _nmsThreshold: number


  constructor(anchors: Dimensions[][], strides: number[], varianceCoord: number, varianceScale: number, nmsThreshold: number) {
    if (anchors.length !== strides.length) {
      throw new Error(`FpnConfig.constructor - expected the number of anchors (${anchors.length}) to match the number of strides (${strides.length})`)
    }
    this._anchors = anchors
    this._varianceCoord = varianceCoord
    this._varianceScale = varianceScale
    this._nmsThreshold = nmsThreshold
  }

  public get varianceCoord() : number {
    return this._varianceCoord
  }

  public get varianceScale() : number {
    return this._varianceScale
  }

  public get nmsThreshold() : number {
    return this._nmsThreshold
  }

  public getStageIndices() {
    return range(this._anchors.length)
  }

  public getAnchorIndices(stageIdx: number) {
    return range(this._anchors[stageIdx].length)
  }

  public getAnchor(stageIdx: number, anchorIdx: number): Dimensions {
    return this._anchors[stageIdx][anchorIdx].clone()
  }
}

export class RetinaMnetFpnConfig extends FpnConfig {
  constructor() {
    super(
      [[10, 20], [32, 64], [128, 256]].map(stage => stage.map(dim => new Dimensions(dim, dim))),
      [8, 16, 32], 0.1, 0.2, 0.3
    )
  }
}

export class RetinaMnet extends faceapi.NeuralNetwork<[tf.Tensor3D[][], tf.Tensor4D[][], tf.Tensor4D[][]]> {

  private _mnet: Mnet
  private _topDown: faceapi.layers.TopDown
  private _sshModules: faceapi.layers.SshDetectionModule[]
  private _scoreConvs: faceapi.layers.Convolution[]
  private _boxConvs: faceapi.layers.Convolution[]
  private _landmarkConvs: faceapi.layers.Convolution[]

  private _inputSize: number
  private _fpnConfig: FpnConfig = new RetinaMnetFpnConfig()

  constructor(inputSize: number) {
    super('RetinaMnet')
    this._inputSize = inputSize

    this._mnet = new Mnet('mnet')
    this._topDown = new faceapi.layers.TopDown('fpn', [64, 64, 64], 64, null, false, batchNormOptionals)
    this._sshModules = this._fpnConfig.getStageIndices().map(stageIdx =>
      new faceapi.layers.SshDetectionModule(`ssh_${stageIdx}`, 64, 64, batchNormOptionals))
    this._scoreConvs = this._fpnConfig.getStageIndices().map(stageIdx =>
      new faceapi.layers.Convolution(`conv_score_stage_${stageIdx}`, [1, 1], 64, 2 * this._fpnConfig.getAnchorIndices(stageIdx).length, 1, null, false))
    this._boxConvs = this._fpnConfig.getStageIndices().map(stageIdx =>
      new faceapi.layers.Convolution(`conv_box_stage_${stageIdx}`, [1, 1], 64, 4 * this._fpnConfig.getAnchorIndices(stageIdx).length, 1, null, false))
    this._landmarkConvs = this._fpnConfig.getStageIndices().map(stageIdx =>
      new faceapi.layers.Convolution(`conv_landmarks_stage_${stageIdx}`, [1, 1], 64, 10 * this._fpnConfig.getAnchorIndices(stageIdx).length, 1, null, false))
  }

  protected _getDefaultModelName(): string {
    return 'retina_mnet';
  }

  protected _getParamLayers(): faceapi.layers.ILayer[] {
    return [
      this._mnet,
      this._topDown,
      ...this._sshModules,
      ...this._scoreConvs,
      ...this._boxConvs,
      ...this._landmarkConvs
    ]
  }

  protected _forward(input: faceapi.NetInput): [tf.Tensor3D[][], tf.Tensor4D[][], tf.Tensor4D[][]] {
    const batchTensor = bgrToRgbTensor(input.toBatchTensor(this._inputSize, true))

    let stageOutputs = this._mnet.apply(batchTensor)
    stageOutputs = this._topDown.apply(stageOutputs)
    stageOutputs = this._sshModules.map((ssh, idx) => ssh.apply(stageOutputs[idx]))

    const outScores = this._scoreConvs
      .map((conv, stageIdx) => conv.apply(stageOutputs[stageIdx]))
      .map((out, stageIdx) => this._reshapeAnchorOutputs(out, stageIdx))
      .map(out => tf.softmax(out))
      .map(out => tf.unstack(out, 4)[1])
    const outBoxes = this._boxConvs
      .map((conv, stageIdx) => conv.apply(stageOutputs[stageIdx]))
      .map((out, stageIdx) => this._reshapeAnchorOutputs(out, stageIdx))
    const outLandmarks = this._landmarkConvs
      .map((conv, stageIdx) => conv.apply(stageOutputs[stageIdx]))
      .map((out, stageIdx) => this._reshapeAnchorOutputs(out, stageIdx))

    const outputs = [outScores, outBoxes, outLandmarks]
      .map(stageOutputs => stageOutputs.map(anchorOutputs => tf.unstack(anchorOutputs, 3)))
    return outputs as [tf.Tensor3D[][], tf.Tensor4D[][], tf.Tensor4D[][]]
  }

  public async detect(input: faceapi.TNetInput, minScore: number = 0.5): any {
    const netInput = await faceapi.toNetInput(input)
    const netOutput = this.forwardSync(netInput)

    /**
    for (let scores of netOutput[0]) {
      for (let sc of scores) {
        console.log(sc.shape, tf.sum(tf.abs(sc)).dataSync())
        const data = Array.from(sc.dataSync())
        console.log(data.filter(sc => sc > 0.5))
      }
    } */

    window['foo'] = []
    const batchOutputs = range(netInput.batchSize).map(() => [])
    for (const stageIdx of this._fpnConfig.getStageIndices()) {
      for (const anchorIdx of this._fpnConfig.getAnchorIndices(stageIdx)) {
        const batchData = await Promise.all(
          netOutput.map(out => out[stageIdx][anchorIdx].array()) as any
        )
        netOutput.forEach(out => out[stageIdx][anchorIdx].dispose())
        for (const batchIdx of range(netInput.batchSize)) {
          const [anchorScores, anchorBoxes, anchorLandmarks] = batchData.map(batch => batch[batchIdx])
          const gridY = anchorScores.length
          for (const gy of range(gridY)) {
            const gridX = anchorScores[gy].length
            for (const gx of range(gridX)) {
              const score = anchorScores[gy][gx]
              const coords = anchorBoxes[gy][gx]
              if (score > minScore) {
                window['foo'].push([score, coords])
                const relAnchorPosition = new Point(gx / gridX, gy / gridY)
                const inputDims = new Dimensions(this._inputSize, this._inputSize)
                const relAnchorDims = this._fpnConfig.getAnchor(stageIdx, anchorIdx).div(inputDims)
                const decodedBox = this.decodeBox(coords, relAnchorPosition, relAnchorDims)
                // debug
                //const decodedBox = new Rect(relAnchorPosition.x, relAnchorPosition.y, relAnchorDims.width, relAnchorDims.height)
                const box = this.projectRectToInputSize(decodedBox, netInput.getReshapedInputDimensions(batchIdx), this._inputSize)
                const detection = new FaceDetection(score, box, inputDims)
                batchOutputs[batchIdx].push({ stageIdx, gx, gy, score, detection, landmarks: anchorLandmarks[gx][gy] })
              }
            }
          }
        }
      }
    }
    console.log(window['foo'])

    // NMS
    const filteredBatchOutputs = batchOutputs.map(outputs =>
      nonMaxSuppression(
        outputs.map(out => out.detection.box),
        outputs.map(out => out.detection.score),
        this._fpnConfig.nmsThreshold
      ).map(idx => outputs[idx])
    )

    return filteredBatchOutputs
  }

  private decodeBox(encodedBox: number[], relAnchorPosition: IPoint, relAnchorDims: IDimensions): Rect {
    const { varianceCoord, varianceScale } = this._fpnConfig
    let [lx, ly, scaleW, scaleH] = encodedBox
    const width = relAnchorDims.width * Math.exp(scaleW * varianceScale)
    const height = relAnchorDims.height * Math.exp(scaleH * varianceScale)
    const ctx = relAnchorPosition.x + (lx * varianceCoord * relAnchorDims.width)
    const cty = relAnchorPosition.y + (ly * varianceCoord * relAnchorDims.height)
    return new Rect(ctx, cty, width, height, true)
  }

  private projectRectToInputSize(input: Rect, dimsWithoutPadding: Dimensions, inputSize: number) {
    const center = this.projectPointToInputSize(input.ct, dimsWithoutPadding, inputSize)
    const newDims = input.dims.mul(inputSize).div(dimsWithoutPadding)
    return new CtRect(center.x, center.y, newDims.width, newDims.height)
  }

  private projectPointToInputSize({ x, y }: IPoint, dimsWithoutPadding: IDimensions, inputSize: number) {
    const diff = dimsWithoutPadding.height - dimsWithoutPadding.width
    const paddingX = Math.max(diff, 0)
    const paddingY = Math.max(-diff, 0)
    return new Point(
      (x * inputSize - paddingX / 2) / dimsWithoutPadding.width,
      (y * inputSize - paddingY / 2) / dimsWithoutPadding.height
    )
  }

  private _reshapeAnchorOutputs(t: tf.Tensor4D, stageIdx: number): tf.Tensor5D {
    const [batchSize, height, width, channels] = t.shape
    return t.reshape([batchSize, height, width, this._fpnConfig.getAnchorIndices(stageIdx).length, channels / 2])
  }
}