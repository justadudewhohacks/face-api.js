import * as tf from '@tensorflow/tfjs-core';

import { padToSquare } from '../../src/padToSquare';
import { ones, zeros } from '../utils';

describe('padToSquare', () => {

  describe('even size', () => {

    it('is padded to square', () => tf.tidy(() => {
      const imgTensor = tf.tensor4d(Array(24).fill(1), [1, 4, 2, 3])
      const result = padToSquare(imgTensor)

      expect(result.shape).toEqual([1, 4, 4, 3])

      const paddedCols = tf.unstack(result, 2)
      expect(paddedCols.length).toEqual(4)
      expect(paddedCols[0].dataSync()).toEqual(ones(12))
      expect(paddedCols[1].dataSync()).toEqual(ones(12))
      expect(paddedCols[2].dataSync()).toEqual(zeros(12))
      expect(paddedCols[3].dataSync()).toEqual(zeros(12))
    }))

    it('is padded to square and centered', () => tf.tidy(() => {
      const imgTensor = tf.tensor4d(Array(24).fill(1), [1, 4, 2, 3])
      const result = padToSquare(imgTensor, true)

      expect(result.shape).toEqual([1, 4, 4, 3])

      const paddedCols = tf.unstack(result, 2)
      expect(paddedCols.length).toEqual(4)
      expect(paddedCols[0].dataSync()).toEqual(zeros(12))
      expect(paddedCols[1].dataSync()).toEqual(ones(12))
      expect(paddedCols[2].dataSync()).toEqual(ones(12))
      expect(paddedCols[3].dataSync()).toEqual(zeros(12))
    }))

  })

  describe('uneven size', () => {

    it('is padded to square', () => tf.tidy(() => {
      const imgTensor = tf.tensor4d(Array(30).fill(1), [1, 5, 2, 3])
      const result = padToSquare(imgTensor)

      expect(result.shape).toEqual([1, 5, 5, 3])

      const paddedCols = tf.unstack(result, 2)
      expect(paddedCols.length).toEqual(5)
      expect(paddedCols[0].dataSync()).toEqual(ones(15))
      expect(paddedCols[1].dataSync()).toEqual(ones(15))
      expect(paddedCols[2].dataSync()).toEqual(zeros(15))
      expect(paddedCols[3].dataSync()).toEqual(zeros(15))
      expect(paddedCols[4].dataSync()).toEqual(zeros(15))
    }))

    it('is padded to square and centered', () => tf.tidy(() => {
      const imgTensor = tf.tensor4d(Array(30).fill(1), [1, 5, 2, 3])
      const result = padToSquare(imgTensor, true)

      expect(result.shape).toEqual([1, 5, 5, 3])
      const data = result.dataSync()

      const paddedCols = tf.unstack(result, 2)
      expect(paddedCols.length).toEqual(5)
      expect(paddedCols[0].dataSync()).toEqual(zeros(15))
      expect(paddedCols[1].dataSync()).toEqual(zeros(15))
      expect(paddedCols[2].dataSync()).toEqual(ones(15))
      expect(paddedCols[3].dataSync()).toEqual(ones(15))
      expect(paddedCols[4].dataSync()).toEqual(zeros(15))
    }))

  })
})
