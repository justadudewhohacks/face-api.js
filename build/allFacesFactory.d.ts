import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams } from './mtcnn/types';
import { TNetInput } from './types';
export declare function allFacesFactory(detectionNet: FaceDetectionNet, landmarkNet: FaceLandmarkNet, recognitionNet: FaceRecognitionNet): (input: TNetInput, minConfidence?: number, useBatchProcessing?: boolean) => Promise<FullFaceDescription[]>;
export declare function allFacesMtcnnFactory(mtcnn: Mtcnn, recognitionNet: FaceRecognitionNet): (input: TNetInput, mtcnnForwardParams?: MtcnnForwardParams, useBatchProcessing?: boolean) => Promise<FullFaceDescription[]>;
