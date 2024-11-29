#!/usr/bin/env node

import semver from 'semver'
import arg from 'arg'

const args = arg({
  '--command': [String],
  '--debug': Boolean
})

const debugging = args['--debug']
const commands = args['--command']

const pipe = (...fns) => (x) => fns.reduce((_v, f) => {
  const v = Array.isArray(_v) ? _v : [_v]
  if (debugging) console.log('Calling', `semver.${f}`, 'with arguments:', v)
  return semver[f](...v)
}, x);

const result = pipe(...commands)(args._)
console.log(result)
