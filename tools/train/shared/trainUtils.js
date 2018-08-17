const log = (str, ...args) => console.log(`[${[(new Date()).toTimeString().substr(0, 8)]}] ${str || ''}`, ...args)

async function promiseSequential(promises) {
  const curr = promises[0]
  if (!curr) {
    return
  }

  await curr()
  return promiseSequential(promises.slice(1))
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function saveWeights(net, filename = 'train_tmp') {
  const binaryWeights = new Float32Array(
    net.getParamList()
      .map(({ tensor }) => Array.from(tensor.dataSync()))
      .reduce((flat, arr) => flat.concat(arr))
  )
  saveAs(new Blob([binaryWeights]), filename)
}

function imageToSquare(img) {
  const scale = 608 / Math.max(img.height, img.width)
  const width = scale * img.width
  const height = scale * img.height

  const canvas1 = faceapi.createCanvasFromMedia(img)
  const targetCanvas = faceapi.createCanvas({ width: 608, height: 608 })
  targetCanvas.getContext('2d').putImageData(canvas1.getContext('2d').getImageData(0, 0, width, height), 0, 0)
  return targetCanvas
}

function getPaddingsAndReshapedSize(img, inputSize) {
  const [h, w] = [img.height, img.width]
  const maxDim = Math.max(h, w)

  const f = inputSize / maxDim
  const reshapedImgDims = {
    height: Math.floor(h * f),
    width: Math.floor(w * f)
  }

  const paddings = new faceapi.Point(
    maxDim / img.width,
    maxDim / img.height
  )

  return { paddings, reshapedImgDims }
}