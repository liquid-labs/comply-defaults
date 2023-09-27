/* global describe expect test */
import * as network from '../network'

describe('CATALYST_PORT', () => {
  test('defaults to 32700', () => expect(network.CATALYST_PORT()).toBe(32700))

  test('can be overridden by setting environment var CATALYST_PORT', () => {
    const newPort = 32652
    process.env.CATALYST_PORT = newPort
    try {
      expect(network.CATALYST_PORT()).toBe(newPort + '')
    }
    finally {
      delete process.env.CATALYST_PORT
    }
  })
})
