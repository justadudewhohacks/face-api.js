const classes = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart']

function getImageUri(imageName) {
  return `images/${imageName}`
}

function getFaceImageUri(className, idx) {
  return `images/${className}/${className}${idx}.png`
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