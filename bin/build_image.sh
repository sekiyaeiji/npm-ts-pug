#!/bin/sh

version=`node -pe 'require("./package.json").version'`

imagemin src/img/* -o dist/stat/$version/img
