export function getImageUrl({ db, img }) {
  if (db === 'kaggle') {
    return `kaggle-face-expressions-db/${label}/${id}.png`
  }

  const dirNr = Math.floor(id / NUM_IMAGES_PER_DIR)
  return `cropped-faces/jpgs${dirNr + 1}/${id}.jpg`
}