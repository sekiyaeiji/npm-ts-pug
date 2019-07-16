#!/bin/sh

version=`node -pe 'require("./package.json").version'`

echo $version

temp_json='tmp/data.json'

cat ./src/pug/data/data.json | jq '.data[0] |= .+ {"stat_version": "${version}"}' \
> ${temp_json} && cat ${temp_json}

pug -O ${temp_json} -P src/pug/page/ --out dist
