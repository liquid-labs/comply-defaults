/* global describe expect test */
import * as network from '../network'

describe('COMPLY_PORT', () => {
  test('defaults to 32700', () => expect(network.COMPLY_PORT()).toBe(32600))

  test('can be overridden by setting environment var COMPLY_PORT', () => {
    const newPort = 32652
    process.env.COMPLY_PORT = newPort
    try {
      expect(network.COMPLY_PORT()).toBe(newPort + '')
    }
    finally {
      delete process.env.COMPLY_PORT
    }
  })
})
