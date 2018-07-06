import * as tf from '@tensorflow/tfjs-core';

import * as faceapi from '../src/';
import { NeuralNetwork } from '../src/commons/NeuralNetwork';

export function zeros(length: number): Float32Array {
  return new Float32Array(length)
}

export function ones(length: number): Float32Array {
  return new Float32Array(length).fill(1)
}

export function expectMaxDelta(val1: number, val2: number, maxDelta: number) {
  expect(Math.abs(val1 - val2)).toBeLessThan(maxDelta)
}

export async function expectAllTensorsReleased(fn: () => any) {
  const numTensorsBefore = tf.memory().numTensors
  await fn()
  expect(tf.memory().numTensors - numTensorsBefore).toEqual(0)
}

export function tensor3D() {
  return tf.tensor3d([[[0]]])
}

export type WithNetOptions = {
  quantized?: boolean
}

export type InjectNetArgs = {
  faceDetectionNet: faceapi.FaceDetectionNet
  faceLandmarkNet: faceapi.FaceLandmarkNet
  faceRecognitionNet: faceapi.FaceRecognitionNet
}

export type DescribeWithNetsOptions = {
  withFaceDetectionNet?: WithNetOptions
  withFaceLandmarkNet?: WithNetOptions
  withFaceRecognitionNet?: WithNetOptions
}

async function loadNetWeights(uri: string): Promise<Float32Array> {
  return new Float32Array(await (await fetch(uri)).arrayBuffer())
}

async function initNet<TNet extends NeuralNetwork<any>>(
  net: TNet,
  uncompressedFilename: string | boolean
) {
  await net.load(
    uncompressedFilename
      ? await loadNetWeights(`base/weights/uncompressed/${uncompressedFilename}`)
      : 'base/weights'
  )
}

export function describeWithNets(
  description: string,
  options: DescribeWithNetsOptions,
  specDefinitions: (nets: InjectNetArgs) => void
) {

  describe(description, () => {

    let faceDetectionNet: faceapi.FaceDetectionNet = new faceapi.FaceDetectionNet()
    let faceLandmarkNet: faceapi.FaceLandmarkNet = new faceapi.FaceLandmarkNet()
    let faceRecognitionNet: faceapi.FaceRecognitionNet = new faceapi.FaceRecognitionNet()

    beforeAll(async () => {
      const {
        withFaceDetectionNet,
        withFaceLandmarkNet,
        withFaceRecognitionNet
      } = options

      if (withFaceDetectionNet) {
        await initNet<faceapi.FaceDetectionNet>(
          faceDetectionNet,
          !withFaceDetectionNet.quantized && 'face_detection_model.weights'
        )
      }
      if (withFaceLandmarkNet) {
        await initNet<faceapi.FaceLandmarkNet>(
          faceLandmarkNet,
          !withFaceLandmarkNet.quantized && 'face_landmark_68_model.weights'
        )
      }
      if (withFaceRecognitionNet) {
        await initNet<faceapi.FaceRecognitionNet>(
          faceRecognitionNet,
          !withFaceRecognitionNet.quantized && 'face_recognition_model.weights'
        )
      }
    })

    afterAll(() => {
      faceDetectionNet && faceDetectionNet.dispose()
      faceLandmarkNet && faceLandmarkNet.dispose()
      faceRecognitionNet && faceRecognitionNet.dispose()
    })

    specDefinitions({ faceDetectionNet, faceLandmarkNet, faceRecognitionNet })
  })
}

