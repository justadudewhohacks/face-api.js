const classes = ['amy', 'bernadette', 'howard', 'leonard', 'penny', 'raj', 'sheldon', 'stuart']

function getFaceImageUri(className, idx) {
  return `images/${className}/${className}${idx}.png`
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

// fetch first image of each class and compute their descriptors
async function initBbtFaceDescriptors(net, numImagesForTraining = 1) {
  const maxAvailableImagesPerClass = 5
  numImagesForTraining = Math.min(numImagesForTraining, maxAvailableImagesPerClass)
  return Promise.all(classes.map(
    async className => {
      const descriptors = []
      for (let i = 1; i < (numImagesForTraining + 1); i++) {
        const img = await faceapi.fetchImage(getFaceImageUri(className, i))
        descriptors.push(await faceapi.computeFaceDescriptor(img))
      }
      return {
        descriptors,
        className
      }
    }
  ))
}

function getBestMatch(descriptorsByClass, queryDescriptor) {
  function computeMeanDistance(descriptorsOfClass) {
    return faceapi.round(
      descriptorsOfClass
        .map(d => faceapi.euclideanDistance(d, queryDescriptor))
        .reduce((d1, d2) => d1 + d2, 0)
          / (descriptorsOfClass.length || 1)
      )
  }
  return descriptorsByClass
    .map(
      ({ descriptors, className }) => ({
        distance: computeMeanDistance(descriptors),
        className
      })
    )
    .reduce((best, curr) => best.distance < curr.distance ? best : curr)
}

