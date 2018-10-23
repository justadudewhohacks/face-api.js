import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectFaceDetections } from '../../expectFaceDetections';
import { fetchImage } from '../../../src';
import { expectedSsdBoxes } from './expectedBoxes';

describe('ssdMobilenetv1.locateFaces', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withSsdMobilenetv1: { quantized: true } }, ({ ssdMobilenetv1 }) => {

    it('scores > 0.8', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.8 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(4)

      const expectedScores = [-1, 0.81, 0.97, 0.88, 0.84, -1]
      const maxBoxDelta = 4

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.54, 0.81, 0.97, 0.88, 0.84, 0.61]
      const maxBoxDelta = 5

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxBoxDelta)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const net = new faceapi.SsdMobilenetv1()
        await net.load('base/weights')
        net.dispose()
      })
    })

  })

})