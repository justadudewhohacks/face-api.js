// hyper parameters
const objectScale = 1
const noObjectScale = 0.5
const coordScale = 5

const squared = e => Math.pow(e, 2)

const isSameAnchor = (p1, p2) =>
  p1.row === p2.row
    && p1.col === p2.col
    && p1.anchor === p2.anchor

const sum = vals => vals.reduce((sum, val) => sum + val, 0)

function computeNoObjectLoss(negative) {
  return squared(0 - negative.score)
}

function computeObjectLoss({ groundTruth, pred }) {
  return squared(
    faceapi.iou(
      groundTruth.box,
      pred.box
    )
    - pred.score
  )
}

function computeCoordLoss({ groundTruth, pred }, imgDims) {
  const anchor = window.net.anchors[groundTruth.anchor]
  const getWidthCorrections = box => Math.log((box.width / imgDims.width) / anchor.x)
  const getHeightCorrections = box => Math.log((box.height / imgDims.height) / anchor.y)

  return squared((groundTruth.box.left - pred.box.left) / imgDims.width)
    + squared((groundTruth.box.top - pred.box.top) / imgDims.height)
    + squared(getWidthCorrections(groundTruth.box) - getWidthCorrections(pred.box))
    + squared(getHeightCorrections(groundTruth.box) - getHeightCorrections(pred.box))
}

function computeLoss(outBoxesByAnchor, groundTruth, imgDims) {

  const { anchors } = window.net
  const inputSize = Math.max(imgDims.width, imgDims.height)
  const numCells = inputSize / 32

  const groundTruthByAnchor = groundTruth.map(rect => {
    const x = rect.x * imgDims.width
    const y = rect.y * imgDims.height
    const width = rect.width * imgDims.width
    const height = rect.height * imgDims.height

    const row = Math.round((y / inputSize) * numCells)
    const col = Math.round((x / inputSize) * numCells)
    const anchorsByIou = anchors.map((a, idx) => ({
      idx,
      iou: faceapi.iou(
        new faceapi.BoundingBox(0, 0, a.x * 32, a.y * 32),
        new faceapi.BoundingBox(0, 0, width, height)
      )
    })).sort((a1, a2) => a2.iou - a1.iou)

    console.log('anchorsByIou', anchorsByIou)

    const anchor = anchorsByIou[0].idx

    return {
      box: new faceapi.BoundingBox(x, y, x + width, y + height),
      row,
      col,
      anchor
    }
  })

  console.log('outBoxesByAnchor', outBoxesByAnchor.filter(o => o.score > 0.5).map(o => o))
  console.log('outBoxesByAnchor', outBoxesByAnchor.filter(o => o.score > 0.5).map(o => o.box.rescale(imgDims)))
  console.log('groundTruthByAnchor', groundTruthByAnchor)

  const negatives = outBoxesByAnchor.filter(pred => !groundTruthByAnchor.find(gt => isSameAnchor(gt, pred)))
  const positives = outBoxesByAnchor
    .map(pred => ({
      groundTruth: groundTruthByAnchor.find(gt => isSameAnchor(gt, pred)),
      pred: {
        ...pred,
        box: pred.box.rescale(imgDims)
      }
    }))
    .filter(pos => !!pos.groundTruth)


  console.log('negatives', negatives)
  console.log('positives', positives)

  const noObjectLoss = sum(negatives.map(computeNoObjectLoss))
  const objectLoss = sum(positives.map(computeObjectLoss))
  const coordLoss = sum(positives.map(positive => computeCoordLoss(positive, imgDims)))

  console.log('noObjectLoss', noObjectLoss)
  console.log('objectLoss', objectLoss)
  console.log('coordLoss', coordLoss)

  return noObjectScale * noObjectLoss
    + objectScale * objectLoss
    + coordScale * coordLoss
    // we don't compute a class loss, since we only have 1 class
    // + class_scale * sum(class_loss)
}