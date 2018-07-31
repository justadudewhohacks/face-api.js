function getQuantizationRange(min, max, qdtype) {
  if (qdtype !== 0 && qdtype !== 1) {
    throw new Error('qdtype !== 0 && qdtype !== 1: ' + qdtype)
  }
  const quantMax = qdtype === 0 ? 255 : 65535
  const scale = (max - min) / quantMax

  let result = { scale, min, max }
  if (min <= 0 && 0 <= max) {
    const quantizedZeroPoint = (0 - min) / scale
    const nudgedZeroPoint = Math.round(quantizedZeroPoint)

    result.min = (-nudgedZeroPoint) * scale
    result.max = quantMax * scale + result.min
  }

  return result
}

function quantizeWeights(tensor, qdtype = 0) {
  const min = tensor.min().dataSync()[0]
  const max = tensor.max().dataSync()[0]
  if (min === max) {
    return {
      scale: 1.0,
      min,
      qdata: qdtype === 0 ? new Uint8Array(tensor.size) : new Uint16Array(tensor.size)
    }
  }

  const q = getQuantizationRange(min, max, qdtype)
  const qdata = tf.round(tf.clipByValue(tensor, q.min, q.max).sub(tf.scalar(q.min)).div(tf.scalar(q.scale))).dataSync()

  return {
    scale: q.scale,
    min: q.min,
    qdata: qdtype === 0 ? new Uint8Array(qdata) : new Uint16Array(qdata)
  }

}

function dequantizeWeights(qdata, scale, min) {
  if (qdata.qdata && qdata.scale && qdata.min) {
    return Float32Array.from(qdata.qdata, v => (v * qdata.scale) + qdata.min)
  }
  return Float32Array.from(qdata, v => (v * scale) + min)
}
