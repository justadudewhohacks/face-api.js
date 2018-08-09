function onKeyDown(e) {
  e.target.value = (
    parseInt(e.target.value) + (e.keyCode === 38 ? 1 : (e.keyCode === 40 ? -1 : 0))
  ) || e.target.value || 0

  const uri = '/train_images/' + e.target.value + '.png'

  console.log(uri)
  onSelectionChanged(uri)
}

function onChangeDrawLines(e) {
  window.drawLines = $(e.target).prop('checked')
  redraw()
}

async function onSelectionChanged(uri) {
  const imgBuf = await fetchImage(uri)
  window.currentImg = await faceapi.bufferToImage(imgBuf)
  window.landmarks = await Promise.all(window.nets.map(
    async net => net.detectLandmarks(window.currentImg)
  ))
  redraw(uri)
}

function drawLandmarkCanvas(img, landmarks, drawOpts) {
  const canvas = faceapi.createCanvasFromMedia(img)
  $('#faceContainer').append(canvas)

  faceapi.drawLandmarks(
    canvas,
    landmarks,
    drawOpts
  )
}

function redraw(uri) {
  $('#faceContainer').empty()

  const drawOpts = { lineWidth: window.drawLines ? 2 : 4, drawLines: window.drawLines }
  window.landmarks.forEach(landmarks => {
    drawLandmarkCanvas(window.currentImg, landmarks, drawOpts)
  })

  const trainImgAndLandmarks = window.trainData.find(t => t.imgUri === uri)
  if (trainImgAndLandmarks) {
    drawLandmarkCanvas(trainImgAndLandmarks.img, trainImgAndLandmarks.landmarks, drawOpts)
  }
}

async function loadNet(file) {
  const res = await fetch(file)
  const weights = new Float32Array(await res.arrayBuffer())
  return faceapi.faceLandmarkNet(weights)
}

async function init() {
  //await faceapi.loadFaceLandmarkModel('/')
  //window.nets.push(faceapi.landmarkNet)
  //window.nets.push(await loadNet('retrained/landmarks_v0.weights'))
  //window.nets.push(await loadNet('retrained/landmarks_v2.weights'))

  window.trainNet = await loadNet('/tmp/retrained/landmarks_v9.weights')
  window.nets.push(trainNet)

  $('#loader').hide()
  await run()
  await onSelectionChanged($('#selectList select').val())
}

$(document).ready(function() {
  $('#imgByNr').keydown(onKeyDown);
  renderFaceImageSelectList(
    '#selectList',
    onSelectionChanged,
    { className: 'sheldon', imageIdx: 1 }
  )
  init()
})