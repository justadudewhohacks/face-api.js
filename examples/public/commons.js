const classes = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart']

function getImageUri(imageName) {
  return `images/${imageName}`
}

function getFaceImageUri(className, idx) {
  return `images/${className}/${className}${idx}.png`
}

async function fetchImage(uri) {
  return (await axios.get(uri, { responseType: 'blob' })).data
}

function round(num) {
  return Math.floor(num * 100) / 100
}

function getElement(arg) {
  if (typeof arg === 'string') {
    return document.getElementById(arg)
  }
  return arg
}

async function initFaceDetectionNet() {
  const res = await axios.get('face_detection_model.weights', { responseType: 'arraybuffer' })
  const weights = new Float32Array(res.data)
  return facerecognition.faceDetectionNet(weights)
}

async function initFaceRecognitionNet() {
  const res = await axios.get('face_recognition_model.weights', { responseType: 'arraybuffer' })
  const weights = new Float32Array(res.data)
  return facerecognition.faceRecognitionNet(weights)
}

function drawImgToCanvas(canvasArg, imgArg) {
  const canvas = getElement(canvasArg)
  const img = getElement(imgArg)
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  return ctx
}

function imgSrcToImageData(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      const ctx = drawImgToCanvas(document.createElement('canvas'), img)
      resolve(ctx.getImageData(0, 0, img.width, img.height))
    }
    img.onerror = reject
    img.src = src
  })
}

function bufferToImgSrc(buf) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(buf)
  })
}

async function bufferToImageData(buf) {
  return imgSrcToImageData(await bufferToImgSrc(buf))
}

function drawBox(canvasArg, x, y, w, h, lineWidth = 2, color = 'blue') {
  const canvas = getElement(canvasArg)
  const ctx = canvas.getContext('2d')
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.strokeRect(x, y, w, h)
}

function drawText(canvasArg, x, y, text, fontSize = 20, fontStyle = 'Georgia', color = 'blue') {
  const canvas = getElement(canvasArg)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = color
  ctx.font = fontSize + 'px ' + fontStyle
  ctx.fillText(text, x, y)
}

function drawDetection(canvasArg, detection, options = {}) {
  const canvas = getElement(canvasArg)
  const detectionArray = Array.isArray(detection)
    ? detection
    : [detection]

  detectionArray.forEach((det) => {
    const {
      score,
      box
    } = det

    const {
      left,
      right,
      top,
      bottom
    } = box

    const {
      color,
      lineWidth = 2,
      fontSize = 20,
      fontStyle,
      withScore = true
    } = options

    const padText = 2 + lineWidth

    drawBox(
      canvas,
      left,
      top,
      right - left,
      bottom - top,
      lineWidth,
      color
    )
    if (withScore) {
      drawText(
        canvas,
        left + padText,
        top + (fontSize * 0.6) + padText,
        round(score),
        fontSize,
        fontStyle,
        color
      )
    }
  })
}

function renderNavBar(navbarId, exampleUri) {
  const examples = [
    {
      uri: 'face_detection',
      name: 'Face Detection'
    },
    {
      uri: 'face_recognition',
      name: 'Face Recognition'
    },
    {
      uri: 'face_similarity',
      name: 'Face Similarity'
    }
  ]

  const navbar = $(navbarId).get(0)
  navbar.classList.add('row')
  examples
    .filter(ex => ex.uri !== exampleUri)
    .forEach(ex => {
      const a = document.createElement('a')
      navbar.appendChild(a)

      a.classList.add('waves-effect', 'waves-light', 'btn', 'margin-sm')
      a.href = ex.uri
      a.innerHTML = ex.name
    })
}

function renderSelectList(selectListId, onChange, initialValue, renderChildren) {
  const select = document.createElement('select')
  $(selectListId).get(0).appendChild(select)
  renderChildren(select)
  $(select).val(initialValue)
  $(select).on('change', (e) => onChange(e.target.value))
  $(select).material_select()
}

function renderOption(parent, text, value) {
  const option = document.createElement('option')
  option.innerHTML = text
  option.value = value
  parent.appendChild(option)
}

function renderFaceImageSelectList(selectListId, onChange, initialValue) {
  const indices = [1, 2, 3, 4, 5]
  function renderChildren(select) {
    classes.forEach(className => {
      const optgroup = document.createElement('optgroup')
      optgroup.label = className
      select.appendChild(optgroup)
      indices.forEach(imageIdx =>
        renderOption(
          optgroup,
          `${className} ${imageIdx}`,
          getFaceImageUri(className, imageIdx)
        )
      )
    })
  }

  renderSelectList(
    selectListId,
    onChange,
    getFaceImageUri(initialValue.className, initialValue.imageIdx),
    renderChildren
  )
}

function renderImageSelectList(selectListId, onChange, initialValue) {
  const images = [1, 2, 3, 4, 5]
  function renderChildren(select) {
    images.forEach(imageName =>
      renderOption(
        select,
        `${imageName}.jpg`,
        getImageUri(`${imageName}.jpg`)
      )
    )
  }

  renderSelectList(
    selectListId,
    onChange,
    getImageUri(`${initialValue}.jpg`),
    renderChildren
  )
}