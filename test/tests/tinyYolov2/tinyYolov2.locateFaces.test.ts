import { TinyYolov2SizeType } from 'tfjs-tiny-yolov2';

import { fetchImage, TinyYolov2 } from '../../../src';
import { expectFaceDetections } from '../../expectFaceDetections';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectedTinyYolov2Boxes } from './expectedBoxes';

xdescribe('tinyYolov2.locateFaces', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
  })

  describeWithNets('quantized weights', { withTinyYolov2: { quantized: true, withSeparableConv: false } }, ({ tinyYolov2 }) => {

    it('inputSize lg, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2SizeType.LG })

      const expectedScores = [0.8, 0.85, 0.86, 0.83, 0.86, 0.81]
      const maxBoxDelta = 4

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxBoxDelta)
    })

    it('inputSize md, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: TinyYolov2SizeType.MD })

      const expectedScores = [0.89, 0.81, 0.82, 0.72, 0.81, 0.86]
      const maxBoxDelta = 27

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxBoxDelta)
    })

    it('inputSize custom, finds all faces', async () => {
      const detections = await tinyYolov2.locateFaces(imgEl, { inputSize: 416 })

      const expectedScores = [0.89, 0.81, 0.82, 0.72, 0.81, 0.86]
      const maxBoxDelta = 27

      expect(detections.length).toEqual(6)
      expectFaceDetections(detections, expectedTinyYolov2Boxes, expectedScores, maxBoxDelta)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const net = new TinyYolov2(false)
        await net.load('base/weights_unused')
        net.dispose()
      })
    })
  })

})