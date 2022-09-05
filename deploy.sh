#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -addgit commit -m 'New deployment'
git push -f git@github.com:vicmms/webapp--easygoband.git main:gh-pages

cd -

