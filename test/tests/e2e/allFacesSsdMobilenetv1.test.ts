import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, expectRectClose, expectPointClose } from '../../utils';
import { expectedSsdBoxes } from './expectedResults';
import { NetInput } from '../../../src/NetInput';
import { toNetInput } from '../../../src';
import * as tf from '@tensorflow/tfjs-core';
import { Point } from '../../../src/Point';

describe('allFacesSsdMobilenetv1', () => {

  let imgEl: HTMLImageElement
  let facesFaceLandmarkPositions: Point[][]
  let facesFaceDescriptors: number[][]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
    facesFaceLandmarkPositions = await (await fetch('base/test/data/facesFaceLandmarkPositions.json')).json()
    facesFaceDescriptors = await (await fetch('base/test/data/facesFaceDescriptorsSsd.json')).json()
  })

  describeWithNets('computes full face descriptions', { withAllFacesSsdMobilenetv1: true }, ({ allFacesSsdMobilenetv1 }) => {

    const expectedScores = [0.97, 0.88, 0.83, 0.82, 0.59, 0.52]
    const maxBoxDelta = 5
    const maxLandmarkPointsDelta = 1

    it('scores > 0.8', async () => {
      const results = await allFacesSsdMobilenetv1(imgEl, 0.8)

      expect(results.length).toEqual(4)
      results.forEach(({ detection, landmarks, descriptor }, i) => {
        expect(detection.getImageWidth()).toEqual(imgEl.width)
        expect(detection.getImageHeight()).toEqual(imgEl.height)
        expect(detection.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(detection.getBox(), expectedSsdBoxes[i], maxBoxDelta)
        landmarks.getPositions().forEach((pt, j) => expectPointClose(pt, facesFaceLandmarkPositions[i][j], maxLandmarkPointsDelta))
        expect(descriptor).toEqual(new Float32Array(facesFaceDescriptors[i]))
      })
    })

    it('scores > 0.5', async () => {
      const results = await allFacesSsdMobilenetv1(imgEl, 0.5)

      expect(results.length).toEqual(6)
      results.forEach(({ detection, landmarks, descriptor }, i) => {
        expect(detection.getImageWidth()).toEqual(imgEl.width)
        expect(detection.getImageHeight()).toEqual(imgEl.height)
        expect(detection.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(detection.getBox(), expectedSsdBoxes[i], maxBoxDelta)
        landmarks.getPositions().forEach((pt, j) => expectPointClose(pt, facesFaceLandmarkPositions[i][j], maxLandmarkPointsDelta))
        expect(descriptor).toEqual(new Float32Array(facesFaceDescriptors[i]))
      })
    })

  })

  describeWithNets('no memory leaks', { withAllFacesSsdMobilenetv1: true }, ({ allFacesSsdMobilenetv1 }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesSsdMobilenetv1(imgEl)
      })
    })

    it('single tf.Tensor3D', async () => {
      const tensor = tf.fromPixels(imgEl)

      await expectAllTensorsReleased(async () => {
        const netInput = (new NetInput([tensor])).managed()
        await allFacesSsdMobilenetv1(netInput)
      })

      tensor.dispose()
    })

    it('single batch size 1 tf.Tensor4Ds', async () => {
      const tensor = tf.tidy(() => tf.fromPixels(imgEl).expandDims()) as tf.Tensor4D

      await expectAllTensorsReleased(async () => {
        await allFacesSsdMobilenetv1(await toNetInput(tensor, true))
      })

      tensor.dispose()
    })

  })


})