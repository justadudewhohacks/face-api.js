import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
export declare function extractAllFacesAndComputeResults<TSource extends WithFaceDetection<{}>, TResult>(parentResults: TSource[], input: TNetInput, computeResults: (faces: Array<HTMLCanvasElement | tf.Tensor3D>) => Promise<TResult>, extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D> | null, getRectForAlignment?: (parentResult: WithFaceLandmarks<TSource, any>) => FaceDetection): Promise<TResult>;
export declare function extractSingleFaceAndComputeResult<TSource extends WithFaceDetection<{}>, TResult>(parentResult: TSource, input: TNetInput, computeResult: (face: HTMLCanvasElement | tf.Tensor3D) => Promise<TResult>, extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D> | null, getRectForAlignment?: (parentResult: WithFaceLandmarks<TSource, any>) => FaceDetection): Promise<TResult>;
