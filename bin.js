#!/usr/bin/env node

import arg from 'arg'
import { semverPipe } from './handler.js'

const args = arg({
  '--command': [String],
  '--debug': Boolean
})

const debugging = args['--debug']
const commands = args['--command']

const result = semverPipe(commands, debugging)(args._)
console.log(result)
