#!/usr/bin/env node

import semver from 'semver'
import arg from 'arg'

const args = arg({
  '--command': String
})

const versionArgs = args._
const command = args['--command']
const result = semver[command](...versionArgs)

console.log(result)
