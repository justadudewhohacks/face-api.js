import { TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';

import { AgeGenderNet } from '../ageGenderNet/AgeGenderNet';
import { AgeAndGenderPrediction } from '../ageGenderNet/types';
import { FaceDetection } from '../classes/FaceDetection';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { FaceExpressionNet } from '../faceExpressionNet/FaceExpressionNet';
import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';
import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { FaceRecognitionNet } from '../faceRecognitionNet/FaceRecognitionNet';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { Mtcnn } from '../mtcnn/Mtcnn';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1 } from '../ssdMobilenetv1/SsdMobilenetv1';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetector } from '../tinyFaceDetector/TinyFaceDetector';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';
import { TinyYolov2 } from '../tinyYolov2';

export const nets = {
  ssdMobilenetv1: new SsdMobilenetv1(),
  tinyFaceDetector: new TinyFaceDetector(),
  tinyYolov2: new TinyYolov2(),
  mtcnn: new Mtcnn(),
  faceLandmark68Net: new FaceLandmark68Net(),
  faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
  faceRecognitionNet: new FaceRecognitionNet(),
  faceExpressionNet: new FaceExpressionNet(),
  ageGenderNet: new AgeGenderNet()
}

/**
 * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export const ssdMobilenetv1 = (input: TNetInput, options: SsdMobilenetv1Options): Promise<FaceDetection[]> =>
  nets.ssdMobilenetv1.locateFaces(input, options)

/**
 * Attempts to detect all faces in an image using the Tiny Face Detector.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export const tinyFaceDetector = (input: TNetInput, options: TinyFaceDetectorOptions): Promise<FaceDetection[]> =>
  nets.tinyFaceDetector.locateFaces(input, options)

/**
 * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export const tinyYolov2 = (input: TNetInput, options: TfjsImageRecognitionBase.ITinyYolov2Options): Promise<FaceDetection[]> =>
  nets.tinyYolov2.locateFaces(input, options)

/**
 * Attempts to detect all faces in an image and the 5 point face landmarks
 * of each detected face using the MTCNN Network.
 *
 * @param input The input image.
 * @param options (optional, default: see MtcnnOptions constructor for default parameters).
 * @returns Bounding box of each face with score and 5 point face landmarks.
 */
export const mtcnn = (input: TNetInput, options: MtcnnOptions): Promise<WithFaceLandmarks<WithFaceDetection<{}>, FaceLandmarks5>[]> =>
  nets.mtcnn.forward(input, options)

/**
 * Detects the 68 point face landmark positions of the face shown in an image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export const detectFaceLandmarks = (input: TNetInput): Promise<FaceLandmarks68 | FaceLandmarks68[]> =>
  nets.faceLandmark68Net.detectLandmarks(input)

/**
 * Detects the 68 point face landmark positions of the face shown in an image
 * using a tinier version of the 68 point face landmark model, which is slightly
 * faster at inference, but also slightly less accurate.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export const detectFaceLandmarksTiny = (input: TNetInput): Promise<FaceLandmarks68 | FaceLandmarks68[]>  =>
  nets.faceLandmark68TinyNet.detectLandmarks(input)

/**
 * Computes a 128 entry vector (face descriptor / face embeddings) from the face shown in an image,
 * which uniquely represents the features of that persons face. The computed face descriptor can
 * be used to measure the similarity between faces, by computing the euclidean distance of two
 * face descriptors.
 *
 * @param inputs The face image extracted from the aligned bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Face descriptor with 128 entries or array thereof in case of batch input.
 */
export const computeFaceDescriptor = (input: TNetInput): Promise<Float32Array | Float32Array[]>  =>
  nets.faceRecognitionNet.computeFaceDescriptor(input)


/**
 * Recognizes the facial expressions from a face image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Facial expressions with corresponding probabilities or array thereof in case of batch input.
 */
export const recognizeFaceExpressions = (input: TNetInput): Promise<FaceExpressions | FaceExpressions[]> =>
  nets.faceExpressionNet.predictExpressions(input)

/**
 * Predicts age and gender from a face image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Predictions with age, gender and gender probability or array thereof in case of batch input.
 */
export const predictAgeAndGender = (input: TNetInput): Promise<AgeAndGenderPrediction | AgeAndGenderPrediction[]> =>
  nets.ageGenderNet.predictAgeAndGender(input)

export const loadSsdMobilenetv1Model = (url: string) => nets.ssdMobilenetv1.load(url)
export const loadTinyFaceDetectorModel = (url: string) => nets.tinyFaceDetector.load(url)
export const loadMtcnnModel = (url: string) => nets.mtcnn.load(url)
export const loadTinyYolov2Model = (url: string) => nets.tinyYolov2.load(url)
export const loadFaceLandmarkModel = (url: string) => nets.faceLandmark68Net.load(url)
export const loadFaceLandmarkTinyModel = (url: string) => nets.faceLandmark68TinyNet.load(url)
export const loadFaceRecognitionModel = (url: string) => nets.faceRecognitionNet.load(url)
export const loadFaceExpressionModel = (url: string) => nets.faceExpressionNet.load(url)
export const loadAgeGenderModel = (url: string) => nets.ageGenderNet.load(url)

// backward compatibility
export const loadFaceDetectionModel = loadSsdMobilenetv1Model
export const locateFaces = ssdMobilenetv1
export const detectLandmarks = detectFaceLandmarks