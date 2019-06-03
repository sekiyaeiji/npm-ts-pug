#!/bin/sh

json=$(cat ./package.json)
version=$(echo $json | jq .version | sed 's/"//g')

mkdir tmp

cat ./src/pug/data/data.json | jq ".data |= .+ {\"stat_version\": \"$version\"}" \
> tmp/data.json && cat tmp/data.json

pug -O tmp/data.json -P src/pug/page/ -o dist
