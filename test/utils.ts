import * as tf from '@tensorflow/tfjs-core';

import * as faceapi from '../src';
import { FaceRecognitionNet, IPoint, IRect, Mtcnn, NeuralNetwork, TinyYolov2 } from '../src/';
import { FaceDetection } from '../src/classes/FaceDetection';
import { FaceLandmarks } from '../src/classes/FaceLandmarks';
import { FaceLandmark68Net } from '../src/faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../src/faceLandmarkNet/FaceLandmark68TinyNet';
import { SsdMobilenetv1 } from '../src/ssdMobilenetv1/SsdMobilenetv1';
import { TinyFaceDetector } from '../src/tinyFaceDetector/TinyFaceDetector';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const args: string[] = window['__karma__'].config.jasmine.args
if (args.some(arg => arg === 'backend_cpu')) {
  tf.setBackend('cpu')
}

export function expectMaxDelta(val1: number, val2: number, maxDelta: number) {
  expect(Math.abs(val1 - val2)).toBeLessThan(maxDelta)
}

export async function expectAllTensorsReleased(fn: () => any) {
  const numTensorsBefore = tf.memory().numTensors
  await fn()
  expect(tf.memory().numTensors - numTensorsBefore).toEqual(0)
}

export function pointDistance(pt1: IPoint, pt2: IPoint) {
  return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2))
}

export function expectPointClose(
  result: IPoint,
  expectedPoint: IPoint,
  maxDelta: number
) {
  expect(pointDistance(result, expectedPoint)).toBeLessThan(maxDelta)
}

export function expectRectClose(
  result: IRect,
  expectedBox: IRect,
  maxDelta: number
) {
  expectPointClose(result, expectedBox, maxDelta)
  expectPointClose({ x: result.width, y: result.height }, { x:expectedBox.width, y: expectedBox.height }, maxDelta)
}

export function sortByDistanceToOrigin<T>(objs: T[], originGetter: (obj: T) => IPoint) {
  const origin = { x: 0, y: 0 }
  return objs.sort((obj1, obj2) =>
    pointDistance(originGetter(obj1), origin)
      - pointDistance(originGetter(obj2), origin)
  )
}

export function sortBoxes(boxes: IRect[]) {
  return sortByDistanceToOrigin(boxes, rect => rect)
}

export function sortFaceDetections(boxes: FaceDetection[]) {
  return sortByDistanceToOrigin(boxes, det => det.box)
}

export function sortLandmarks(landmarks: FaceLandmarks[]) {
  return sortByDistanceToOrigin(landmarks, l => l.positions[0])
}

export function sortByFaceDetection<T extends { detection: FaceDetection }>(descs: T[]) {
  return sortByDistanceToOrigin(descs, d => d.detection.box)
}

export type ExpectedFaceDetectionWithLandmarks = {
  detection: IRect
  landmarks: IPoint[]
}

export type ExpectedFullFaceDescription = ExpectedFaceDetectionWithLandmarks & {
  descriptor: Float32Array
}

export async function assembleExpectedFullFaceDescriptions(
  detections: IRect[],
  landmarksFile: string = 'facesFaceLandmarkPositions.json'
): Promise<ExpectedFullFaceDescription[]> {
  const landmarks = await (await fetch(`base/test/data/${landmarksFile}`)).json()
  const descriptors = await (await fetch('base/test/data/facesFaceDescriptors.json')).json()

  return detections.map((detection, i) => ({
    detection,
    landmarks: landmarks[i],
    descriptor: descriptors[i]
  }))
}

export type WithNetOptions = {
  quantized?: boolean
}

export type WithTinyYolov2Options = WithNetOptions & {
  withSeparableConv?: boolean
}

export type InjectNetArgs = {
  ssdMobilenetv1: SsdMobilenetv1
  tinyFaceDetector: TinyFaceDetector
  faceLandmark68Net: FaceLandmark68Net
  faceLandmark68TinyNet: FaceLandmark68TinyNet
  faceRecognitionNet: FaceRecognitionNet
  mtcnn: Mtcnn
  tinyYolov2: TinyYolov2
}


export type DescribeWithNetsOptions = {
  withAllFacesSsdMobilenetv1?: boolean
  withAllFacesTinyFaceDetector?: boolean
  withAllFacesTinyYolov2?: boolean
  withAllFacesMtcnn?: boolean
  withSsdMobilenetv1?: WithNetOptions
  withTinyFaceDetector?: WithNetOptions
  withFaceLandmark68Net?: WithNetOptions
  withFaceLandmark68TinyNet?: WithNetOptions
  withFaceRecognitionNet?: WithNetOptions
  withMtcnn?: WithNetOptions
  withTinyYolov2?: WithTinyYolov2Options
}

