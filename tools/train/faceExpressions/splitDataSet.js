const dataDistribution = {
  angry: {
    db: 1147,
    kaggle: 4953
  },
  disgusted: {
    db: 690,
    kaggle: 547
  },
  fearful: {
    db: 844,
    kaggle: 5121
  },
  happy: {
    db: 8634,
    kaggle: 8989
  },
  neutral: {
    db: 1262,
    kaggle: 6198
  },
  sad: {
    db: 929,
    kaggle: 6077
  },
  surprised: {
    db: 1264,
    kaggle: 4002
  }
}

const MAX_TRAIN_SAMPLES_PER_CLASS = 2000

require('./.env')
const { shuffleArray } = require('../../../')
const fs = require('fs')
const path = require('path')

const dbEmotionMapping = JSON.parse(fs.readFileSync(
  path.resolve(
    process.env.DATA_PATH,
    'face-expressions/emotionMapping.json'
  )
).toString())

const splitArray = (arr, idx) => [arr.slice(0, idx), arr.slice(idx)]

const trainData = {}
const testData = {}

Object.keys(dataDistribution)
  .forEach(label => {
    const { db, kaggle } = dataDistribution[label]

    // take max 0.7 percent of db, take rest from kaggle db
    const numDb = Math.floor(Math.min(0.7 * MAX_TRAIN_SAMPLES_PER_CLASS, 0.7 * db))
    const numKaggle = Math.floor(Math.min(MAX_TRAIN_SAMPLES_PER_CLASS - numDb, 0.7 * kaggle))

    const dbImages = shuffleArray(
      dbEmotionMapping[label]
        .map(img => ({ db: 'db', img }))
    )
    const kaggleImages = shuffleArray(
      Array(kaggle).fill(0).map((_, i) => `${i}.png`)
        .map(img => ({ db: 'kaggle', img }))
    )



    const [dbTrain, dbTest] = splitArray(dbImages, numDb)
    const [kaggleTrain, kaggleTest] = splitArray(kaggleImages, numKaggle)

    console.log()
    console.log('%s:', label)
    console.log('train data - db: %s, kaggle: %s', dbTrain.length, kaggleTrain.length)
    console.log('test data - db: %s, kaggle: %s', dbTest.length, kaggleTest.length)

    trainData[label] = dbTrain.concat(kaggleTrain)
    testData[label] = dbTest.concat(kaggleTest)
  })

fs.writeFileSync('trainData.json', JSON.stringify(trainData))
fs.writeFileSync('testData.json', JSON.stringify(testData))


