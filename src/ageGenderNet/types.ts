import * as tf from '@tensorflow/tfjs-core';

import { FCParams } from '../common';

export type AgeAndGenderPrediction = {
  age: number
  gender: Gender
  genderProbability: number
}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male'
}

export type NetOutput = { age: tf.Tensor1D, gender: tf.Tensor2D }

export type NetParams = {
  fc: {
    age: FCParams
    gender: FCParams
  }
}