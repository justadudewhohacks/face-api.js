"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var types_1 = require("../ageGenderNet/types");
function isWithGender(obj) {
    return (obj['gender'] === types_1.Gender.MALE || obj['gender'] === types_1.Gender.FEMALE)
        && tfjs_image_recognition_base_1.isValidProbablitiy(obj['genderProbability']);
}
exports.isWithGender = isWithGender;
function extendWithGender(sourceObj, gender, genderProbability) {
    var extension = { gender: gender, genderProbability: genderProbability };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithGender = extendWithGender;
//# sourceMappingURL=WithGender.js.map