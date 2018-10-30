"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
exports.tf = tf;
tslib_1.__exportStar(require("tfjs-image-recognition-base"), exports);
tslib_1.__exportStar(require("./classes/index"), exports);
tslib_1.__exportStar(require("./dom/index"), exports);
tslib_1.__exportStar(require("./faceLandmarkNet/index"), exports);
tslib_1.__exportStar(require("./faceRecognitionNet/index"), exports);
tslib_1.__exportStar(require("./globalApi/index"), exports);
tslib_1.__exportStar(require("./mtcnn/index"), exports);
tslib_1.__exportStar(require("./ssdMobilenetv1/index"), exports);
tslib_1.__exportStar(require("./tinyFaceDetector/index"), exports);
tslib_1.__exportStar(require("./tinyYolov2/index"), exports);
tslib_1.__exportStar(require("./euclideanDistance"), exports);
//# sourceMappingURL=index.js.map