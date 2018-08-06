// hyper parameters
const objectScale = 1
const noObjectScale = 0.5
const coordScale = 5

const CELL_SIZE = 32

const getNumCells = inputSize => inputSize / CELL_SIZE

function getAnchors() {
  return window.net.anchors
}

function assignBoxesToAnchors(groundTruthBoxes, reshapedImgDims) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)
  const numCells = getNumCells(inputSize)

  return groundTruthBoxes.map(box => {
    const { left: x, top: y, width, height } = box.rescale(reshapedImgDims)

    const row = Math.round((y / inputSize) * numCells)
    const col = Math.round((x / inputSize) * numCells)

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

function computeBoxAdjustments(groundTruthBoxes, reshapedImgDims) {

  const inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height)
  const numCells = getNumCells(inputSize)

  const adjustments = tf.zeros([numCells, numCells, 25])
  const buf = adjustments.buffer()

  groundTruthBoxes.forEach(({ row, col, anchor, box }) => {
    const { left, top, right, bottom, width, height } = box.rescale(reshapedImgDims)

    const centerX = (left + right) / 2
    const centerY = (top + bottom) / 2
    const dx = (centerX - (col * CELL_SIZE + (CELL_SIZE / 2))) / inputSize
    const dy = (centerY - (row * CELL_SIZE + (CELL_SIZE / 2))) / inputSize
    const dw = Math.log(width / getAnchors()[anchor].x)
    const dh = Math.log(height / getAnchors()[anchor].y)

    const anchorOffset = anchor * 5
    buf.set(dx, row, col, anchorOffset + 0)
    buf.set(dy, row, col, anchorOffset + 1)
    buf.set(dw, row, col, anchorOffset + 2)
    buf.set(dh, row, col, anchorOffset + 3)
  })

  return adjustments
}

function computeIous(predBoxes, groundTruthBoxes, reshapedImgDims) {

  const numCells = getNumCells(Math.max(reshapedImgDims.width, reshapedImgDims.height))

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

    const anchorOffset = anchor * 5
    buf.set(iou, row, col, anchorOffset + 4)
  })

  return ious
}

function computeNoObjectLoss(outTensor) {
  return tf.tidy(() => tf.square(tf.sigmoid(outTensor)))
}

function computeObjectLoss(outTensor, groundTruthBoxes, reshapedImgDims, paddings) {
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

    return tf.square(tf.sub(ious, tf.sigmoid(outTensor)))
  })
}

function computeCoordLoss(groundTruthBoxes, outTensor, reshapedImgDims) {
  return tf.tidy(() => {
    const boxAdjustments = computeBoxAdjustments(
      groundTruthBoxes,
      reshapedImgDims
    )

    return tf.square(tf.sub(boxAdjustments, outTensor))
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

  const mask = getGroundTruthMask(
    groundTruthBoxes,
    inputSize
  )
  const inverseMask =  tf.tidy(() => tf.sub(tf.scalar(1), mask))

  const noObjectLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(noObjectScale),
      tf.sum(tf.mul(inverseMask, computeNoObjectLoss(outTensor)))
    )
  )
  const objectLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(objectScale),
      tf.sum(tf.mul(mask, computeObjectLoss(outTensor, groundTruthBoxes, reshapedImgDims, paddings)))
    )
  )

  const coordLoss = tf.tidy(() =>
    tf.mul(
      tf.scalar(coordScale),
      tf.sum(tf.mul(mask, computeCoordLoss(groundTruthBoxes, outTensor, reshapedImgDims)))
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