import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectMtcnnResults } from './expectedResults';


describe('mtcnn', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  describeWithNets('uncompressed weights', { withMtcnn: { quantized: false } }, ({ mtcnn }) => {


    it('minFaceSize = 20, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)
      expectMtcnnResults(results, [0, 1, 2, 3, 4, 5], 1, 1)
    })

    it('minFaceSize = 80, finds all faces', async () => {
      const forwardParams = {
        minFaceSize: 80
      }

      const results = await mtcnn.forward(imgEl, forwardParams)

      expect(results.length).toEqual(6)
      expectMtcnnResults(results, [0, 5, 3, 1, 2, 4], 12, 12)
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
      expectMtcnnResults(results, [5, 1, 4, 3, 2, 0], 6, 10)
    })

    it('scale steps passed, finds all faces', async () => {
      const forwardParams = {
        scaleSteps: [0.6, 0.4, 0.2, 0.15, 0.1, 0.08, 0.02]
      }

      const results = await mtcnn.forward(imgEl, forwardParams)
      expect(results.length).toEqual(6)
      expectMtcnnResults(results, [5, 1, 3, 0, 2, 4], 7, 15)
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/mtcnn_model.weights')
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