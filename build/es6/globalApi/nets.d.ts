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
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { Mtcnn } from '../mtcnn/Mtcnn';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1 } from '../ssdMobilenetv1/SsdMobilenetv1';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetector } from '../tinyFaceDetector/TinyFaceDetector';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';
import { TinyYolov2 } from '../tinyYolov2';
export declare const nets: {
    ssdMobilenetv1: SsdMobilenetv1;
    tinyFaceDetector: TinyFaceDetector;
    tinyYolov2: TinyYolov2;
    mtcnn: Mtcnn;
    faceLandmark68Net: FaceLandmark68Net;
    faceLandmark68TinyNet: FaceLandmark68TinyNet;
    faceRecognitionNet: FaceRecognitionNet;
    faceExpressionNet: FaceExpressionNet;
    ageGenderNet: AgeGenderNet;
};
/**
 * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export declare const ssdMobilenetv1: (input: TNetInput, options: SsdMobilenetv1Options) => Promise<FaceDetection[]>;
/**
 * Attempts to detect all faces in an image using the Tiny Face Detector.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export declare const tinyFaceDetector: (input: TNetInput, options: TinyFaceDetectorOptions) => Promise<FaceDetection[]>;
/**
 * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export declare const tinyYolov2: (input: TNetInput, options: TfjsImageRecognitionBase.ITinyYolov2Options) => Promise<FaceDetection[]>;
/**
 * Attempts to detect all faces in an image and the 5 point face landmarks
 * of each detected face using the MTCNN Network.
 *
 * @param input The input image.
 * @param options (optional, default: see MtcnnOptions constructor for default parameters).
 * @returns Bounding box of each face with score and 5 point face landmarks.
 */
export declare const mtcnn: (input: TNetInput, options: MtcnnOptions) => Promise<WithFaceLandmarks<{
    detection: FaceDetection;
}, FaceLandmarks5>[]>;
/**
 * Detects the 68 point face landmark positions of the face shown in an image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export declare const detectFaceLandmarks: (input: TNetInput) => Promise<FaceLandmarks68 | FaceLandmarks68[]>;
/**
 * Detects the 68 point face landmark positions of the face shown in an image
 * using a tinier version of the 68 point face landmark model, which is slightly
 * faster at inference, but also slightly less accurate.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export declare const detectFaceLandmarksTiny: (input: TNetInput) => Promise<FaceLandmarks68 | FaceLandmarks68[]>;
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
export declare const computeFaceDescriptor: (input: TNetInput) => Promise<Float32Array | Float32Array[]>;
/**
 * Recognizes the facial expressions from a face image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Facial expressions with corresponding probabilities or array thereof in case of batch input.
 */
export declare const recognizeFaceExpressions: (input: TNetInput) => Promise<FaceExpressions | FaceExpressions[]>;
/**
 * Predicts age and gender from a face image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Predictions with age, gender and gender probability or array thereof in case of batch input.
 */
export declare const predictAgeAndGender: (input: TNetInput) => Promise<AgeAndGenderPrediction | AgeAndGenderPrediction[]>;
export declare const loadSsdMobilenetv1Model: (url: string) => Promise<void>;
export declare const loadTinyFaceDetectorModel: (url: string) => Promise<void>;
export declare const loadMtcnnModel: (url: string) => Promise<void>;
export declare const loadTinyYolov2Model: (url: string) => Promise<void>;
export declare const loadFaceLandmarkModel: (url: string) => Promise<void>;
export declare const loadFaceLandmarkTinyModel: (url: string) => Promise<void>;
export declare const loadFaceRecognitionModel: (url: string) => Promise<void>;
export declare const loadFaceExpressionModel: (url: string) => Promise<void>;
export declare const loadAgeGenderModel: (url: string) => Promise<void>;
export declare const loadFaceDetectionModel: (url: string) => Promise<void>;
export declare const locateFaces: (input: TNetInput, options: SsdMobilenetv1Options) => Promise<FaceDetection[]>;
export declare const detectLandmarks: (input: TNetInput) => Promise<FaceLandmarks68 | FaceLandmarks68[]>;
