/* global describe expect test */
import * as fsPath from 'node:path'

import * as locations from '../locations'

describe('COMPLY_HOME', () => {
  test("defaults to '.liq' in users home dir", () =>
    expect(locations.COMPLY_HOME()).toBe(fsPath.join(process.env.HOME, '.config', 'catalyst')))

  test('can be overridden by setting environment var COMPLY_HOME', () => {
    const newHome = fsPath.sep + 'foo'
    process.env.COMPLY_HOME = newHome
    try {
      expect(locations.COMPLY_HOME()).toBe(newHome)
    }
    finally {
      delete process.env.COMPLY_HOME
    }
  })
})

describe('COMPLY_API_SPEC_PATH', () => {
  test("defaults to '<COMPLY_HOME>/api.json'", () =>
    expect(locations.COMPLY_API_SPEC_PATH()).toBe(fsPath.join(locations.COMPLY_HOME(), 'api.json')))

  test('updates location when COMPLY_HOME is overriden', () => {
    const newHome = fsPath.sep + 'foo'
    const newAPI = fsPath.join(newHome, 'api.json')
    process.env.COMPLY_HOME = newHome
    try {
      expect(locations.COMPLY_API_SPEC_PATH()).toBe(newAPI)
    }
    finally {
      delete process.env.COMPLY_HOME
    }
  })
})
