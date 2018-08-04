async function trainStep(batchCreators) {
  await promiseSequential(batchCreators.map((batchCreator, dataIdx) => async () => {

    const { batchInput, groundTruthBoxes } = await batchCreator()
    /*
    let ts = Date.now()
    const cost = optimizer.minimize(() => {
      const out = window.trainNet.forwardInput(batchInput.managed())
      const loss = lossFunction(
        landmarksBatchTensor,
        out
      )
      return loss
    }, true)

    ts = Date.now() - ts
    console.log(`loss[${dataIdx}]: ${await cost.data()}, ${ts} ms (${ts / batchInput.batchSize} ms / batch element)`)

    landmarksBatchTensor.dispose()
    cost.dispose()

    await tf.nextFrame()
  }))
  */
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
    const imgs = detectionFilenames.map(
      detectionFilenames.map(file => fetch(file).then(res => res.json()))
    )
    const groundTruthBoxes = await Promise.all(
      detectionFilenames.map(async file => await faceapi.bufferToImage(await fetchImage(file.replace('.json', ''))))
    )

    const batchInput = await faceapi.toNetInput(imgs)

    return {
      batchInput,
      groundTruthBoxes
    }
  })

  return batchCreators
}