import * as faceapi from '../../../src';
import { getTestEnv } from '../../env';
import { expectFaceDetections } from '../../expectFaceDetections';
import { describeWithBackend, describeWithNets } from '../../utils';
import { expectedSsdBoxes } from './expectedBoxes';

describeWithBackend('ssdMobilenetv1.locateFaces, uncompressed', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await getTestEnv().loadImage('test/images/faces.jpg')
  })

  describeWithNets('uncompressed weights', { withSsdMobilenetv1: { quantized: false } }, ({ ssdMobilenetv1 }) => {

    it('scores > 0.8', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.8 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(3)

      const expectedScores = [-1, -1, 0.98, 0.88, 0.81, -1]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 5

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.57, 0.76, 0.98, 0.88, 0.81, 0.58]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 5

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

  })

})