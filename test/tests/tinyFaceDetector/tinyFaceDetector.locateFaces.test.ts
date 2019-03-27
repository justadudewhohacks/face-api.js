import * as faceapi from '../../../src';
import { loadImage } from '../../env';
import { expectFaceDetections } from '../../expectFaceDetections';
import { describeWithBackend, describeWithNets } from '../../utils';
import { expectedTinyFaceDetectorBoxes } from './expectedBoxes';

describeWithBackend('tinyFaceDetector.locateFaces', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withTinyFaceDetector: { quantized: true } }, ({ tinyFaceDetector }) => {

    it('inputSize 320, finds all faces', async () => {
      const detections = await tinyFaceDetector.locateFaces(imgEl, { inputSize: 320 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.77, 0.75, 0.88, 0.77, 0.83, 0.85]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 40

      expectFaceDetections(detections, expectedTinyFaceDetectorBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('inputSize 416, finds all faces', async () => {
      const detections = await tinyFaceDetector.locateFaces(imgEl, { inputSize: 416 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.7, 0.82, 0.93, 0.86, 0.79, 0.84]
      const maxScoreDelta = 0.05
      const maxBoxDelta = 5

      expectFaceDetections(detections, expectedTinyFaceDetectorBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

  })

})