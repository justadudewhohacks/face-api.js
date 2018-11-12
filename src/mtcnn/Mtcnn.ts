import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, Point, Rect, TNetInput, toNetInput } from 'tfjs-image-recognition-base';

import { FaceDetection } from '../classes/FaceDetection';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { CELL_SIZE } from './config';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { getSizesForScale } from './getSizesForScale';
import { IMtcnnOptions, MtcnnOptions } from './MtcnnOptions';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
import { NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public async forwardInput(
    input: NetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<{ results: FaceDetectionWithLandmarks<FaceLandmarks5>[], stats: any }> {

    const { params } = this

    if (!params) {
      throw new Error('Mtcnn - load model before inference')
    }

    const inputCanvas = input.canvases[0]

    if (!inputCanvas) {
      throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.')
    }

    const stats: any = {}

    const tsTotal = Date.now()

    const imgTensor = tf.tidy(() =>
      bgrToRgbTensor(
        tf.expandDims(tf.fromPixels(inputCanvas)).toFloat() as tf.Tensor4D
      )
    )

    const onReturn = (results: any) => {
      // dispose tensors on return
      imgTensor.dispose()
      stats.total = Date.now() - tsTotal
      return results
    }

    const [height, width] = imgTensor.shape.slice(1)

    const {
      minFaceSize,
      scaleFactor,
      maxNumScales,
      scoreThresholds,
      scaleSteps
    } = new MtcnnOptions(forwardParams)

    const scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width]))
      .filter(scale => {
        const sizes = getSizesForScale(scale, [height, width])
        return Math.min(sizes.width, sizes.height) > CELL_SIZE
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

    const results = out3.boxes.map((box, idx) => new FaceDetectionWithLandmarks<FaceLandmarks5>(
      new FaceDetection(
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
      new FaceLandmarks5(
        out3.points[idx].map(pt => pt.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height))),
        { width: box.width, height: box.height }
      )
    ))

    return onReturn({ results, stats })
  }

  public async forward(
    input: TNetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<FaceDetectionWithLandmarks<FaceLandmarks5>[]> {
    return (
      await this.forwardInput(
        await toNetInput(input),
        forwardParams
      )
    ).results
  }

  public async forwardWithStats(
    input: TNetInput,
    forwardParams: IMtcnnOptions = {}
  ): Promise<{ results: FaceDetectionWithLandmarks<FaceLandmarks5>[], stats: any }> {
    return this.forwardInput(
      await toNetInput(input),
      forwardParams
    )
  }

  protected getDefaultModelName(): string {
    return 'mtcnn_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {
    return extractParamsFromWeigthMap(weightMap)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}