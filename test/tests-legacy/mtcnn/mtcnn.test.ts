import * as faceapi from '../../../src';
import { MtcnnOptions } from '../../../src/mtcnn/MtcnnOptions';
import { getTestEnv } from '../../env';
import { expectFaceDetections } from '../../expectFaceDetections';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithBackend,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { expectedMtcnnBoxes } from './expectMtcnnResults';

describeWithBackend('mtcnn', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]
  const expectedScores = [1.0, 1.0, 1.0, 1.0, 0.99, 0.99]

  beforeAll(async () => {
    imgEl = await getTestEnv().loadImage('test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedMtcnnBoxes)
  })

  describeWithNets('globalApi', { withAllFacesMtcnn: true }, () => {

    it('detectAllFaces', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const results = await faceapi.detectAllFaces(imgEl, options)
      const maxScoreDelta = 0.01
      const maxBoxDelta = 10
      expect(results.length).toEqual(6)
      expectFaceDetections(results, expectedMtcnnBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const results = await faceapi
        .detectAllFaces(imgEl, options)
        .withFaceLandmarks()

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 10,
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
        maxScoreDelta: 0.01,
        maxBoxDelta: 10,
        maxLandmarksDelta: 6,
        maxDescriptorDelta: 0.2
      }
      expect(results.length).toEqual(6)
      expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('detectSingleFace.withFaceLandmarks().withFaceDescriptor()', async () => {
      const options = new MtcnnOptions({
        minFaceSize: 20
      })

      const result = await faceapi
        .detectSingleFace(imgEl, options)
        .withFaceLandmarks()
        .withFaceDescriptor()

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 10,
        maxLandmarksDelta: 6,
        maxDescriptorDelta: 0.2
      }

      expect(!!result).toBeTruthy()
      expectFullFaceDescriptions(
        result ? [result] : [],
        [expectedFullFaceDescriptions[0]],
        [expectedScores[0]],
        deltas
      )
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