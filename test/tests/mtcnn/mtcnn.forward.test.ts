import { IPoint } from '../../../src';
import { loadImage, loadJson } from '../../env';
import { describeWithBackend, describeWithNets } from '../../utils';
import { expectMtcnnResults } from './expectMtcnnResults';

describeWithBackend('mtcnn.forward', () => {

  let imgEl: HTMLImageElement
  let expectedMtcnnLandmarks: IPoint[][]

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
    expectedMtcnnLandmarks = await loadJson<IPoint[][]>('test/data/mtcnnFaceLandmarkPositions.json')
  })

  // "quantized" actually means loaded from manifest.json, since there is no quantization applied to the mtcnn model
  describeWithNets('quantized weights', { withMtcnn: { quantized: true } }, ({ mtcnn }) => {

    it('minFaceSize = 20, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 10,
        maxLandmarksDelta: 10
      }
      expectMtcnnResults(results, expectedMtcnnLandmarks, [1.0, 1.0, 1.0, 1.0, 0.99, 0.99], deltas)
    })

    it('minFaceSize = 80, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 80
      }

      const results = await mtcnn.forward(imgEl, forwardParams)

      expect(results.length).toEqual(6)
      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 15,
        maxLandmarksDelta: 15
      }
      expectMtcnnResults(results, expectedMtcnnLandmarks, [1.0, 1.0, 1.0, 1.0, 1.0, 0.99], deltas)
    })

    it('all optional params passed, finds all faces', async () => {
      const forwardParams = {
        maxNumScales: 10,
        scaleFactor: 0.8,
        scoreThresholds: [0.8, 0.8, 0.9],
        minFaceSize: 20
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 15,
        maxLandmarksDelta: 20
      }
      expectMtcnnResults(results, expectedMtcnnLandmarks, [1.0, 1.0, 1.0, 0.99, 1.0, 1.0], deltas)
    })

    it('scale steps passed, finds all faces', async () => {
      const forwardParams = {
        scaleSteps: [0.6, 0.4, 0.2, 0.15, 0.1, 0.08, 0.02]
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 15,
        maxLandmarksDelta: 15
      }
      expectMtcnnResults(results, expectedMtcnnLandmarks, [1.0, 1.0, 1.0, 1.0, 1.0, 1.0], deltas)
    })

  })

})