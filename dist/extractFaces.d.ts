import { FaceDetectionResult } from './faceDetectionNet/FaceDetectionResult';
/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export declare function extractFaces(image: HTMLCanvasElement, detections: FaceDetectionResult[]): HTMLCanvasElement[];
