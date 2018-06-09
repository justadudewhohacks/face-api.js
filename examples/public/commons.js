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

// fetch first image of each class and compute their descriptors
async function initTrainDescriptorsByClass(net) {
  return Promise.all(classes.map(
    async className => {
      const img = await facerecognition.bufferToImage(
        await fetchImage(getFaceImageUri(className, 1))
      )
      const descriptor = await net.computeFaceDescriptor(img)
      return {
        descriptor,
        className
      }
    }
  ))
}

function getBestMatch(allDescriptors, queryDescriptor) {
  return allDescriptors
    .map(
      ({ descriptor, className }) => ({
        distance: facerecognition.round(
          facerecognition.euclideanDistance(descriptor, queryDescriptor)
        ),
        className
      })
    )
    .reduce((best, curr) => best.distance < curr.distance ? best : curr)
}

function renderNavBar(navbarId, exampleUri) {
  const examples = [
    {
      uri: 'face_detection',
      name: 'Face Detection'
    },
    {
      uri: 'face_detection_video',
      name: 'Face Detection Video'
    },
    {
      uri: 'face_recognition',
      name: 'Face Recognition'
    },
    {
      uri: 'face_similarity',
      name: 'Face Similarity'
    },
    {
      uri: 'detect_and_draw_faces',
      name: 'Detect and Draw Faces'
    },
    {
      uri: 'detect_and_recognize_faces',
      name: 'Detect and Recognize Faces'
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
  const images = [1, 2, 3, 4, 5].map(idx => `bbt${idx}.jpg`)
  function renderChildren(select) {
    images.forEach(imageName =>
      renderOption(
        select,
        imageName,
        getImageUri(imageName)
      )
    )
  }

  renderSelectList(
    selectListId,
    onChange,
    getImageUri(initialValue),
    renderChildren
  )
}