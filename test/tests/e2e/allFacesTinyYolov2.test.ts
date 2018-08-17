import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, expectRectClose, expectPointClose, expectMaxDelta } from '../../utils';
import { expectedTinyYolov2SeparableConvBoxes } from './expectedResults';
import { NetInput } from '../../../src/NetInput';
import { toNetInput } from '../../../src';
import * as tf from '@tensorflow/tfjs-core';
import { Point } from '../../../src/Point';
import { SizeType } from '../../../src/tinyYolov2/types';

describe('allFacesTinyYolov2', () => {

  let imgEl: HTMLImageElement
  let facesFaceLandmarkPositions: Point[][]
  let facesFaceDescriptors: number[][]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
    facesFaceLandmarkPositions = await (await fetch('base/test/data/facesFaceLandmarkPositions.json')).json()
    facesFaceDescriptors = await (await fetch('base/test/data/facesFaceDescriptorsSsd.json')).json()
  })

  describeWithNets('computes full face descriptions', { withAllFacesTinyYolov2: true }, ({ allFacesTinyYolov2 }) => {


    it('SizeType.LG', async () => {
      const expectedScores = [0.9, 0.9, 0.89, 0.85, 0.85, 0.85]
      const maxBoxDelta = 5
      const maxLandmarkPointsDelta = 10
      const maxDescriptorDelta = 0.06

      const results = await allFacesTinyYolov2(imgEl, { inputSize: SizeType.LG })
      const detectionOrder = [0, 2, 3, 4, 1, 5]

      expect(results.length).toEqual(6)
      results.forEach(({ detection, landmarks, descriptor }, i) => {
        expect(detection.getImageWidth()).toEqual(imgEl.width)
        expect(detection.getImageHeight()).toEqual(imgEl.height)
        expect(detection.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(detection.getBox(), expectedTinyYolov2SeparableConvBoxes[i], maxBoxDelta)
        landmarks.getPositions().forEach((pt, j) => expectPointClose(pt, facesFaceLandmarkPositions[detectionOrder[i]][j], maxLandmarkPointsDelta))
        descriptor.forEach((val, j) => expectMaxDelta(val, facesFaceDescriptors[detectionOrder[i]][j], maxDescriptorDelta))
      })
    })

    it('SizeType.MD', async () => {
      const expectedScores = [0.85, 0.85, 0.84, 0.83, 0.8, 0.8]
      const maxBoxDelta = 17
      const maxLandmarkPointsDelta = 16
      const maxDescriptorDelta = 0.05

      const results = await allFacesTinyYolov2(imgEl, { inputSize: SizeType.MD })
      const boxOrder = [5, 1, 4, 3, 2, 0]
      const detectionOrder = [5, 2, 1, 4, 3, 0]

      expect(results.length).toEqual(6)
      results.forEach(({ detection, landmarks, descriptor }, i) => {
        expect(detection.getImageWidth()).toEqual(imgEl.width)
        expect(detection.getImageHeight()).toEqual(imgEl.height)
        expect(detection.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(detection.getBox(), expectedTinyYolov2SeparableConvBoxes[boxOrder[i]], maxBoxDelta)
        landmarks.getPositions().forEach((pt, j) => expectPointClose(pt, facesFaceLandmarkPositions[detectionOrder[i]][j], maxLandmarkPointsDelta))
        descriptor.forEach((val, j) => expectMaxDelta(val, facesFaceDescriptors[detectionOrder[i]][j], maxDescriptorDelta))
      })
    })

  })

  describeWithNets('no memory leaks', { withAllFacesTinyYolov2: true }, ({ allFacesTinyYolov2 }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesTinyYolov2(imgEl)
      })
    })

    it('single tf.Tensor3D', async () => {
      const tensor = tf.fromPixels(imgEl)

      await expectAllTensorsReleased(async () => {
        const netInput = (new NetInput([tensor])).managed()
        await allFacesTinyYolov2(netInput)
      })

      tensor.dispose()
    })

    it('single batch size 1 tf.Tensor4Ds', async () => {
      const tensor = tf.tidy(() => tf.fromPixels(imgEl).expandDims()) as tf.Tensor4D

      await expectAllTensorsReleased(async () => {
        await allFacesTinyYolov2(await toNetInput(tensor, true))
      })

      tensor.dispose()
    })

  })


})