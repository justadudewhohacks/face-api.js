const classes = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart']

function getImageUri(className, idx) {
  return `/${className}/${className}${idx}.png`
}

async function initNet() {
  const res = await axios.get('face_recognition_model.weights', { responseType: 'arraybuffer' })
  const weights = new Float32Array(res.data)
  return facerecognition.faceRecognitionNet(weights)
}

function bufferToImgSrc(buf) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(buf)
  })
}

function imgSrcToData(src) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    canvas.width = 150
    canvas.height = 150
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = function() {
      ctx.drawImage(img, 0, 0)
      resolve(ctx.getImageData(0, 0, 150, 150))
    }
    img.onerror = reject
    img.src = src
  })
}

async function bufferToImageData(buf) {
  return imgSrcToData(await bufferToImgSrc(buf))
}

async function fetchImage(uri) {
  return (await axios.get(uri, { responseType: 'blob' })).data
}

function round(num) {
  return Math.floor(num * 100) / 100
}