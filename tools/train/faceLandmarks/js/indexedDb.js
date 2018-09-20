const  indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB

let jsonsDb = null
let jpgsDb = null

const openJsons = indexedDB.open('jsons', 1)
const openJpgs = indexedDB.open('jpgs', 1)

openJsons.onupgradeneeded = function() {
  jsonsDb = openJsons.result
  jsonsDb.createObjectStore('jsons', { keyPath: 'id' })
}
openJpgs.onupgradeneeded = function() {
  jpgsDb = openJpgs.result
  jpgsDb.createObjectStore('jpgs', { keyPath: 'id' })
}
openJsons.onsuccess = function() {
  console.log('connected to jsons')
  jsonsDb = openJsons.result
}
openJpgs.onsuccess = function() {
  console.log('connected to jpgs')
  jpgsDb = openJpgs.result
}

function putReq(store, obj) {
  return new Promise((res, rej) => {
    const req = store.put(obj)
    req.onsuccess = res
    req.onerror = rej
  })
}

function getReq(store, id, throwIfNoResult = true) {
  return new Promise((res, rej) => {
    const req = store.get(id)
    req.onsuccess = () => {
      if (!req.result && throwIfNoResult) {
        return rej(`no result for id: ${id}`)
      }
      res(req.result)
    }
    req.onerror = rej
  })
}

function existsReq(store, id) {
  return getReq(store, id, false)
}

async function getNotFound(store, ids) {
  return (await Promise.all(ids.map(async id => ({ id, exists: await existsReq(store, id) }))))
    .filter(({ exists }) => !exists)
    .map(({ id }) => id)
}

async function getNotFoundPts(ids) {
  const store = jsonsDb.transaction('jsons', 'readonly').objectStore('jsons')
  return getNotFound(store, ids)
}

async function getNotFoundJpegs(ids) {
  const store = jpgsDb.transaction('jpgs', 'readonly').objectStore('jpgs')
  return getNotFound(store, ids)
}

async function persistPts(ptsById, overwrite = false) {
  const store = jsonsDb.transaction('jsons', 'readwrite').objectStore('jsons')
  for (let i = 0; i < ptsById.length; i++) {
    const { id, pts } = ptsById[i]
    if (!await existsReq(store, id)) {
      console.log('persistPts - inserting %s', id)
      await putReq(store, { id, pts })
    }
  }
}

function getPts(ids) {
  const store = jsonsDb.transaction('jsons', 'readonly').objectStore('jsons')
  return Promise.all(ids.map(id => getReq(store, id)))
}

async function persistJpgs(jpgsById, overwrite = false) {
  const store = jpgsDb.transaction('jpgs', 'readwrite').objectStore('jpgs')
  for (let i = 0; i < jpgsById.length; i++) {
    const { id, blob } = jpgsById[i]
    if (!await existsReq(store, id)) {
      console.log('persistJpgs - inserting %s', id)
      await putReq(store, { id, blob })
    }
  }
}

function getJpgs(ids) {
  const store = jpgsDb.transaction('jpgs', 'readonly').objectStore('jpgs')
  return Promise.all(ids.map(id => getReq(store, id)))
}

