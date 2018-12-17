async function test(db) {
  const faceExpressions = Object.keys(window.testData)
  let errors = {}
  let preds = {}
  let thresh03 = {}
  let thresh05 = {}
  let thresh08 = {}
  let sizes = {}

  for (let faceExpression of faceExpressions) {

    const container = document.getElementById('container')
    const span = document.createElement('div')
    container.appendChild(span)

    console.log(faceExpression)

    const dataForLabel = window.testData[faceExpression]
      .filter(data => data.db === db)
      .slice(0, window.numDataPerClass)

    errors[faceExpression] = 0
    preds[faceExpression] = 0
    thresh03[faceExpression] = 0
    thresh05[faceExpression] = 0
    thresh08[faceExpression] = 0
    sizes[faceExpression] = dataForLabel.length


    for (let [idx, data] of dataForLabel.entries()) {
      span.innerHTML =  faceExpression + ': ' + faceapi.round(idx / dataForLabel.length) * 100 + '%'

      const img = await faceapi.fetchImage(getImageUrl({ ...data, label: faceExpression }))
      const pred = await window.net.predictExpressions(img)
      const bestPred = pred
        .reduce((best, curr) => curr.probability < best.probability ? best : curr)

      const { probability } = pred.find(p => p.expression === faceExpression)
      thresh03[faceExpression] += (probability > 0.3 ? 1 : 0)
      thresh05[faceExpression] += (probability > 0.5 ? 1 : 0)
      thresh08[faceExpression] += (probability > 0.8 ? 1 : 0)
      errors[faceExpression] += 1 - probability
      preds[faceExpression] += (bestPred.expression === faceExpression ? 1 : 0)
    }

    span.innerHTML = faceExpression + ': 100%'

  }

  const totalError = faceExpressions.reduce((err, faceExpression) => err + errors[faceExpression], 0)

  const relative = (obj) => {
    res = {}
    Object.keys(sizes).forEach((faceExpression) => {
      res[faceExpression] = faceapi.round(
        obj[faceExpression] / sizes[faceExpression]
      )
    })
    return res
  }

  console.log('done...')
  console.log('test set size:', sizes)
  console.log('preds:', relative(preds))
  console.log('thresh03:', relative(thresh03))
  console.log('thresh05:', relative(thresh05))
  console.log('thresh08:', relative(thresh08))
  console.log('errors:', errors)
  console.log('total error:', totalError)
}