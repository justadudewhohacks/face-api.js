import { WithAge, detectAllFaces, WithFaceExpressions, WithFaceDetection, WithGender } from '../../../src';
import { getTestEnv } from '../../env';
import { expectedTinyFaceDetectorBoxes } from '../../expectedTinyFaceDetectorBoxes';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithBackend,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
  sortByFaceDetection,
} from '../../utils';
import { deltas, expectedScores, faceDetectorOptions, withNetArgs } from './consts';

function expectFaceExpressions(results: WithFaceExpressions<WithFaceDetection<{}>>[]) {
  sortByFaceDetection(results).forEach((result, i) => {
    const { happy, neutral } = result.expressions

    const happyProb = i === 4 ? 0 : 0.95
    const neutralProb = i === 4 ? 0.4 : 0

    expect(happy).toBeGreaterThanOrEqual(happyProb)
    expect(neutral).toBeGreaterThanOrEqual(neutralProb)
  })
}

const ages = [34, 27, 41, 26, 31, 40]
const agesUnaligned = [33, 26, 37, 30, 36, 22]
const genders = ['female', 'male', 'male', 'female', 'male', 'female']

function expectAgesAndGender(results: WithAge<WithGender<WithFaceDetection<{}>>>[], aligned = true) {
  sortByFaceDetection(results).forEach((result, i) => {
    const { age, gender, genderProbability } = result
    const expectedAge = aligned ? ages[i] : agesUnaligned[i]
    expect(Math.abs(age - expectedAge)).toBeLessThanOrEqual(6)
    expect(gender).toEqual(genders[i])
    expect(genderProbability).toBeGreaterThanOrEqual(i === 0 ? 0.65 : 0.9)
  })
}

describeWithBackend('globalApi', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    imgEl = await getTestEnv().loadImage('test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyFaceDetectorBoxes)
  })

  describeWithNets('detectAllFaces', withNetArgs, () => {

    describe('without face alignment', () => {

      it('detectAllFaces.withFaceExpressions()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
      })

      it('detectAllFaces.withAgeAndGender()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results, false)
      })

      it('detectAllFaces.withFaceExpressions().withAgeAndGender()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceExpressions()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results, false)
      })

      it('detectAllFaces.withAgeAndGender().withFaceExpressions()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withAgeAndGender()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results, false)
      })

    })

    describe('with face alignment', () => {

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender().withFaceExpressions()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectAgesAndGender(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withFaceDescriptors()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withAgeAndGender().withFaceDescriptors()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectAgesAndGender(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors()', async () => {
        const results = await detectAllFaces(imgEl, faceDetectorOptions)
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
          await detectAllFaces(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceDescriptors()
        })
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors()', async () => {
        await expectAllTensorsReleased(async () => {
          await detectAllFaces(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender()
            .withFaceDescriptors()
        })
      })

    })

  })
})