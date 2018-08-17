import * as tf from '@tensorflow/tfjs-core';

import { IRect } from '../build/Rect';
import * as faceapi from '../src/';
import { NeuralNetwork } from '../src/commons/NeuralNetwork';
import { IPoint } from '../src/';
import { allFacesFactory, allFacesMtcnnFactory } from '../src/allFacesFactory';
import { allFacesMtcnnFunction, allFacesFunction } from '../src/globalApi';

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

export function expectPointClose(
  result: IPoint,
  expectedPoint: IPoint,
  maxDelta: number
) {
  const { x, y } = result
  expectMaxDelta(x, expectedPoint.x, maxDelta)
  expectMaxDelta(y, expectedPoint.y, maxDelta)
}

export function expectRectClose(
  result: IRect,
  expectedBox: IRect,
  maxDelta: number
) {
  const { width, height } = result
  expectPointClose(result, expectedBox, maxDelta)
  expectMaxDelta(width, expectedBox.width, maxDelta)
  expectMaxDelta(height, expectedBox.height, maxDelta)
}

export type WithNetOptions = {
  quantized?: boolean
}

export type WithTinyYolov2Options = WithNetOptions & {
  withSeparableConv?: boolean
}

export type InjectNetArgs = {
  allFaces: allFacesFunction
  allFacesMtcnn: allFacesMtcnnFunction
  faceDetectionNet: faceapi.FaceDetectionNet
  faceLandmarkNet: faceapi.FaceLandmarkNet
  faceRecognitionNet: faceapi.FaceRecognitionNet
  mtcnn: faceapi.Mtcnn
  tinyYolov2: faceapi.TinyYolov2
}


export type DescribeWithNetsOptions = {
  withAllFaces?: boolean
  withAllFacesMtcnn?: boolean
  withFaceDetectionNet?: WithNetOptions
  withFaceLandmarkNet?: WithNetOptions
  withFaceRecognitionNet?: WithNetOptions
  withMtcnn?: WithNetOptions
  withTinyYolov2?: WithTinyYolov2Options
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
      ? await loadNetWeights(`base/weights_uncompressed/${uncompressedFilename}`)
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
    let mtcnn: faceapi.Mtcnn = new faceapi.Mtcnn()
    let tinyYolov2: faceapi.TinyYolov2 = new faceapi.TinyYolov2(options.withTinyYolov2 && options.withTinyYolov2.withSeparableConv)
    let allFaces = allFacesFactory(faceDetectionNet, faceLandmarkNet, faceRecognitionNet)
    let allFacesMtcnn = allFacesMtcnnFactory(mtcnn, faceRecognitionNet)

    beforeAll(async () => {
      const {
        withAllFaces,
        withAllFacesMtcnn,
        withFaceDetectionNet,
        withFaceLandmarkNet,
        withFaceRecognitionNet,
        withMtcnn,
        withTinyYolov2
      } = options

      if (withFaceDetectionNet || withAllFaces) {
        await initNet<faceapi.FaceDetectionNet>(
          faceDetectionNet,
          !!withFaceDetectionNet && !withFaceDetectionNet.quantized && 'ssd_mobilenetv1_model.weights'
        )
      }

      if (withFaceLandmarkNet || withAllFaces) {
        await initNet<faceapi.FaceLandmarkNet>(
          faceLandmarkNet,
          !!withFaceLandmarkNet && !withFaceLandmarkNet.quantized && 'face_landmark_68_model.weights'
        )
      }

      if (withFaceRecognitionNet || withAllFaces || withAllFacesMtcnn) {
        await initNet<faceapi.FaceRecognitionNet>(
          faceRecognitionNet,
          // TODO: figure out why quantized weights results in NaNs in testcases
          'face_recognition_model.weights'
        )
      }

      if (withMtcnn || withAllFacesMtcnn) {
        await initNet<faceapi.Mtcnn>(
          mtcnn,
          !!withMtcnn && !withMtcnn.quantized && 'mtcnn_model.weights'
        )
      }

      if (withTinyYolov2) {
        await initNet<faceapi.TinyYolov2>(
          tinyYolov2,
          !!withTinyYolov2 && !withTinyYolov2.quantized && 'tiny_yolov2_model.weights'
        )
      }
    })

    afterAll(() => {
      faceDetectionNet && faceDetectionNet.dispose()
      faceLandmarkNet && faceLandmarkNet.dispose()
      faceRecognitionNet && faceRecognitionNet.dispose()
      mtcnn && mtcnn.dispose(),
      tinyYolov2 && tinyYolov2.dispose()
    })

    specDefinitions({ allFaces, allFacesMtcnn, faceDetectionNet, faceLandmarkNet, faceRecognitionNet, mtcnn, tinyYolov2 })
  })
}

