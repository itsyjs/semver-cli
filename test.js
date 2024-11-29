import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import { semverPipe } from './handler.js'

test('it handles a single command', () => {
  const result = semverPipe(['major'])('1.0.1')
  assert.equal(result, 1)
})

test('it handles multiple commands in order', () => {
  const firstStep = semverPipe(['inc'])(['1.0.1', 'minor'])
  assert.equal(firstStep, '1.1.0')

  const result = semverPipe(['inc', 'minor'])(['1.0.1', 'minor'])
  assert.equal(result, 1)
})
