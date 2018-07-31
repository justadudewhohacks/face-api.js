import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, expectRectClose } from '../../utils';
import { expectedSsdBoxes } from './expectedResults';

describe('faceDetectionNet', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  describeWithNets('uncompressed weights', { withFaceDetectionNet: { quantized: false } }, ({ faceDetectionNet }) => {

    const expectedScores = [0.98, 0.89, 0.82, 0.75, 0.58, 0.55]
    const maxBoxDelta = 1

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(3)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedSsdBoxes[i], maxBoxDelta)
      })
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, 0.5) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedSsdBoxes[i], maxBoxDelta)
      })
    })

  })

  describeWithNets('quantized weights', { withFaceDetectionNet: { quantized: true } }, ({ faceDetectionNet }) => {

    const expectedScores = [0.97, 0.88, 0.83, 0.82, 0.59, 0.52]
    const maxBoxDelta = 5

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(4)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedSsdBoxes[i], maxBoxDelta)
      })
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, 0.5) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedSsdBoxes[i], maxBoxDelta)
      })
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