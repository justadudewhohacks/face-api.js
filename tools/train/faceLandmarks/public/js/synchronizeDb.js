async function fillPtsDb(ids) {
  const numFetchPerIteration = 4000

  for (let i = 0; i < Math.floor(ids.length / numFetchPerIteration) + 1; i++) {
    const ptsById = await Promise.all(
      ids.slice(i * numFetchPerIteration, (i + 1) * numFetchPerIteration)
        .map(async id => ({
          id,
          pts: await (await fetch(`${id}.json`)).json()
        }))
    )

    console.log('persistPts')
    console.time('persistPts')
    await persistPts(ptsById)
    console.timeEnd('persistPts')
  }
}

async function fillJpgsDb(ids) {
  const numFetchPerIteration = 4000

  for (let i = 0; i < Math.floor(ids.length / numFetchPerIteration) + 1; i++) {
    const jpgsById = await Promise.all(
      ids.slice(i * numFetchPerIteration, (i + 1) * numFetchPerIteration)
        .map(async id => ({
          id,
          blob: await fetchImage(`${id}.jpg`)
        }))
    )
    console.log('persistJpgs')
    console.time('persistJpgs')
    await persistJpgs(jpgsById)
    console.timeEnd('persistJpgs')
  }
}