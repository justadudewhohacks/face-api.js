import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';

export type NetParams = {
  conv0: ConvParams
  conv1: ConvParams
  conv2: ConvParams
  conv3: ConvParams
  conv4: ConvParams
  conv5: ConvParams
  conv6: ConvParams
  conv7: ConvParams
  fc0: FCParams
  fc1: FCParams
}