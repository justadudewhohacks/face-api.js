"use strict";
exports.__esModule = true;
exports.canvas = void 0;
var faceapi = require("face-api.js");
// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
var canvas = require('canvas');
exports.canvas = canvas;
// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement
var Canvas = canvas.Canvas, Image = canvas.Image, ImageData = canvas.ImageData;
faceapi.env.monkeyPatch({ Canvas: Canvas, Image: Image, ImageData: ImageData });
