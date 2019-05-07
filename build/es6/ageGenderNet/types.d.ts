import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export declare type AgeAndGenderPrediction = {
    age: number;
    gender: Gender;
    genderProbability: number;
};
export declare enum Gender {
    FEMALE = "female",
    MALE = "male"
}
export declare type NetOutput = {
    age: tf.Tensor1D;
    gender: tf.Tensor2D;
};
export declare type NetParams = {
    fc: {
        age: TfjsImageRecognitionBase.FCParams;
        gender: TfjsImageRecognitionBase.FCParams;
    };
};
