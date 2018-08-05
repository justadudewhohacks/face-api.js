async function trainStep(batchCreators, inputSize) {

  await promiseSequential(batchCreators.map((batchCreator, dataIdx) => async () => {

    // TODO: skip if groundTruthBoxes are too tiny
    const { imgs, groundTruthBoxes } = await batchCreator()

    const batchInput = (await faceapi.toNetInput(imgs)).managed()

    let ts = Date.now()
    const loss = optimizer.minimize(() => {
      const outTensor = window.net.forwardInput(batchInput, inputSize)
      const outTensorsByBatch = tf.tidy(() => outTensor.unstack().expandDims())
      outTensor.dispose()

      const losses = outTensorsByBatch.map(
        (out, batchIdx) => {
          const outBoxesByAnchor = window.net.postProcess(
            out,
            {
              scoreThreshold: -1,
              paddings: batchInput.getRelativePaddings(batchIdx)
            }
          )

          const loss = computeLoss(
            outBoxesByAnchor,
            groundTruthBoxes[batchIdx],
            netInput.getReshapedInputDimensions(batchIdx)
          )

          console.log(`loss for batch ${batchIdx}: ${loss}`)

          return loss
        }
      )

      outTensorsByBatch.forEach(t => t.dispose())

      return losses.reduce((sum, loss) => sum + loss, 0)
    }, true)

    ts = Date.now() - ts
    console.log(`loss[${dataIdx}]: ${loss}, ${ts} ms (${ts / batchInput.batchSize} ms / batch element)`)

    await tf.nextFrame()
  }))
}

function createBatchCreators(batchSize) {
  if (batchSize < 1) {
    throw new Error('invalid batch size: ' + batchSize)
  }

  const batches = []
  const pushToBatch = (remaining) => {
    if (remaining.length) {
      batches.push(remaining.slice(0, batchSize))
      pushToBatch(remaining.
        slice(batchSize))
    }
    return batches
  }

  pushToBatch(window.detectionFilenames)

  const batchCreators = batches.map(detectionFilenames => async () => {
    const groundTruthBoxes = detectionFilenames.map(
      detectionFilenames.map(file => fetch(file).then(res => res.json()))
    )

    const imgs = await Promise.all(
      detectionFilenames.map(async file => await faceapi.bufferToImage(await fetchImage(file.replace('.json', ''))))
    )

    return {
      imgs,
      groundTruthBoxes
    }
  })

  return batchCreators
}