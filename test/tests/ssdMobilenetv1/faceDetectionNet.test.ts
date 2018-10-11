import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectDetectionResults } from '../../expectDetectionResults';
import { fetchImage } from '../../../src';
import { expectedSsdBoxes } from './expectedBoxes';

describe('faceDetectionNet', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('uncompressed weights', { withFaceDetectionNet: { quantized: false } }, ({ faceDetectionNet }) => {

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, { minConfidence: 0.8 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(3)

      const expectedScores = [-1, -1, 0.98, 0.88, 0.81, -1]
      const maxBoxDelta = 3

      expectDetectionResults(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.57, 0.74, 0.98, 0.88, 0.81, 0.58]
      const maxBoxDelta = 3

      expectDetectionResults(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

  })

  describeWithNets('quantized weights', { withFaceDetectionNet: { quantized: true } }, ({ faceDetectionNet }) => {

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, { minConfidence: 0.8 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(4)

      const expectedScores = [-1, 0.81, 0.97, 0.88, 0.84, -1]
      const maxBoxDelta = 4

      expectDetectionResults(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.54, 0.81, 0.97, 0.88, 0.84, 0.61]
      const maxBoxDelta = 5

      expectDetectionResults(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/ssd_mobilenetv1_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = faceapi.createFaceDetectionNet(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new faceapi.FaceDetectionNet()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

  })

})