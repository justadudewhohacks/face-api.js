import { FaceDetection } from '../classes/FaceDetection';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';

export class MtcnnResult extends FaceDetectionWithLandmarks {

  // aliases for backward compatibily
  get faceDetection(): FaceDetection { return this.detection }
  get faceLandmarks(): FaceLandmarks5 { return this.faceLandmarks }
}