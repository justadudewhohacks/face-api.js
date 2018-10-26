import { TinyYolov2SizeType } from 'tfjs-tiny-yolov2';

import { createTinyYolov2, fetchImage, TinyYolov2 } from '../../../src';
import { expectFaceDetections } from '../../expectFaceDetections';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectedTinyYolov2Boxes } from './expectedBoxes';

describe('tinyYolov2.locateFaces, with separable convolutions', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withTinyYolov2: { quantized: true } }, ({ tinyYolov2 }) => {

    it('inputSize lg, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2SizeType.LG })

      const expectedScores = [0.85, 0.88, 0.9, 0.85, 0.9, 0.85]
      const maxScoreDelta = 0.01
      const maxBoxDelta = 25

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('inputSize md, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2SizeType.MD })

      const expectedScores = [0.85, 0.8, 0.8, 0.85, 0.85, 0.83]
      const maxScoreDelta = 0.01
      const maxBoxDelta = 34

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('inputSize custom, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: 416 })

      const expectedScores = [0.85, 0.8, 0.8, 0.85, 0.85, 0.83]
      const maxScoreDelta = 0.01
      const maxBoxDelta = 34

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/tiny_yolov2_separable_conv_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = createTinyYolov2(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new TinyYolov2()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

  })

})