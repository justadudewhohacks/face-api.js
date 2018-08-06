async function trainStep(batchCreators, inputSize) {

  await promiseSequential(batchCreators.map((batchCreator, dataIdx) => async () => {

    // TODO: skip if groundTruthBoxes are too tiny
    const { imgs, groundTruthBoxes } = await batchCreator()

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


      console.log('ground truth boxes:', groundTruthBoxes[batchIdx].length)
      console.log(`noObjectLoss[${dataIdx}]: ${noObjectLoss.dataSync()}`)
      console.log(`objectLoss[${dataIdx}]: ${objectLoss.dataSync()}`)
      console.log(`coordLoss[${dataIdx}]: ${coordLoss.dataSync()}`)
      console.log(`totalLoss[${dataIdx}]: ${totalLoss.dataSync()}`)

      return totalLoss
    }, true)

    ts = Date.now() - ts
    console.log(`trainStep time for dataIdx ${dataIdx} (${inputSize}): ${ts} ms (${ts / batchInput.batchSize} ms / batch element)`)

    loss.dispose()

    await tf.nextFrame()
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

  const batchCreators = batches.map(filenameForBatch => async () => {
    const groundTruthBoxes = await Promise.all(filenameForBatch.map(
      file => fetch(file).then(res => res.json())
    ))

    const imgs = await Promise.all(filenameForBatch.map(
      async file => await faceapi.bufferToImage(await fetchImage(file.replace('.json', '')))
    ))

    return {
      imgs,
      groundTruthBoxes
    }
  })

  return batchCreators
}