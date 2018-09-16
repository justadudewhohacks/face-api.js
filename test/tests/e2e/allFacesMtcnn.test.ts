import { bufferToImage } from 'tfjs-image-recognition-base';

import {
  assembleExpectedFullFaceDescriptions,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { expectAllFacesResults, expectedMtcnnBoxes } from './expectedResults';

describe('allFacesMtcnn', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await bufferToImage(img)
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedMtcnnBoxes, 'mtcnnFaceLandmarkPositions.json')
  })

  describeWithNets('computes full face descriptions', { withAllFacesMtcnn: true }, ({ allFacesMtcnn }) => {

    it('minFaceSize = 20', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await allFacesMtcnn(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const expectedScores = [1, 1, 1, 1, 0.99, 0.99]
      const deltas = {
        maxBoxDelta: 2,
        maxLandmarksDelta: 1,
        maxDescriptorDelta: 0.4
      }
      expectAllFacesResults(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

  })

  describeWithNets('no memory leaks', { withAllFacesMtcnn: true }, ({ allFacesMtcnn }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesMtcnn(imgEl)
      })
    })

  })


})