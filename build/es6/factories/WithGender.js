import { isValidProbablitiy } from 'tfjs-image-recognition-base';
import { Gender } from '../ageGenderNet/types';
export function isWithGender(obj) {
    return (obj['gender'] === Gender.MALE || obj['gender'] === Gender.FEMALE)
        && isValidProbablitiy(obj['genderProbability']);
}
export function extendWithGender(sourceObj, gender, genderProbability) {
    var extension = { gender: gender, genderProbability: genderProbability };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithGender.js.map