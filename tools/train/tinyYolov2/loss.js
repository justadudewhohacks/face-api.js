const CELL_SIZE = 32

const getNumCells = inputSize => inputSize / CELL_SIZE

const inverseSigmoid = x => Math.log(x / (1 - x))

function getAnchors() {
  return window.net.anchors
}

function squaredSumOverMask(lossTensors, mask) {
  return tf.tidy(() => tf.sum(tf.square(tf.mul(mask, lossTensors))))
}

function assignBoxesToAnchors(groundTruthBoxes, reshapedImgDims) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)
  const numCells = getNumCells(inputSize)

  return groundTruthBoxes.map(box => {
    const { left, top, width, height } = box.rescale(reshapedImgDims)

    const ctX = left + (width / 2)
    const ctY = top + (height / 2)

    const col = Math.floor((ctX / inputSize) * numCells)
    const row = Math.floor((ctY / inputSize) * numCells)

    const anchorsByIou = getAnchors().map((anchor, idx) => ({
      idx,
      iou: faceapi.iou(
        new faceapi.BoundingBox(0, 0, anchor.x * CELL_SIZE, anchor.y * CELL_SIZE),
        new faceapi.BoundingBox(0, 0, width, height)
      )
    })).sort((a1, a2) => a2.iou - a1.iou)

    const anchor = anchorsByIou[0].idx

    return { row, col, anchor, box }
  })
}

function getGroundTruthMask(groundTruthBoxes, inputSize) {

  const numCells = getNumCells(inputSize)

  const mask = tf.zeros([numCells, numCells, 25])
  const buf = mask.buffer()

  groundTruthBoxes.forEach(({ row, col, anchor }) => {
    const anchorOffset = anchor * 5
    for (let i = 0; i < 5; i++) {
      buf.set(1, row, col, anchorOffset + i)
    }
  })

   return mask
}

function getCoordAndScoreMasks(inputSize) {

  const numCells = getNumCells(inputSize)

  const coordMask = tf.zeros([numCells, numCells, 25])
  const scoreMask = tf.zeros([numCells, numCells, 25])
  const coordBuf = coordMask.buffer()
  const scoreBuf = scoreMask.buffer()

  for (let row = 0; row < numCells; row++) {
    for (let col = 0; col < numCells; col++) {
      for (let anchor = 0; anchor < 5; anchor++) {
        const anchorOffset = 5 * anchor
        for (let i = 0; i < 4; i++) {
          coordBuf.set(1, row, col, anchorOffset + i)
        }
        scoreBuf.set(1, row, col, anchorOffset + 4)
      }
    }
  }

  return { coordMask, scoreMask }
}

function computeBoxAdjustments(groundTruthBoxes, reshapedImgDims) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)
  const numCells = getNumCells(inputSize)

  const adjustments = tf.zeros([numCells, numCells, 25])
  const buf = adjustments.buffer()

  groundTruthBoxes.forEach(({ row, col, anchor, box }) => {
    const { left, top, right, bottom, width, height } = box.rescale(reshapedImgDims)

    const centerX = (left + right) / 2
    const centerY = (top + bottom) / 2

    //const dCenterX = centerX - (col * CELL_SIZE + (CELL_SIZE / 2))
    //const dCenterY = centerY - (row * CELL_SIZE + (CELL_SIZE / 2))
    const dCenterX = centerX - (col * CELL_SIZE)
    const dCenterY = centerY - (row * CELL_SIZE)

    const dx = inverseSigmoid(dCenterX / CELL_SIZE)
    const dy = inverseSigmoid(dCenterY / CELL_SIZE)
    const dw = Math.log((width / CELL_SIZE) / getAnchors()[anchor].x)
    const dh = Math.log((height / CELL_SIZE) / getAnchors()[anchor].y)

    const anchorOffset = anchor * 5
    buf.set(dx, row, col, anchorOffset + 0)
    buf.set(dy, row, col, anchorOffset + 1)
    buf.set(dw, row, col, anchorOffset + 2)
    buf.set(dh, row, col, anchorOffset + 3)
  })

  return adjustments
}

function computeIous(predBoxes, groundTruthBoxes, reshapedImgDims) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)
  const numCells = getNumCells(inputSize)

  const isSameAnchor = p1 => p2 =>
    p1.row === p2.row
      && p1.col === p2.col
      && p1.anchor === p2.anchor

  const ious = tf.zeros([numCells, numCells, 25])
  const buf = ious.buffer()

  groundTruthBoxes.forEach(({ row, col, anchor, box }) => {
    const predBox = predBoxes.find(isSameAnchor({ row, col, anchor }))

    if (!predBox) {
      console.log(groundTruthBoxes)
      console.log(predBoxes)
      throw new Error(`no output box found for: row ${row}, col ${col}, anchor ${anchor}`)
    }

    const iou = faceapi.iou(
      box.rescale(reshapedImgDims),
      predBox.box.rescale(reshapedImgDims)
    )

    if (window.debug) {
      console.log('ground thruth box:', box.rescale(reshapedImgDims).toRect())
      console.log('predicted box:', predBox.box.rescale(reshapedImgDims).toRect())
      console.log('predicted score:', predBox.score)
      console.log('iou:', iou)
    }

    const anchorOffset = anchor * 5
    buf.set(iou, row, col, anchorOffset + 4)
  })

  return ious
}

