#!/bin/sh

echo "Running yarn install\n"
yarn

echo "Running yarn build\n"
yarn build

echo "Running yarn serve-n\n"
yarn serve-n
