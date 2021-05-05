import { extendWithFaceDetection, extendWithFaceLandmarks, FaceDetection, FaceLandmarks68, Point, Rect } from '../../../src';

const detection = new FaceDetection(1.0, new Rect(0.5, 0.5, 0.5, 0.5), { width: 100, height: 100 })
const unshiftedLandmarks = new FaceLandmarks68(Array(68).fill(0).map((_, i) => new Point(i / 100, i / 100)), { width: 100, height: 100 })

const makeSrcObjectWithFaceDetection = <T> (srcObject: T) => extendWithFaceDetection(srcObject, detection)

describe('extendWithFaceDetection', () => {

  it('returns WithFaceLandmarks', () => {

    const srcObj = {}
    const srcObjWithFaceDetection = makeSrcObjectWithFaceDetection(srcObj)
    const withFaceLandmarks = extendWithFaceLandmarks(srcObjWithFaceDetection, unshiftedLandmarks)

    expect(withFaceLandmarks.detection).toEqual(detection)
    expect(withFaceLandmarks.unshiftedLandmarks).toEqual(unshiftedLandmarks)
    expect(withFaceLandmarks.alignedRect instanceof FaceDetection).toBe(true)
    expect(withFaceLandmarks.landmarks instanceof FaceLandmarks68).toBe(true)

  })

  it('extends source object', () => {

    const srcObj = { srcProp: { foo: true } }
    const srcObjWithFaceDetection = makeSrcObjectWithFaceDetection(srcObj)
    const withFaceLandmarks = extendWithFaceLandmarks(srcObjWithFaceDetection, unshiftedLandmarks)

    expect(withFaceLandmarks.srcProp).toEqual(srcObj.srcProp)

    expect(withFaceLandmarks.detection).toEqual(detection)
    expect(withFaceLandmarks.unshiftedLandmarks).toEqual(unshiftedLandmarks)
    expect(withFaceLandmarks.alignedRect instanceof FaceDetection).toBe(true)
    expect(withFaceLandmarks.landmarks instanceof FaceLandmarks68).toBe(true)

  })

})
