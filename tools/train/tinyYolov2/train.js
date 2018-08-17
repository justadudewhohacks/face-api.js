const batchIdx = 0

function minimize(groundTruthBoxes, batchInput, inputSize, batch, { reshapedImgDims, paddings }) {
  const filename = batch.filenames[batchIdx]
  const { dataIdx } = batch

  return optimizer.minimize(() => {

    const outTensor = window.net.forwardInput(batchInput, inputSize)

    const {
      noObjectLoss,
      objectLoss,
      coordLoss,
      totalLoss
    } = computeLoss(
      outTensor,
      groundTruthBoxes,
      reshapedImgDims,
      paddings
    )

    const losses = {
      totalLoss: totalLoss.dataSync()[0],
      noObjectLoss: noObjectLoss.dataSync()[0],
      objectLoss: objectLoss.dataSync()[0],
      coordLoss: coordLoss.dataSync()[0]
    }

    const lossKey = `${filename}_${inputSize}`

    if (window.logTrainSteps) {
      log(`ground truth boxes: ${groundTruthBoxes.length}`)
      log(`noObjectLoss[${dataIdx}]: ${losses.noObjectLoss}`)
      log(`objectLoss[${dataIdx}]: ${losses.objectLoss}`)
      log(`coordLoss[${dataIdx}]: ${losses.coordLoss}`)
      log(`totalLoss[${dataIdx}]: ${losses.totalLoss}`)

      if (window.lossMap[lossKey]) {
        log(`loss change: ${losses.totalLoss - window.lossMap[lossKey].totalLoss}`)
      }
    }

    window.lossMap[lossKey] = losses

    return totalLoss
  }, true)
}

async function trainStep(batchCreators, inputSizes, rescaleEveryNthBatch, onBatchProcessed = () => {}) {

  async function step(currentBatchCreators) {
    if (!currentBatchCreators.batchCreators.length) {
      return
    }

    await promiseSequential(inputSizes.map(inputSize => async () => {

      await promiseSequential(currentBatchCreators.batchCreators.map(batchCreator => async () => {

        const batch = await batchCreator()
        const { imgs, groundTruthBoxes, filenames, dataIdx } = batch

        const img = imgs[0]
        const { reshapedImgDims, paddings } = getPaddingsAndReshapedSize(img, inputSize)
        const squareImg = imageToSquare(img)

        const batchInput = await faceapi.toNetInput(squareImg)

        const [imgHeight, imgWidth] = batchInput.inputs[batchIdx].shape

        // skip groundTruthBoxes, which are too tiny
        const scaleFactor = inputSize / Math.max(imgHeight, imgWidth)
        const filteredGroundTruthBoxes = groundTruthBoxes[batchIdx].filter(({ x, y, width, height }) => {
          const box = (new faceapi.Rect(x, y, width, height))
            .toBoundingBox()
            .rescale({ height: imgHeight, width: imgWidth })
            .rescale(scaleFactor)

          const isTooTiny = box.width < 40 || box.height < 40
          if (isTooTiny && window.debug) {
            log(`skipping box for input size ${inputSize}: (${Math.floor(box.width)} x ${Math.floor(box.height)})`)
          }
          return !isTooTiny
        })

        if (!filteredGroundTruthBoxes.length) {
          if (window.debug) {
            log(`no boxes for input size ${inputSize}, ${groundTruthBoxes[batchIdx].length} boxes were too small`)
          }
          batchInput.dispose()
          onBatchProcessed(dataIdx, inputSize)
          return
        }

        let ts = Date.now()
        const loss = minimize(filteredGroundTruthBoxes, batchInput, inputSize, batch, { reshapedImgDims, paddings })

        ts = Date.now() - ts
        if (window.logTrainSteps) {
          log(`trainStep time for dataIdx ${dataIdx} (${inputSize}): ${ts} ms`)
        }
        loss.dispose()
        batchInput.dispose()
        onBatchProcessed(dataIdx, inputSize)

        await tf.nextFrame()
      }))

    }))

    await step(currentBatchCreators.next(rescaleEveryNthBatch))
  }

  await step(batchCreators.next(rescaleEveryNthBatch))
}

async function fetchGroundTruthBoxesForFile(file) {
  const boxes = await fetch(file).then(res => res.json())
  return {
    file,
    boxes
  }
}

function createBatchCreators(detectionFilenames, batchSize) {
  if (batchSize < 1) {
    throw new Error('invalid batch size: ' + batchSize)
  }

  const batches = []
  const pushToBatch = (remaining) => {
    if (remaining.length) {
      batches.push(remaining.slice(0, batchSize))
      pushToBatch(remaining.slice(batchSize))
    }
    return batches
  }

  pushToBatch(detectionFilenames)

  const batchCreators = batches.map((filenamesForBatch, dataIdx) => async () => {
    const groundTruthBoxes = (await Promise.all(filenamesForBatch.map(fetchGroundTruthBoxesForFile)))
      .map(({ boxes }) => boxes)

    const imgs = await Promise.all(filenamesForBatch.map(
      async file => await faceapi.bufferToImage(await fetchImage(file.replace('.json', '')))
    ))

    return {
      imgs,
      groundTruthBoxes,
      filenames: filenamesForBatch,
      dataIdx
    }
  })

  let idx = 0
  function next(n) {
    const nextBatchCreators = batchCreators.slice(idx, idx + n)
    idx += n

    return {
      batchCreators: nextBatchCreators,
      next
    }
  }

  return {
    data: batchCreators,
    next
  }
}