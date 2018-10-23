import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, assembleExpectedFullFaceDescriptions, ExpectedFullFaceDescription } from '../../utils';
import { expectedMtcnnBoxes } from './expectMtcnnResults';
import { fetchImage } from '../../../src';
import { MtcnnOptions } from '../../../src/mtcnn/MtcnnOptions';
import { expectFaceDetections } from '../../expectFaceDetections';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';

describe('mtcnn', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]
  const expectedScores = [1.0, 1.0, 1.0, 1.0, 0.99, 0.99]

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedMtcnnBoxes)
  })

  describeWithNets('detectAllFaces', { withAllFacesMtcnn: true }, () => {

    it('detectAllFaces', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const results = await faceapi.detectAllFaces(imgEl, options)

      const maxBoxDelta = 2
      expect(results.length).toEqual(6)
      expectFaceDetections(results, expectedMtcnnBoxes, expectedScores, maxBoxDelta)
    })

    it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const results = await faceapi
        .detectAllFaces(imgEl, options)
        .withFaceLandmarks()

      const deltas = {
        maxBoxDelta: 2,
        maxLandmarksDelta: 6
      }
      expect(results.length).toEqual(6)
      expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const results = await faceapi
        .detectAllFaces(imgEl, options)
        .withFaceLandmarks()
        .withFaceDescriptors()

      const deltas = {
        maxBoxDelta: 2,
        maxLandmarksDelta: 6,
        maxDescriptorDelta: 0.4
      }
      expect(results.length).toEqual(6)
      expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        await faceapi
          .detectAllFaces(imgEl, new MtcnnOptions({ minFaceSize: 200 }))
          .withFaceLandmarks()
          .withFaceDescriptors()
      })
    })

  })

})