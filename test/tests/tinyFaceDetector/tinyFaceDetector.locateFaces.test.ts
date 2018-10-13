import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectFaceDetections } from '../../expectFaceDetections';
import { fetchImage } from '../../../src';
import { expectedTinyFaceDetectorBoxes } from './expectedBoxes';

describe('tinyFaceDetector.locateFaces', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withTinyFaceDetector: { quantized: true } }, ({ tinyFaceDetector }) => {

    it('inputSize 320, finds all faces', async () => {
      const detections = await tinyFaceDetector.locateFaces(imgEl, { inputSize: 320 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.77, 0.75, 0.88, 0.77, 0.83, 0.85]
      const maxBoxDelta = 36

      expectFaceDetections(detections, expectedTinyFaceDetectorBoxes, expectedScores, maxBoxDelta)
    })

    it('inputSize 416, finds all faces', async () => {
      const detections = await tinyFaceDetector.locateFaces(imgEl, { inputSize: 416 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.7, 0.82, 0.93, 0.86, 0.79, 0.84]
      const maxBoxDelta = 1

      expectFaceDetections(detections, expectedTinyFaceDetectorBoxes, expectedScores, maxBoxDelta)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const net = new faceapi.TinyFaceDetector()
        await net.load('base/weights')
        net.dispose()
      })
    })

  })

})