import { isValidProbablitiy } from 'tfjs-image-recognition-base';

import { Gender } from '../ageGenderNet/types';

export type WithGender<TSource> = TSource & {
  gender: Gender
  genderProbability: number
}

export function isWithGender(obj: any): obj is WithGender<{}> {
  return (obj['gender'] === Gender.MALE || obj['gender'] === Gender.FEMALE)
    && isValidProbablitiy(obj['genderProbability'])
}

export function extendWithGender<
  TSource
> (
  sourceObj: TSource,
  gender: Gender,
  genderProbability: number
): WithGender<TSource> {

  const extension = { gender, genderProbability }
  return Object.assign({}, sourceObj, extension)
}