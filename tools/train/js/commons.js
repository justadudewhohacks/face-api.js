const log = (str, ...args) => console.log(`[${[(new Date()).toTimeString().substr(0, 8)]}] ${str || ''}`, ...args)

function saveWeights(netOrParams, filename = 'train_tmp') {
  saveAs(new Blob([netOrParams instanceof Float32Array ? netOrParams : netOrParams.serializeParams()]), filename)
}

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}