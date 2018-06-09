import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionResult } from './faceDetectionNet/FaceDetectionResult';
import { NetInput } from './NetInput';
import { TNetInput } from './types';
/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Returned tensors have to be disposed manually once you don't need them anymore!
 * Useful if you want to compute the face descriptors for the face
 * images. Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
export declare function extractFaceTensors(image: tf.Tensor | NetInput | TNetInput, detections: FaceDetectionResult[]): tf.Tensor4D[];
