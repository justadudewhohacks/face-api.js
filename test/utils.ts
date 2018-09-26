import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet, FaceRecognitionNet, IPoint, IRect, Mtcnn, NeuralNetwork, TinyYolov2 } from '../src/';
import { allFacesMtcnnFactory, allFacesSsdMobilenetv1Factory, allFacesTinyYolov2Factory } from '../src/allFacesFactory';
import { FaceDetection } from '../src/classes/FaceDetection';
import { FaceLandmarks } from '../src/classes/FaceLandmarks';
import { FullFaceDescription } from '../src/classes/FullFaceDescription';
import { FaceLandmark68Net } from '../src/faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../src/faceLandmarkNet/FaceLandmark68TinyNet';
import { allFacesMtcnnFunction, allFacesSsdMobilenetv1Function, allFacesTinyYolov2Function } from '../src/globalApi';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

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
  return sortByDistanceToOrigin(landmarks, l => l.getPositions()[0])
}

export function sortFullFaceDescriptions(descs: FullFaceDescription[]) {
  return sortByDistanceToOrigin(descs, d => d.detection.box)
}

export type ExpectedFullFaceDescription = {
  detection: IRect
  landmarks: IPoint[]
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
  allFacesSsdMobilenetv1: allFacesSsdMobilenetv1Function
  allFacesTinyYolov2: allFacesTinyYolov2Function
  allFacesMtcnn: allFacesMtcnnFunction
  faceDetectionNet: FaceDetectionNet
  faceLandmark68Net: FaceLandmark68Net
  faceLandmark68TinyNet: FaceLandmark68TinyNet
  faceRecognitionNet: FaceRecognitionNet
  mtcnn: Mtcnn
  tinyYolov2: TinyYolov2
}


export type DescribeWithNetsOptions = {
  withAllFacesSsdMobilenetv1?: boolean
  withAllFacesTinyYolov2?: boolean
  withAllFacesMtcnn?: boolean
  withFaceDetectionNet?: WithNetOptions
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
  await net.load(
    uncompressedFilename
      ? await loadNetWeights(`base/weights_uncompressed/${uncompressedFilename}`)
      : (isUnusedModel ? 'base/weights_unused' : 'base/weights')
  )
}

export function describeWithNets(
  description: string,
  options: DescribeWithNetsOptions,
  specDefinitions: (nets: InjectNetArgs) => void
) {

  describe(description, () => {
    let faceDetectionNet: FaceDetectionNet = new FaceDetectionNet()
    let faceLandmark68Net: FaceLandmark68Net = new FaceLandmark68Net()
    let faceLandmark68TinyNet: FaceLandmark68TinyNet = new FaceLandmark68TinyNet()
    let faceRecognitionNet: FaceRecognitionNet = new FaceRecognitionNet()
    let mtcnn: Mtcnn = new Mtcnn()
    let tinyYolov2: TinyYolov2 = new TinyYolov2(options.withTinyYolov2 && options.withTinyYolov2.withSeparableConv)
    let allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1Factory(faceDetectionNet, faceLandmark68Net, faceRecognitionNet)
    let allFacesTinyYolov2 = allFacesTinyYolov2Factory(tinyYolov2, faceLandmark68Net, faceRecognitionNet)
    let allFacesMtcnn = allFacesMtcnnFactory(mtcnn, faceRecognitionNet)

    beforeAll(async () => {
      const {
        withAllFacesSsdMobilenetv1,
        withAllFacesTinyYolov2,
        withAllFacesMtcnn,
        withFaceDetectionNet,
        withFaceLandmark68Net,
        withFaceLandmark68TinyNet,
        withFaceRecognitionNet,
        withMtcnn,
        withTinyYolov2
      } = options

      if (withFaceDetectionNet || withAllFacesSsdMobilenetv1) {
        await initNet<FaceDetectionNet>(
          faceDetectionNet,
          !!withFaceDetectionNet && !withFaceDetectionNet.quantized && 'ssd_mobilenetv1_model.weights'
        )
      }

      if (withFaceLandmark68Net || withAllFacesSsdMobilenetv1 || withAllFacesTinyYolov2) {
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

      if (withFaceRecognitionNet || withAllFacesSsdMobilenetv1 || withAllFacesMtcnn || withAllFacesTinyYolov2) {
        await initNet<FaceRecognitionNet>(
          faceRecognitionNet,
          // TODO: figure out why quantized weights results in NaNs in testcases
          'face_recognition_model.weights'
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
          withTinyYolov2 && withTinyYolov2.withSeparableConv === false
        )
      }
    })

    afterAll(() => {
      faceDetectionNet && faceDetectionNet.dispose()
      faceLandmark68Net && faceLandmark68Net.dispose()
      faceRecognitionNet && faceRecognitionNet.dispose()
      mtcnn && mtcnn.dispose(),
      tinyYolov2 && tinyYolov2.dispose()
    })

    specDefinitions({
      allFacesSsdMobilenetv1,
      allFacesTinyYolov2,
      allFacesMtcnn,
      faceDetectionNet,
      faceLandmark68Net,
      faceLandmark68TinyNet,
      faceRecognitionNet,
      mtcnn,
      tinyYolov2
    })
  })
}

