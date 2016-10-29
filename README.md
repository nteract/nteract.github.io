# nteract landing page

[![Build Status](https://travis-ci.org/nteract/nteract.github.io.svg?branch=dev)](https://travis-ci.org/nteract/nteract.github.io)

## Updating

This repo is running a stack that combines jekyll, gulp and sass.

To locally develop clone the repo and run:
```
gem install bundler
bundle install
npm install
```
followed by:
```
npm run serve
```

This will build your assets and load a local server that will auto update and refresh when you make changes.

## Build

To build just run `npm run build`. That will generate the jeykll site to the `/dist/` folder.

## Deploy

Deploys are automatically executed by Travis.
