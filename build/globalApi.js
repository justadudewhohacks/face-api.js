import { allFacesMtcnnFactory, allFacesSsdMobilenetv1Factory, allFacesTinyYolov2Factory } from './allFacesFactory';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { Mtcnn } from './mtcnn/Mtcnn';
import { TinyYolov2 } from './tinyYolov2/TinyYolov2';
export var detectionNet = new FaceDetectionNet();
export var landmarkNet = new FaceLandmarkNet();
export var recognitionNet = new FaceRecognitionNet();
// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
export var nets = {
    ssdMobilenetv1: detectionNet,
    faceLandmark68Net: landmarkNet,
    faceRecognitionNet: recognitionNet,
    mtcnn: new Mtcnn(),
    tinyYolov2: new TinyYolov2()
};
export function loadSsdMobilenetv1Model(url) {
    return nets.ssdMobilenetv1.load(url);
}
export function loadFaceLandmarkModel(url) {
    return nets.faceLandmark68Net.load(url);
}
export function loadFaceRecognitionModel(url) {
    return nets.faceRecognitionNet.load(url);
}
export function loadMtcnnModel(url) {
    return nets.mtcnn.load(url);
}
export function loadTinyYolov2Model(url) {
    return nets.tinyYolov2.load(url);
}
export function loadFaceDetectionModel(url) {
    return loadSsdMobilenetv1Model(url);
}
export function loadModels(url) {
    return Promise.all([
        loadSsdMobilenetv1Model(url),
        loadFaceLandmarkModel(url),
        loadFaceRecognitionModel(url),
        loadMtcnnModel(url),
        loadTinyYolov2Model(url)
    ]);
}
export function locateFaces(input, minConfidence, maxResults) {
    return nets.ssdMobilenetv1.locateFaces(input, minConfidence, maxResults);
}
export function detectLandmarks(input) {
    return nets.faceLandmark68Net.detectLandmarks(input);
}
export function computeFaceDescriptor(input) {
    return nets.faceRecognitionNet.computeFaceDescriptor(input);
}
export function mtcnn(input, forwardParams) {
    return nets.mtcnn.forward(input, forwardParams);
}
export function tinyYolov2(input, forwardParams) {
    return nets.tinyYolov2.locateFaces(input, forwardParams);
}
export var allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1Factory(nets.ssdMobilenetv1, nets.faceLandmark68Net, nets.faceRecognitionNet);
export var allFacesTinyYolov2 = allFacesTinyYolov2Factory(nets.tinyYolov2, nets.faceLandmark68Net, nets.faceRecognitionNet);
export var allFacesMtcnn = allFacesMtcnnFactory(nets.mtcnn, nets.faceRecognitionNet);
export var allFaces = allFacesSsdMobilenetv1;
//# sourceMappingURL=globalApi.js.map