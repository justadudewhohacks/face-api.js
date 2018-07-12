import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { Rect } from '../Rect';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { extractParams } from './extractParams';
import { FaceLandmarks5 } from './FaceLandmarks5';
import { getSizesForScale } from './getSizesForScale';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
import { MtcnnResult, NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public async forwardInput(
    input: NetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    maxNumScales: number = 10,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): Promise<{ results: MtcnnResult[], stats: any }> {

    const { params } = this

    if (!params) {
      throw new Error('Mtcnn - load model before inference')
    }

    const inputTensor = input.inputs[0]
    const inputCanvas = input.canvases[0]

    if (!inputCanvas) {
      throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.')
    }

    const stats: any = {}

    const tsTotal = Date.now()

    const imgTensor = tf.tidy(() =>
      bgrToRgbTensor(
        tf.expandDims(inputTensor).toFloat() as tf.Tensor4D
      )
    )

    const onReturn = (results: any) => {
      // dispose tensors on return
      imgTensor.dispose()
      input.dispose()
      stats.total = Date.now() - tsTotal
      return results
    }

    const [height, width] = imgTensor.shape.slice(1)

    const scales = pyramidDown(minFaceSize, scaleFactor, [height, width])
      .filter(scale => {
        const sizes = getSizesForScale(scale, [height, width])
        return Math.min(sizes.width, sizes.height) > 48
      })
      .slice(0, maxNumScales)

    stats.scales = scales
    stats.pyramid = scales.map(scale => getSizesForScale(scale, [height, width]))

    let ts = Date.now()
    const out1 = await stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)
    stats.total_stage1 = Date.now() - ts

    if (!out1.boxes.length) {
      return onReturn({ results: [], stats })
    }

    stats.stage2_numInputBoxes = out1.boxes.length
    // using the inputCanvas to extract and resize the image patches, since it is faster
    // than doing this on the gpu
    ts = Date.now()
    const out2 = await stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)
    stats.total_stage2 = Date.now() - ts

    if (!out2.boxes.length) {
      return onReturn({ results: [], stats })
    }

    stats.stage3_numInputBoxes = out2.boxes.length

    ts = Date.now()
    const out3 = await stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)
    stats.total_stage3 = Date.now() - ts

    const results = out3.boxes.map((box, idx) => ({
      faceDetection: new FaceDetection(
        out3.scores[idx],
        new Rect(
          box.left / width,
          box.top / height,
          box.width / width,
          box.height / height
        ),
        {
          height,
          width
        }
      ),
      faceLandmarks: new FaceLandmarks5(
        out3.points[idx].map(pt => pt.div(new Point(width, height))),
        { width, height }
      )
    }))

    return onReturn({ results, stats })
  }

  public async forward(
    input: TNetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    maxNumScales: number = 10,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): Promise<MtcnnResult[]> {
    return (
      await this.forwardInput(
        await toNetInput(input, true, true),
        minFaceSize,
        scaleFactor,
        maxNumScales,
        scoreThresholds
      )
    ).results
  }

  public async forwardWithStats(
    input: TNetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    maxNumScales: number = 10,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): Promise<{ results: MtcnnResult[], stats: any }> {
    return this.forwardInput(
      await toNetInput(input, true, true),
      minFaceSize,
      scaleFactor,
      maxNumScales,
      scoreThresholds
    )
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}