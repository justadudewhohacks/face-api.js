import * as faceapi from '../src';
import { tf } from '../src';
import { BottomUpV5X } from './BottomUpV5X';

const inputSize = 640
const mainModules = [0, 0, 2, 2, 2, 2, 2]
//const filters = [32, 32, 64, 64, 128, 180, 256]
const filters = [32, 32, 64, 64, 64, 128, 256]
//const filters = [32, 32, 64, 64, 64, 64, 64]
window['tf'] = tf
const bottomUp = new BottomUpV5X(inputSize, mainModules, filters)
let input: tf.Tensor4D = tf.zeros([1, inputSize, inputSize, 3])
let isRunning = false


function getNumIters() {
  return parseInt((document.getElementById('numItersInput') as HTMLInputElement).value) || 100
}

async function load() {
  document.getElementById('status').innerHTML = 'loading'
  document.getElementById('status').innerHTML = 'idle'
}

async function finish(outputs: tf.Tensor4D[]) {
  await Promise.all(outputs.map(t => t.data()))
  outputs.forEach(t => t.dispose())
}

window['run'] = async function run() {
  if (!input || isRunning) return
  isRunning = true

  // warm up
  document.getElementById('status').innerHTML = 'warmup'
  const netInput = await faceapi.toNetInput(input)
  //const res = bottomUp.forwardSync(netInput)
  const profile = await tf.profile(() => bottomUp.forwardSync(netInput))
  console.log(profile)
  const outputs = profile.result as any
  await finish(outputs)

  document.getElementById('status').innerHTML = 'running'

  const totalTime = Date.now()

  const times = []
  for(let i = 0; i < getNumIters(); i++) {
    const d = Date.now()
    const outputs = await bottomUp.forward(input)
    await finish(outputs)
    times.push(Date.now() - d)
  }

  console.log(times)

  document.getElementById('status').innerHTML = 'idle'
  document.getElementById('result').innerHTML =  `${faceapi.utils.round((Date.now() - totalTime) / getNumIters())}`
  document.getElementById('times').innerHTML = times.join(', ')
  isRunning = false
}