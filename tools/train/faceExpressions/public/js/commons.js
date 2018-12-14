function getImageUrl({ db, label, img }) {
  if (db === 'kaggle') {
    return `kaggle-face-expressions-db/${label}/${img}`
  }

  const id = parseInt(img.replace('.png'))
  const dirNr = Math.floor(id / 5000)
  return `cropped-faces/jpgs${dirNr + 1}/${img}`
}

