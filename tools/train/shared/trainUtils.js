async function promiseSequential(promises) {
  const curr = promises[0]
  if (!curr) {
    return
  }

  await curr()
  return promiseSequential(promises.slice(1))
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function saveWeights(net, filename = 'train_tmp') {
  const binaryWeights = new Float32Array(
    net.getParamList()
      .map(({ tensor }) => Array.from(tensor.dataSync()))
      .reduce((flat, arr) => flat.concat(arr))
  )
  saveAs(new Blob([binaryWeights]), filename)
}

const log = (str, ...args) => console.log(`[${[(new Date()).toTimeString().substr(0, 8)]}] ${str || ''}`, ...args)
