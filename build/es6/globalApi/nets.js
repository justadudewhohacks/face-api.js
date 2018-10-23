import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { FaceRecognitionNet } from '../faceRecognitionNet/FaceRecognitionNet';
import { Mtcnn } from '../mtcnn/Mtcnn';
import { SsdMobilenetv1 } from '../ssdMobilenetv1/SsdMobilenetv1';
import { TinyFaceDetector } from '../tinyFaceDetector/TinyFaceDetector';
import { TinyYolov2 } from '../tinyYolov2/TinyYolov2';
export var nets = {
    ssdMobilenetv1: new SsdMobilenetv1(),
    tinyFaceDetector: new TinyFaceDetector(),
    tinyYolov2: new TinyYolov2(),
    mtcnn: new Mtcnn(),
    faceLandmark68Net: new FaceLandmark68Net(),
    faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
    faceRecognitionNet: new FaceRecognitionNet()
};
/**
 * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export var ssdMobilenetv1 = function (input, options) {
    return nets.ssdMobilenetv1.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Face Detector.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export var tinyFaceDetector = function (input, options) {
    return nets.tinyFaceDetector.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
export var tinyYolov2 = function (input, options) {
    return nets.tinyYolov2.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image and the 5 point face landmarks
 * of each detected face using the MTCNN Network.
 *
 * @param input The input image.
 * @param options (optional, default: see MtcnnOptions constructor for default parameters).
 * @returns Bounding box of each face with score and 5 point face landmarks.
 */
export var mtcnn = function (input, options) {
    return nets.mtcnn.forward(input, options);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export var detectFaceLandmarks = function (input) {
    return nets.faceLandmark68Net.detectLandmarks(input);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image
 * using a tinier version of the 68 point face landmark model, which is slightly
 * faster at inference, but also slightly less accurate.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
export var detectFaceLandmarksTiny = function (input) {
    return nets.faceLandmark68TinyNet.detectLandmarks(input);
};
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
export var computeFaceDescriptor = function (input) {
    return nets.faceRecognitionNet.computeFaceDescriptor(input);
};
export var loadSsdMobilenetv1Model = function (url) { return nets.ssdMobilenetv1.load(url); };
export var loadTinyFaceDetectorModel = function (url) { return nets.tinyFaceDetector.load(url); };
export var loadMtcnnModel = function (url) { return nets.mtcnn.load(url); };
export var loadTinyYolov2Model = function (url) { return nets.tinyYolov2.load(url); };
export var loadFaceLandmarkModel = function (url) { return nets.faceLandmark68Net.load(url); };
export var loadFaceLandmarkTinyModel = function (url) { return nets.faceLandmark68TinyNet.load(url); };
export var loadFaceRecognitionModel = function (url) { return nets.faceRecognitionNet.load(url); };
// backward compatibility
export var loadFaceDetectionModel = loadSsdMobilenetv1Model;
export var locateFaces = ssdMobilenetv1;
export var detectLandmarks = detectFaceLandmarks;
//# sourceMappingURL=nets.js.map