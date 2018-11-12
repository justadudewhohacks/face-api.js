async function onSelectedImageChanged(uri) {
  const img = await faceapi.fetchImage(uri)
  $(`#inputImg`).get(0).src = img.src
  updateResults()
}

async function loadImageFromUrl(url) {
  const img = await requestExternalImage($('#imgUrlInput').val())
  $('#inputImg').get(0).src = img.src
  updateResults()
}

function renderImageSelectList(selectListId, onChange, initialValue) {
  const images = [1, 2, 3, 4, 5].map(idx => `bbt${idx}.jpg`)
  function renderChildren(select) {
    images.forEach(imageName =>
      renderOption(
        select,
        imageName,
        imageName
      )
    )
  }

  renderSelectList(
    selectListId,
    onChange,
    initialValue,
    renderChildren
  )
}

function initImageSelectionControls() {
  renderImageSelectList(
    '#selectList',
    async (uri) => {
      await onSelectedImageChanged(uri)
    },
    'bbt1.jpg'
  )
  onSelectedImageChanged($('#selectList select').val())
}