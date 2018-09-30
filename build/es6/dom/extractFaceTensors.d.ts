import * as tf from '@tensorflow/tfjs-core';
import { Rect } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Useful if you want to compute the face descriptors for the face images.
 * Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param imageTensor The image tensor that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
export declare function extractFaceTensors(imageTensor: tf.Tensor3D | tf.Tensor4D, detections: Array<FaceDetection | Rect>): Promise<tf.Tensor3D[]>;
