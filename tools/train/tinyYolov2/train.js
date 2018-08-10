async function trainStep(batchCreators, inputSize) {

  await promiseSequential(batchCreators.map((batchCreator, dataIdx) => async () => {

    // TODO: skip if groundTruthBoxes are too tiny
    const { imgs, groundTruthBoxes, filenames } = await batchCreator()

    const batchInput = (await faceapi.toNetInput(imgs)).managed()
    let ts = Date.now()
    const loss = optimizer.minimize(() => {
      // TBD: batch loss
      const batchIdx = 0

      const outTensor = window.net.forwardInput(batchInput, inputSize)

      const {
        noObjectLoss,
        objectLoss,
        coordLoss,
        totalLoss
      } = computeLoss(
        outTensor,
        groundTruthBoxes[batchIdx],
        batchInput.getReshapedInputDimensions(batchIdx),
        batchInput.getRelativePaddings(batchIdx)
      )

      const losses = {
        totalLoss: totalLoss.dataSync()[0],
        noObjectLoss: noObjectLoss.dataSync()[0],
        objectLoss: objectLoss.dataSync()[0],
        coordLoss: coordLoss.dataSync()[0]
      }

      if (window.logTrainSteps) {
        log(`ground truth boxes: ${groundTruthBoxes[batchIdx].length}`)
        log(`noObjectLoss[${dataIdx}]: ${losses.noObjectLoss}`)
        log(`objectLoss[${dataIdx}]: ${losses.objectLoss}`)
        log(`coordLoss[${dataIdx}]: ${losses.coordLoss}`)
        log(`totalLoss[${dataIdx}]: ${losses.totalLoss}`)

        if (window.lossMap[filenames]) {
          log(`loss change: ${losses.totalLoss - window.lossMap[filenames].totalLoss}`)
        }
      }

      window.lossMap[filenames] = losses

      return totalLoss
    }, true)

    ts = Date.now() - ts
    if (window.logTrainSteps) {
      log(`trainStep time for dataIdx ${dataIdx} (${inputSize}): ${ts} ms (${ts / batchInput.batchSize} ms / batch element)`)
    }
    loss.dispose()
    await tf.nextFrame()
    //console.log(tf.memory())
  }))
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

  const batchCreators = batches.map(filenamesForBatch => async () => {
    const groundTruthBoxes = await Promise.all(filenamesForBatch.map(
      file => fetch(file).then(res => res.json())
    ))

    const imgs = await Promise.all(filenamesForBatch.map(
      async file => await faceapi.bufferToImage(await fetchImage(file.replace('.json', '')))
    ))

    return {
      imgs,
      groundTruthBoxes,
      filenames: filenamesForBatch
    }
  })

  return batchCreators
}