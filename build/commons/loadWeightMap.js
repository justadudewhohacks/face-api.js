"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
function getModelUris(uri, defaultModelName) {
    var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
    if (!uri) {
        return {
            modelBaseUri: '',
            manifestUri: defaultManifestFilename
        };
    }
    if (uri === '/') {
        return {
            modelBaseUri: '/',
            manifestUri: "/" + defaultManifestFilename
        };
    }
    var protocol = uri.startsWith('http://') ? 'http://' : uri.startsWith('https://') ? 'https://' : '';
    uri = uri.replace(protocol, '');
    var parts = uri.split('/').filter(function (s) { return s; });
    var manifestFile = uri.endsWith('.json')
        ? parts[parts.length - 1]
        : defaultManifestFilename;
    var modelBaseUri = protocol + (uri.endsWith('.json') ? parts.slice(0, parts.length - 1) : parts).join('/');
    modelBaseUri = uri.startsWith('/') ? "/" + modelBaseUri : modelBaseUri;
    return {
        modelBaseUri: modelBaseUri,
        manifestUri: modelBaseUri === '/' ? "/" + manifestFile : modelBaseUri + "/" + manifestFile
    };
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