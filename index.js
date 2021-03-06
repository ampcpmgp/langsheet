#!/usr/bin/env node

const { asset, name, on, port, debugPagePath, debugPageTitle, loggerTitle } = require('berber')
const pkg = require('./package')
const pipeline = require('./pipeline')

name(pkg.name)

loggerTitle(pkg.name)

debugPagePath(`__${pkg.name}__`)
debugPageTitle(`<i>${pkg.name}</i> debug page`)

on('config', config => {
  config = config || {}

  if (!config.source) {
    console.log(`Error: 'source' is not specified.\nSee ${pkg.homepage} for details.`)
    process.exit(1)
  }

  port(config.port || 26000)

  pipeline(asset(config.source), config)
})
