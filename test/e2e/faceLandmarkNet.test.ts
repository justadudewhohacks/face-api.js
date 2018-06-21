import axios from 'axios';

import * as faceapi from '../../src';
import { FaceLandmarks } from '../../src/faceLandmarkNet/FaceLandmarks';
import { Point } from '../../src/Point';

describe('faceLandmarkNet', () => {

  let faceLandmarkNet: any, imgEl: HTMLImageElement, faceLandmarkPositions: Point[]

  beforeAll(async () => {
    const res = await axios.get('base/weights/uncompressed/face_landmark_68_model.weights', { responseType: 'arraybuffer' })
    const weights = new Float32Array(res.data)
    faceLandmarkNet = faceapi.faceLandmarkNet(weights)

    const img = await axios.get('base/test/images/face.png', { responseType: 'blob' })
    imgEl = await faceapi.bufferToImage(img.data)
    faceLandmarkPositions = (await axios.get('base/test/data/faceLandmarkPositions.json')).data
  })

  it('computes face descriptor', async () => {
    const { width, height } = imgEl

    const result = await faceLandmarkNet.detectLandmarks(imgEl) as FaceLandmarks
    expect(result.getImageWidth()).toEqual(width)
    expect(result.getImageHeight()).toEqual(height)
    expect(result.getShift().x).toEqual(0)
    expect(result.getShift().y).toEqual(0)
    expect(result.getPositions().map(({ x, y }) => ({ x, y }))).toEqual(faceLandmarkPositions)
  })
})

