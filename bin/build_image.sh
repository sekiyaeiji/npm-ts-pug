#!/bin/sh

json=$(cat ./package.json)
version=$(echo $json | jq .version | sed 's/"//g')

imagemin src/img/* -o dist/stat/$version/img
