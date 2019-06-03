#!/bin/sh

json=$(cat ./package.json)
version=$(echo $json | jq .version | sed 's/"//g')

stylelint --config conf/stylelintrc.js src/scss/**/*.scss &&
  node-sass --output-style compressed src/scss/common/common.scss -o dist/stat/$version/css/

postcss dist/stat/$version/css/* --use autoprefixer css-mqpacker -d dist/stat/$version/css/ --no-map
