"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
function getModelUris(uri, defaultModelName) {
    var parts = (uri || '').split('/');
    var modelBaseUri = ((uri || '').endsWith('.json')
        ? parts.slice(0, parts.length - 1)
        : parts).filter(function (s) { return s; }).join('/');
    var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
    var manifestUri = !uri || !modelBaseUri
        ? defaultManifestFilename
        : (uri.endsWith('.json')
            ? uri
            : modelBaseUri + "/" + defaultManifestFilename);
    return { manifestUri: manifestUri, modelBaseUri: modelBaseUri };
}
exports.getModelUris = getModelUris;
function loadWeightMap(uri, defaultModelName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, manifestUri, modelBaseUri, manifest;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = getModelUris(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                    return [4 /*yield*/, fetch(manifestUri)];
                case 1: return [4 /*yield*/, (_b.sent()).json()];
                case 2:
                    manifest = _b.sent();
                    return [2 /*return*/, tf.io.loadWeights(manifest, modelBaseUri)];
            }
        });
    });
}
exports.loadWeightMap = loadWeightMap;
//# sourceMappingURL=loadWeightMap.js.map