const imagemin = require('imagemin-keep-folder')
const package = require('../package.json')
const version = package.version

const TARGET = process.env.npm_lifecycle_event
const isFront = TARGET === 'build-front:image'
const isProd = TARGET === 'build-prod:image'
const path_dist = 'dist'

imagemin(['src/img/**/*.{jpg,png,gif}'], {
  replaceOutputDir: output => {
    return output.replace(/src\/img\//, `${path_dist}/stat/${version}/img/`)
  }
}).then(() => {
  console.log('imagemin 完了')
})
