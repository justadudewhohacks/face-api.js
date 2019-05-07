import * as faceapi from '../../../src';
import { WithAge } from '../../../src/factories/WithAge';
import { WithFaceExpressions } from '../../../src/factories/WithFaceExpressions';
import { WithGender } from '../../../src/factories/WithGender';
import { loadImage } from '../../env';
import { expectedTinyFaceDetectorBoxes } from '../../expectedTinyFaceDetectorBoxes';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithBackend,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { deltas, expectedScores, faceDetectorOptions, withNetArgs } from './consts';

function expectFaceExpressions(results: WithFaceExpressions<{}>[]) {
  results.forEach((result, i) => {
    const { happy, neutral } = result.expressions

    const happyProb = i === 4 ? 0 : 0.95
    const neutralProb = i === 4 ? 0.4 : 0

    expect(happy).toBeGreaterThanOrEqual(happyProb)
    expect(neutral).toBeGreaterThanOrEqual(neutralProb)
  })
}

const ages = [41, 26, 37, 27, 31, 34]
const agesUnaligned = [37, 30, 22, 26, 36, 33]
const genders = ['male', 'female', 'female', 'male', 'male', 'female']

function expectAgesAndGender(results: WithAge<WithGender<{}>>[], aligned = true) {
  results.forEach((result, i) => {
    const { age, gender, genderProbability } = result

    expect(Math.round(age)).toEqual(aligned ? ages[i] : agesUnaligned[i])
    expect(gender).toEqual(genders[i])
    expect(genderProbability).toBeGreaterThanOrEqual(i === 5 ? 0.7 : 0.9)
  })
}

describeWithBackend('globalApi', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyFaceDetectorBoxes)
  })

  describeWithNets('detectAllFaces', withNetArgs, () => {

    describe('without face alignment', () => {

      it('detectAllFaces.withFaceExpressions()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
      })

      it('detectAllFaces.withAgeAndGender()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results, false)
      })

      it('detectAllFaces.withFaceExpressions().withAgeAndGender()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceExpressions()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results, false)
      })

      it('detectAllFaces.withAgeAndGender().withFaceExpressions()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withAgeAndGender()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results, false)
      })

    })

    describe('with face alignment', () => {

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender().withFaceExpressions()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withFaceDescriptors()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender().withFaceDescriptors()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors()', async () => {
        const results = await faceapi
          .detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

    })

    describe('no memory leaks', () => {

      it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectAllFaces(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceDescriptors()
        })
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors()', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectAllFaces(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender()
            .withFaceDescriptors()
        })
      })

    })

  })
})