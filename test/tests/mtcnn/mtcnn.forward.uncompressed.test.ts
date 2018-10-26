import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectMtcnnResults } from './expectMtcnnResults';
import { IPoint, fetchImage, fetchJson } from '../../../src';

describe('mtcnn.forward', () => {

  let imgEl: HTMLImageElement
  let expectedMtcnnLandmarks: IPoint[][]

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
    expectedMtcnnLandmarks = await fetchJson<IPoint[][]>('base/test/data/mtcnnFaceLandmarkPositions.json')
  })

  describeWithNets('uncompressed weights', { withMtcnn: { quantized: false } }, ({ mtcnn }) => {

    it('minFaceSize = 20, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 2,
        maxLandmarksDelta: 5
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
        maxLandmarksDelta: 13
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
        maxBoxDelta: 8,
        maxLandmarksDelta: 7
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
        maxBoxDelta: 8,
        maxLandmarksDelta: 10
      }
      expectMtcnnResults(results, expectedMtcnnLandmarks, [1.0, 1.0, 1.0, 1.0, 1.0, 1.0], deltas)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const res = await fetch('base/weights_uncompressed/mtcnn_model.weights')
        const weights = new Float32Array(await res.arrayBuffer())
        const net = faceapi.createMtcnn(weights)
        net.dispose()
      })
    })

  })

})