async function loadNetWeights(uri: string): Promise<Float32Array> {
  return new Float32Array(await (await fetch(uri)).arrayBuffer())
}

async function initNet<TNet extends NeuralNetwork<any>>(
  net: TNet,
  uncompressedFilename: string | boolean,
  isUnusedModel: boolean = false
) {
  const url = uncompressedFilename
    ? await loadNetWeights(`base/weights_uncompressed/${uncompressedFilename}`)
    : (isUnusedModel ? 'base/weights_unused' : 'base/weights')
  await net.load(url)
}

export function describeWithNets(
  description: string,
  options: DescribeWithNetsOptions,
  specDefinitions: (nets: InjectNetArgs) => void
) {

  describe(description, () => {
    const {
      ssdMobilenetv1,
      tinyFaceDetector,
      faceLandmark68Net,
      faceLandmark68TinyNet,
      faceRecognitionNet,
      mtcnn,
      tinyYolov2
    } = faceapi.nets

    beforeAll(async () => {
      const {
        withAllFacesSsdMobilenetv1,
        withAllFacesTinyFaceDetector,
        withAllFacesTinyYolov2,
        withAllFacesMtcnn,
        withSsdMobilenetv1,
        withTinyFaceDetector,
        withFaceLandmark68Net,
        withFaceLandmark68TinyNet,
        withFaceRecognitionNet,
        withMtcnn,
        withTinyYolov2
      } = options

      if (withSsdMobilenetv1 || withAllFacesSsdMobilenetv1) {
        await initNet<SsdMobilenetv1>(
          ssdMobilenetv1,
          !!withSsdMobilenetv1 && !withSsdMobilenetv1.quantized && 'ssd_mobilenetv1_model.weights'
        )
      }

      if (withTinyFaceDetector || withAllFacesTinyFaceDetector) {
        await initNet<TinyFaceDetector>(
          tinyFaceDetector,
          !!withTinyFaceDetector && !withTinyFaceDetector.quantized && 'tiny_face_detector_model.weights'
        )
      }

      if (withFaceLandmark68Net || withAllFacesSsdMobilenetv1  || withAllFacesTinyFaceDetector|| withAllFacesMtcnn || withAllFacesTinyYolov2) {
        await initNet<FaceLandmark68Net>(
          faceLandmark68Net,
          !!withFaceLandmark68Net && !withFaceLandmark68Net.quantized && 'face_landmark_68_model.weights'
        )
      }

      if (withFaceLandmark68TinyNet) {
        await initNet<FaceLandmark68TinyNet>(
          faceLandmark68TinyNet,
          !!withFaceLandmark68TinyNet && !withFaceLandmark68TinyNet.quantized && 'face_landmark_68_tiny_model.weights'
        )
      }

      if (withFaceRecognitionNet || withAllFacesSsdMobilenetv1  || withAllFacesTinyFaceDetector|| withAllFacesMtcnn || withAllFacesTinyYolov2) {
        await initNet<FaceRecognitionNet>(
          faceRecognitionNet,
          !!withFaceRecognitionNet && !withFaceRecognitionNet.quantized && 'face_recognition_model.weights'
        )
      }

      if (withMtcnn || withAllFacesMtcnn) {
        await initNet<Mtcnn>(
          mtcnn,
          !!withMtcnn && !withMtcnn.quantized && 'mtcnn_model.weights'
        )
      }

      if (withTinyYolov2 || withAllFacesTinyYolov2) {
        await initNet<TinyYolov2>(
          tinyYolov2,
          !!withTinyYolov2 && !withTinyYolov2.quantized && 'tiny_yolov2_model.weights',
          true
        )
      }
    })

    afterAll(() => {
      ssdMobilenetv1.isLoaded && ssdMobilenetv1.dispose()
      faceLandmark68Net.isLoaded && faceLandmark68Net.dispose()
      faceRecognitionNet.isLoaded && faceRecognitionNet.dispose()
      mtcnn.isLoaded && mtcnn.dispose()
      tinyFaceDetector.isLoaded && tinyFaceDetector.dispose()
      tinyYolov2.isLoaded && tinyYolov2.dispose()
    })

    specDefinitions({
      ssdMobilenetv1,
      tinyFaceDetector,
      faceLandmark68Net,
      faceLandmark68TinyNet,
      faceRecognitionNet,
      mtcnn,
      tinyYolov2
    })
  })
}

