#!/bin/bash
set -x
TIMESTAMP=$(date +%s)

rm -rf dist
mkdir dist

# Create a temporary index.html with updated versions for the dist folder
sed "s/\.css\?v=[0-9.]*/.css?v=$TIMESTAMP/g; s/\.js\?v=[0-9.]*/.js?v=$TIMESTAMP/g" index.html > dist/index.html

cp -r css dist/
cp -r js dist/
cp -r vendor dist/
cp favicon.png gear.svg oratorio.webp dist/
# Create a temporary index.html with updated versions for the dist folder
sed "s/\.css\?v=[0-9.]*/.css?v=$TIMESTAMP/g; s/\.js\?v=[0-9.]*/.js?v=$TIMESTAMP/g" index.html > dist/index.html
