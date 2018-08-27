import { TinyYolov2Types } from 'tfjs-tiny-yolov2';

import { bufferToImage, createTinyYolov2, TinyYolov2 } from '../../../src';
import { describeWithNets, expectAllTensorsReleased, expectRectClose } from '../../utils';
import { expectedTinyYolov2SeparableConvBoxes } from './expectedResults';

describe('tinyYolov2, with separable convolutions', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await bufferToImage(img)
  })

  describeWithNets('quantized weights', { withTinyYolov2: { quantized: true } }, ({ tinyYolov2 }) => {

    it('inputSize lg, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.LG })

      const expectedScores = [0.9, 0.9, 0.89, 0.85, 0.85, 0.85]
      const maxBoxDelta = 1
      const boxOrder = [0, 1, 2, 3, 4, 5]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2SeparableConvBoxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize md, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2Types.SizeType.MD })

      const expectedScores = [0.85, 0.85, 0.84, 0.83, 0.8, 0.8]
      const maxBoxDelta = 17
      const boxOrder = [5, 1, 4, 3, 2, 0]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2SeparableConvBoxes[boxOrder[i]], maxBoxDelta)
      })
    })

    it('inputSize custom, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: 416 })

      const expectedScores = [0.85, 0.85, 0.84, 0.83, 0.8, 0.8]
      const maxBoxDelta = 17
      const boxOrder = [5, 1, 4, 3, 2, 0]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedTinyYolov2SeparableConvBoxes[boxOrder[i]], maxBoxDelta)
      })
    })

  })

  describe('no memory leaks', () => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/tiny_yolov2_separable_conv_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = createTinyYolov2(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new TinyYolov2()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

  })

})