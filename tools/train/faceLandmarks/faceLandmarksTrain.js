async function trainStep(batchCreators) {
  await promiseSequential(batchCreators.map((batchCreator, dataIdx) => async () => {

    const { batchInput, landmarksBatchTensor } = await batchCreator()

    let ts = Date.now()
    const cost = optimizer.minimize(() => {
      const out = window.trainNet.forwardInput(batchInput.managed())
      const loss = lossFunction(
        landmarksBatchTensor,
        out
      )
      return tf.sum(out)
    }, true)

    ts = Date.now() - ts
    console.log(`loss[${dataIdx}]: ${await cost.data()}, ${ts} ms (${ts / batchInput.batchSize} ms / batch element)`)

    landmarksBatchTensor.dispose()
    cost.dispose()

    await tf.nextFrame()
    console.log(tf.memory())
  }))
}

function createBatchCreators(data, batchSize) {
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

  pushToBatch(data)

  const batchCreators = batches.map(dataForBatch => async () => {
    const imgs = dataForBatch.map(d => d.img)
    const allLandmarks = dataForBatch.map(d => landmarkPositionsToArray(d.landmarks))

    const batchInput = await faceapi.toNetInput(imgs)
    const landmarksBatchTensor = tf.tidy(() => {
      const landmarkTensors = allLandmarks.map(arr => tf.tensor2d(arr, [1, 136]))
      return tf.stack(landmarkTensors, 0).as2D(-1, 136)
    })

    return {
      batchInput,
      landmarksBatchTensor
    }
  })

  return batchCreators
}

function landmarkPositionsToArray(landmarks) {
  return landmarks.getRelativePositions().map(pt => [pt.x, pt.y])
    .reduce((flat, arr) => flat.concat(arr))
}

function toFaceLandmarks(landmarks, { naturalWidth, naturalHeight }) {
  return new faceapi.FaceLandmarks68(
    landmarks.map(l => new faceapi.Point(l.x / naturalWidth, l.y / naturalHeight)),
    { width: naturalWidth, height: naturalHeight }
  )
}

async function loadImagesInBatch(allLandmarks, offset = 0) {
  return Promise.all(allLandmarks.map(async (landmarks, i) => {
    const imgUri = `/train_images/${i + offset}.png`
    const img = await faceapi.bufferToImage(await fetchImage(imgUri))
    return {
      imgUri,
      img,
      landmarks: toFaceLandmarks(landmarks, img)
    }
  }))
}

async function getTrainData() {
  const landmarksJson = (await (await fetch('/train_landmarks.json')).json())

  const numLandmarks = Object.keys(landmarksJson).length
  const allLandmarks = Array.from(
    new Array(numLandmarks),
    (_, i) => landmarksJson[i]
  )

  return await loadImagesInBatch(allLandmarks.slice(0, 100))
/**
  const batch1 = await loadImagesInBatch(allLandmarks.slice(0, 4000))
  const batch2 = await loadImagesInBatch(allLandmarks.slice(4000), 4000)

  return batch1.concat(batch2)
  */
}