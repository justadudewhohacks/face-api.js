function getImageUrl({ db, label, img }) {
  if (db === 'kaggle') {
    return `kaggle-face-expressions-db/${label}/${img}`
  }

  const id = parseInt(img.replace('.png'))
  const dirNr = Math.floor(id / 5000)
  return `cropped-faces/jpgs${dirNr + 1}/${img}`
}

function prepareDataForEpoch(data) {
  return faceapi.shuffleArray(
    Object.keys(data).map(label => {
      let dataForLabel = data[label].map(data => ({ ...data, label }))
      // since train data for "disgusted" have less than 2000 samples
      // use some data twice to ensure an even distribution
      dataForLabel = label === 'disgusted'
        ? faceapi.shuffleArray(dataForLabel.concat(dataForLabel).concat(dataForLabel)).slice(0, 2000)
        : dataForLabel
      return dataForLabel
    }).reduce((flat, arr) => arr.concat(flat))
  )
}

function getLabelOneHotVector(faceExpression) {
  const label = faceapi.FaceExpressionNet.getFaceExpressionLabel(faceExpression)
  return Array(7).fill(0).map((_, i) => i === label ? 1 : 0)
}

async function onEpochDone(epoch, params) {
  saveWeights(params || window.net, `face_expression_model_${epoch}.weights`)

  const loss = window.lossValues[epoch]
  saveAs(new Blob([JSON.stringify({ loss, avgLoss: loss / (2000 * 7) })]), `face_expression_model_${epoch}.json`)

}

