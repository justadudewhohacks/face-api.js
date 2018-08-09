import * as _tf from '@tensorflow/tfjs-core';

const faceapi = require('../../../dist/face-api.js')
const tf: typeof _tf = faceapi.tf
require('./loss')

window['faceapi'] = faceapi
window['tf'] = tf

const anchors = [
  new faceapi.Point(1.603231, 2.094468),
  new faceapi.Point(6.041143, 7.080126),
  new faceapi.Point(2.882459, 3.518061),
  new faceapi.Point(4.266906, 5.178857),
  new faceapi.Point(9.041765, 10.66308)
]

window['net'] = {
  getAnchors() {
    return anchors
  }
}

describe('loss', () => {

  describe('computeNoObjectLoss', () => {

    const computeNoObjectLoss = window['computeNoObjectLoss']

    it('should only compute loss over scores, 1x1 grid', () => tf.tidy(() => {
      const outTensor = tf.zeros([1, 1, 1, 25])
      const loss = tf.sum(computeNoObjectLoss(outTensor)).dataSync()[0]

      expect(loss).toEqual(0.5 * 0.5 * 5)
    }))

    it('should only compute loss over scores, 13x13 grid', () => tf.tidy(() => {
      const outTensor = tf.zeros([1, 13, 13, 25])
      const loss = tf.sum(computeNoObjectLoss(outTensor)).dataSync()[0]

      expect(loss).toEqual(0.5 * 0.5 * 5 * 13 * 13)
    }))

    it('should only compute loss over scores, 13x13 grid, batchSize: 10', () => tf.tidy(() => {
      const outTensor = tf.zeros([10, 13, 13, 25])
      const loss = tf.sum(computeNoObjectLoss(outTensor)).dataSync()[0]

      expect(loss).toEqual(0.5 * 0.5 * 5 * 13 * 13 * 10)
    }))

  })
})