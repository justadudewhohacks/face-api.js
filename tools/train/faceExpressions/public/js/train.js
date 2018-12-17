async function train() {
  await load()

  for (let epoch = startEpoch; epoch < Infinity; epoch++) {

    if (epoch !== startEpoch) {
      // ugly hack to wait for loss datas for that epoch to be resolved
      setTimeout(
        () => onEpochDone(
          epoch - 1,
          new Float32Array(Array.from(window.net.faceFeatureExtractor.serializeParams())
            .concat(Array.from(window.net.serializeParams()))
          )
        ),
        10000
      )
    }
    window.lossValues[epoch] = 0

    const shuffledInputs = prepareDataForEpoch(window.trainData)
      console.log(shuffledInputs)

    for (let dataIdx = 0; dataIdx < shuffledInputs.length; dataIdx += window.batchSize) {
      const tsIter = Date.now()

      const batchData = shuffledInputs.slice(dataIdx, dataIdx + window.batchSize)
      const bImages = await Promise.all(
        batchData
          .map(data => getImageUrl(data))
          .map(imgUrl => faceapi.fetchImage(imgUrl))
      )
      const bOneHotVectors = batchData
        .map(data => getLabelOneHotVector(data.label))

      let tsBackward = Date.now()
      let tsForward = Date.now()
      const netInput = await faceapi.toNetInput(bImages)
      tsForward = Date.now() - tsForward

      const loss = optimizer.minimize(() => {
        tsBackward = Date.now()
        const labels = tf.tensor2d(bOneHotVectors)
        const out = window.net.runNet(netInput)

        const loss = tf.losses.softmaxCrossEntropy(
          labels,
          out,
          tf.Reduction.MEAN
        )

        return loss
      }, true)
      tsBackward = Date.now() - tsBackward

      // start next iteration without waiting for loss data

      loss.data().then(data => {
        const lossValue = data[0]
        window.lossValues[epoch] += lossValue
        window.withLogging && log(`epoch ${epoch}, dataIdx ${dataIdx} - loss: ${lossValue}, ( ${window.lossValues[epoch]})`)
        loss.dispose()
      })

      window.withLogging && log(`epoch ${epoch}, dataIdx ${dataIdx} - forward: ${tsForward} ms, backprop: ${tsBackward} ms, iter: ${Date.now() - tsIter} ms`)
      if (window.logsilly)  {
        log(`fetch: ${tsFetch} ms, pts: ${tsFetchPts} ms, jpgs: ${tsFetchJpgs} ms, bufferToImage: ${tsBufferToImage} ms`)
      }
      if (window.iterDelay) {
        await delay(window.iterDelay)
      } else {
        await tf.nextFrame()
      }
    }
  }
}