window.computeNoObjectLoss = function(outTensor, mask) {
  return tf.tidy(() => {
    const lossTensor = tf.sigmoid(outTensor)
    return squaredSumOverMask(lossTensor, mask)
  })
}

function computeObjectLoss(outTensor, groundTruthBoxes, reshapedImgDims, paddings, mask) {
  return tf.tidy(() => {
    const predBoxes = window.net.postProcess(
      outTensor,
      { paddings }
    )

    const ious = computeIous(
      predBoxes,
      groundTruthBoxes,
      reshapedImgDims
    )

    const lossTensor = tf.sub(ious, tf.sigmoid(outTensor))

    return squaredSumOverMask(lossTensor, mask)
  })
}

function computeCoordLoss(groundTruthBoxes, outTensor, reshapedImgDims, mask, paddings) {
  return tf.tidy(() => {
    const boxAdjustments = computeBoxAdjustments(
      groundTruthBoxes,
      reshapedImgDims
    )

    if (window.debug) {
      const indToPos = []
      const numCells = outTensor.shape[1]
      for (let row = 0; row < numCells; row++) {
        for (let col = 0; col < numCells; col++) {
          for (let anchor = 0; anchor < 25; anchor++) {
            indToPos.push({ row, col, anchor: parseInt(anchor / 5) })
          }
        }
      }

      const indices = Array.from(mask.dataSync()).map((val, ind) => ({ val, ind })).filter(v => v.val !== 0).map(v => v.ind)
      const gt = Array.from(boxAdjustments.dataSync())
      const out = Array.from(outTensor.dataSync())

      const comp = indices.map(i => (
        {
          pos: indToPos[i],
          gt: gt[i],
          out: out[i]
        }
      ))
      console.log(comp.map(c => `gt: ${c.gt}, out: ${c.out}`))

      const getBbox = (which) => {
        const { row, col, anchor } = comp[0].pos

        const ctX = ((col + faceapi.sigmoid(comp[0][which])) / numCells) * paddings.x
        const ctY = ((row + faceapi.sigmoid(comp[1][which])) / numCells) * paddings.y
        const width = ((Math.exp(comp[2][which]) * getAnchors()[anchor].x) / numCells) * paddings.x
        const height = ((Math.exp(comp[3][which]) * getAnchors()[anchor].y) / numCells) * paddings.y

        const x = (ctX - (width / 2))
        const y = (ctY - (height / 2))

        return new faceapi.BoundingBox(x, y, x + width, y + height)
      }

      const outRect = getBbox('out').rescale(reshapedImgDims).toRect()
      const gtRect = getBbox('gt').rescale(reshapedImgDims).toRect()
      console.log('out', outRect)
      console.log('gtRect', gtRect)
    }


    const lossTensor = tf.sub(boxAdjustments, outTensor)

    return squaredSumOverMask(lossTensor, mask)
  })
}

function computeLoss(outTensor, groundTruth, reshapedImgDims, paddings) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)

  if (!inputSize) {
    throw new Error(`invalid inputSize: ${inputSize}`)
  }

  let groundTruthBoxes = assignBoxesToAnchors(
    groundTruth
      .map(({ x, y, width, height }) => new faceapi.Rect(x, y, width, height))
      .map(rect => rect.toBoundingBox()),
    reshapedImgDims
  )

  const groundTruthMask = getGroundTruthMask(groundTruthBoxes, inputSize)
  const { coordMask, scoreMask } = getCoordAndScoreMasks(inputSize)

  const noObjectLossMask = tf.tidy(() => tf.mul(scoreMask, tf.sub(tf.scalar(1), groundTruthMask)))
  const objectLossMask = tf.tidy(() => tf.mul(scoreMask, groundTruthMask))
  const coordLossMask = tf.tidy(() => tf.mul(coordMask, groundTruthMask))

  const noObjectLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(noObjectScale),
      computeNoObjectLoss(outTensor, noObjectLossMask)
    )
  )
  const objectLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(objectScale),
      computeObjectLoss(outTensor, groundTruthBoxes, reshapedImgDims, paddings, objectLossMask)
    )
  )

  const coordLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(coordScale),
      computeCoordLoss(groundTruthBoxes, outTensor, reshapedImgDims, coordLossMask, paddings)
    )
  )

  const totalLoss = tf.tidy(() => noObjectLoss.add(objectLoss).add(coordLoss))

  return {
    noObjectLoss,
    objectLoss,
    coordLoss,
    totalLoss
  }
}