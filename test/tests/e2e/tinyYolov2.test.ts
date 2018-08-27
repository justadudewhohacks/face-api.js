import { TinyYolov2Types } from 'tfjs-tiny-yolov2';

import { bufferToImage, createTinyYolov2, TinyYolov2 } from '../../../src';
import { describeWithNets, expectAllTensorsReleased, expectRectClose } from '../../utils';
import { expectedTinyYolov2Boxes } from './expectedResults';

describe('tinyYolov2', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await bufferToImage(img)
  })

  describeWithNets('quantized weights', { withTinyYolov2: { quantized: true, withSeparableConv: false } }, ({ tinyYolov2 }) => {

    it('inputSize lg, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.LG })

      const expectedScores = [0.86, 0.86, 0.85, 0.83, 0.81, 0.81]
      const maxBoxDelta = 3
      const boxOrder = [0, 1, 2, 3, 4, 5]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize md, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.MD })

      const expectedScores = [0.89, 0.87, 0.83, 0.82, 0.81, 0.72]
      const maxBoxDelta = 16
      const boxOrder = [5, 4, 0, 2, 1, 3]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize custom, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: 416 })

      const expectedScores = [0.89, 0.87, 0.83, 0.82, 0.81, 0.72]
      const maxBoxDelta = 16
      const boxOrder = [5, 4, 0, 2, 1, 3]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

  })

  describeWithNets('uncompressed weights', { withTinyYolov2: { quantized: false, withSeparableConv: false } }, ({ tinyYolov2 }) => {

    it('inputSize lg, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.LG })

      const expectedScores = [0.86, 0.86, 0.85, 0.83, 0.81, 0.81]
      const maxBoxDelta = 1
      const boxOrder = [0, 1, 2, 3, 4, 5]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize md, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.MD })

      const expectedScores = [0.89, 0.87, 0.83, 0.83, 0.81, 0.73]
      const maxBoxDelta = 14
      const boxOrder = [5, 4, 2, 0, 1, 3]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize custom, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: 416 })

      const expectedScores = [0.89, 0.87, 0.83, 0.83, 0.81, 0.73]
      const maxBoxDelta = 14
      const boxOrder = [5, 4, 2, 0, 1, 3]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2Boxes[boxOrder[i]], maxBoxDelta)
      })
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/tiny_yolov2_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = createTinyYolov2(weights, false)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new TinyYolov2(false)
          await net.load('base/weights_unused')
          net.dispose()
        })
      })

    })

  })

})