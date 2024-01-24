"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.saveFile = exports.faceDetectionOptions = exports.faceDetectionNet = exports.canvas = void 0;
var env_1 = require("./env");
__createBinding(exports, env_1, "canvas");
var faceDetection_1 = require("./faceDetection");
__createBinding(exports, faceDetection_1, "faceDetectionNet");
__createBinding(exports, faceDetection_1, "faceDetectionOptions");
var saveFile_1 = require("./saveFile");
__createBinding(exports, saveFile_1, "saveFile");
