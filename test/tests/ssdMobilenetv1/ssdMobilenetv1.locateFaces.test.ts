import * as faceapi from '../../../src';
import { loadImage } from '../../env';
import { expectFaceDetections } from '../../expectFaceDetections';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectedSsdBoxes } from './expectedBoxes';

describe('ssdMobilenetv1.locateFaces', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withSsdMobilenetv1: { quantized: true } }, ({ ssdMobilenetv1 }) => {

    it('scores > 0.7', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.7 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(4)

      const expectedScores = [-1, 0.81, 0.97, 0.88, 0.84, -1]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 4

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.54, 0.81, 0.97, 0.88, 0.84, 0.61]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 5

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

  })

})