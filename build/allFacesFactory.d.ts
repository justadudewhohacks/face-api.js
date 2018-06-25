import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { NetInput } from './NetInput';
export declare function allFacesFactory(detectionNet: FaceDetectionNet, landmarkNet: FaceLandmarkNet, recognitionNet: FaceRecognitionNet): (input: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | (string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[] | tf.Tensor<tf.Rank> | NetInput, minConfidence: number) => Promise<FullFaceDescription[]>;
