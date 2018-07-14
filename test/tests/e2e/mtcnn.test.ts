import * as faceapi from '../../../src';
import { MtcnnResult } from '../../../src/mtcnn/types';
import { Point } from '../../../src/Point';
import { describeWithNets, expectAllTensorsReleased, expectPointClose, expectRectClose, expectMaxDelta } from '../../utils';

const expectedBoxes = [
  { x: 70, y: 21, width: 112, height: 112 },
  { x: 36, y: 250, width: 133, height: 132 },
  { x: 221, y: 43, width: 112, height: 111 },
  { x: 247, y: 231, width: 106, height: 107 },
  { x: 566, y: 67, width: 104, height: 104 },
  { x: 451, y: 176, width: 122, height: 122 }
]

const expectedFaceLandmarks = [
  [new Point(117, 58), new Point(156, 63), new Point(141, 86), new Point(109, 98), new Point(147, 104)],
  [new Point(82, 292), new Point(134, 304), new Point(104, 330), new Point(72, 342), new Point(120, 353)],
  [new Point(261, 82), new Point(306, 83), new Point(282, 113), new Point(257, 124), new Point(306, 126)],
  [new Point(277, 273), new Point(318, 273), new Point(295, 300), new Point(279, 311), new Point(316, 313)],
  [new Point(607, 110), new Point(645, 115), new Point(626, 138), new Point(601, 144), new Point(639, 150)],
  [new Point(489, 224), new Point(534, 223), new Point(507, 250), new Point(493, 271), new Point(530, 270)]
]

describe('mtcnn', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  describeWithNets('uncompressed weights', { withMtcnn: { quantized: false } }, ({ mtcnn }) => {

    function expectResults(
      results: MtcnnResult[],
      boxOrder: number[],
      maxBoxDelta: number,
      maxLandmarkPointsDelta: number
    ) {
      results.forEach((result, i) => {
        const { faceDetection, faceLandmarks } = result
        expect(faceDetection instanceof faceapi.FaceDetection).toBe(true)
        expect(faceLandmarks instanceof faceapi.FaceLandmarks5).toBe(true)
        expectRectClose(faceDetection.getBox(), expectedBoxes[boxOrder[i]], maxBoxDelta)
        faceLandmarks.getPositions().forEach((pt, j) => expectPointClose(pt, expectedFaceLandmarks[boxOrder[i]][j], maxLandmarkPointsDelta))
        expectMaxDelta(faceDetection.getScore(), 0.99, 0.01)
      })
    }

    it('minFaceSize = 20, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)
      expectResults(results, [0, 1, 2, 3, 4, 5], 1, 1)
    })

    it('minFaceSize = 80, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 80
      }

      const results = await mtcnn.forward(imgEl, forwardParams)

      expect(results.length).toEqual(6)
      expectResults(results, [0, 5, 3, 1, 2, 4], 12, 12)
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
      expectResults(results, [5, 1, 4, 3, 2, 0], 6, 10)
    })

    it('scale steps passed, finds all faces', async () => {
      const forwardParams = {
        scaleSteps: [0.6, 0.4, 0.2, 0.15, 0.1, 0.08, 0.02]
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)
      expectResults(results, [5, 1, 3, 0, 2, 4], 7, 15)
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights/uncompressed/mtcnn_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = faceapi.createMtcnn(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new faceapi.Mtcnn()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

  })

})