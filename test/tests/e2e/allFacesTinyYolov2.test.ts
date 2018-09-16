import * as tf from '@tensorflow/tfjs-core';
import { TinyYolov2Types } from 'tfjs-tiny-yolov2';

import { bufferToImage } from '../../../src';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { expectAllFacesResults, expectedTinyYolov2Boxes } from './expectedResults';

describe('allFacesTinyYolov2', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await bufferToImage(img)
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyYolov2Boxes)
  })

  describeWithNets('computes full face descriptions', { withAllFacesTinyYolov2: true }, ({ allFacesTinyYolov2 }) => {


    it('TinyYolov2Types.SizeType.LG', async () => {

      const results = await allFacesTinyYolov2(imgEl, { inputSize: TinyYolov2Types.SizeType.LG })

      expect(results.length).toEqual(6)

      const expectedScores = [0.85, 0.88, 0.9, 0.86, 0.9, 0.85]
      const deltas = {
        maxBoxDelta: 25,
        maxLandmarksDelta: 10,
        maxDescriptorDelta: 0.24
      }
      expectAllFacesResults(results, expectedFullFaceDescriptions, expectedScores, deltas)

    })

    it('TinyYolov2Types.SizeType.MD', async () => {
      const results = await allFacesTinyYolov2(imgEl, { inputSize: TinyYolov2Types.SizeType.MD })

      expect(results.length).toEqual(6)

      const expectedScores = [0.85, 0.8, 0.8, 0.85, 0.85, 0.82]
      const deltas = {
        maxBoxDelta: 34,
        maxLandmarksDelta: 18,
        maxDescriptorDelta: 0.2
      }
      expectAllFacesResults(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

  })

  describeWithNets('no memory leaks', { withAllFacesTinyYolov2: true }, ({ allFacesTinyYolov2 }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesTinyYolov2(imgEl)
      })
    })

    it('single tf.Tensor3D', async () => {
      const tensor = tf.fromPixels(imgEl)

      await expectAllTensorsReleased(async () => {
        await allFacesTinyYolov2(tensor)
      })

      tensor.dispose()
    })

    it('single batch size 1 tf.Tensor4Ds', async () => {
      const tensor = tf.tidy(() => tf.fromPixels(imgEl).expandDims()) as tf.Tensor4D

      await expectAllTensorsReleased(async () => {
        await allFacesTinyYolov2(tensor)
      })

      tensor.dispose()
    })

  })


})