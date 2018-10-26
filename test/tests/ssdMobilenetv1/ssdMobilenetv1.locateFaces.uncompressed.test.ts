import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectFaceDetections } from '../../expectFaceDetections';
import { fetchImage } from '../../../src';
import { expectedSsdBoxes } from './expectedBoxes';

describe('ssdMobilenetv1.locateFaces, uncompressed', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('uncompressed weights', { withSsdMobilenetv1: { quantized: false } }, ({ ssdMobilenetv1 }) => {

    it('scores > 0.8', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.8 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(3)

      const expectedScores = [-1, -1, 0.98, 0.88, 0.81, -1]
      const maxScoreDelta = 0.01
      const maxBoxDelta = 3

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('scores > 0.5', async () => {
      const detections = await ssdMobilenetv1.locateFaces(imgEl, { minConfidence: 0.5 }) as faceapi.FaceDetection[]

      expect(detections.length).toEqual(6)

      const expectedScores = [0.57, 0.74, 0.98, 0.88, 0.81, 0.58]
      const maxScoreDelta = 0.01
      const maxBoxDelta = 3

      expectFaceDetections(detections, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const res = await fetch('base/weights_uncompressed/ssd_mobilenetv1_model.weights')
        const weights = new Float32Array(await res.arrayBuffer())
        const net = faceapi.createSsdMobilenetv1(weights)
        net.dispose()
      })
    })

  })

})