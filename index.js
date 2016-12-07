'use strict'

module.exports = isNative

const isNative = pkg =>
  pkg.dependencies && (
    pkg.dependencies.bindings ||
    pkg.dependencies.prebuild ||
    pkg.dependencies.nan ||
    pkg.dependencies['node-pre-gyp']
  ) ||
  pkg.gypfile ||
  pkg.binary

