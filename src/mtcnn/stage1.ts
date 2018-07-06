import * as tf from '@tensorflow/tfjs-core';

import { PNet } from './PNet';
import { PNetParams } from './types';

function rescaleAndNormalize(x: tf.Tensor4D, scale: number): tf.Tensor4D {
  return tf.tidy(() => {
    const [height, width] = x.shape
    const resized = tf.image.resizeBilinear(x, [height * scale, width * scale])

    return tf.mul(tf.sub(resized, tf.scalar(127.5)), tf.scalar(0.0078125))

    // TODO: ?
    // img_x = np.expand_dims(scaled_image, 0)
    // img_y = np.transpose(img_x, (0, 2, 1, 3))

  })
}

export function stage1(x: tf.Tensor4D, scales: number[], params: PNetParams) {
  return tf.tidy(() => {

    const boxes = scales.map((scale) => {
      const resized = rescaleAndNormalize(x, scale)
      const { prob, convOut } = PNet(resized, params)
    })

  })
}

/*

  for scale in scales:
      scaled_image = self.__scale_image(image, scale)

      img_x = np.expand_dims(scaled_image, 0)
      img_y = np.transpose(img_x, (0, 2, 1, 3))

      out = self.__pnet.feed(img_y)

      out0 = np.transpose(out[0], (0, 2, 1, 3))
      out1 = np.transpose(out[1], (0, 2, 1, 3))

      boxes, _ = self.__generate_bounding_box(out1[0, :, :, 1].copy(),
                                              out0[0, :, :, :].copy(), scale, self.__steps_threshold[0])

      # inter-scale nms
      pick = self.__nms(boxes.copy(), 0.5, 'Union')
      if boxes.size > 0 and pick.size > 0:
          boxes = boxes[pick, :]
          total_boxes = np.append(total_boxes, boxes, axis=0)




  numboxes = total_boxes.shape[0]

  if numboxes > 0:
      pick = self.__nms(total_boxes.copy(), 0.7, 'Union')
      total_boxes = total_boxes[pick, :]

      regw = total_boxes[:, 2] - total_boxes[:, 0]
      regh = total_boxes[:, 3] - total_boxes[:, 1]

      qq1 = total_boxes[:, 0] + total_boxes[:, 5] * regw
      qq2 = total_boxes[:, 1] + total_boxes[:, 6] * regh
      qq3 = total_boxes[:, 2] + total_boxes[:, 7] * regw
      qq4 = total_boxes[:, 3] + total_boxes[:, 8] * regh

      total_boxes = np.transpose(np.vstack([qq1, qq2, qq3, qq4, total_boxes[:, 4]]))
      total_boxes = self.__rerec(total_boxes.copy())

      total_boxes[:, 0:4] = np.fix(total_boxes[:, 0:4]).astype(np.int32)
      status = StageStatus(self.__pad(total_boxes.copy(), stage_status.width, stage_status.height),
                            width=stage_status.width, height=stage_status.height)

  return total_boxes, status
  */