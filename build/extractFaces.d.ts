import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { Rect } from './Rect';
import { TNetInput } from './types';
/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export declare function extractFaces(input: TNetInput, detections: Array<FaceDetection | Rect>): Promise<HTMLCanvasElement[]>;
