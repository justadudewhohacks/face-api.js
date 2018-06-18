import { FaceLandmarks } from './faceLandmarkNet/FaceLandmarks';
import { Rect } from './Rect';
/**
 * Aligns the face landmarks after face detection from the relative positions of the faces
 * bounding box, or it's current shift. This function should be used to align the face images
 * after face detection has been performed, before they are passed to the face recognition net.
 * This will make the computed face descriptor more accurate.
 *
 * @param detection (optional) The bounding box of the face or the face detection result. If
 * no argument was passed the position of the face landmarks are assumed to be relative to
 * it's current shift.
 * @returns The bounding box of the aligned face.
 */
export declare function alignFace(faceLandmarks: FaceLandmarks, detection?: Rect): Rect;
