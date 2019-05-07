import { Gender } from '../ageGenderNet/types';
export declare type WithGender<TSource> = TSource & {
    gender: Gender;
    genderProbability: number;
};
export declare function isWithGender(obj: any): obj is WithGender<{}>;
export declare function extendWithGender<TSource>(sourceObj: TSource, gender: Gender, genderProbability: number): WithGender<TSource>;
