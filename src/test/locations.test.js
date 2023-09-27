/* global describe expect test */
import * as fsPath from 'node:path'

import * as locations from '../locations'

describe('CATALYST_HOME', () => {
  test("defaults to '.liq' in users home dir", () =>
    expect(locations.CATALYST_HOME()).toBe(fsPath.join(process.env.HOME, '.config', 'catalyst')))

  test('can be overridden by setting environment var CATALYST_HOME', () => {
    const newHome = fsPath.sep + 'foo'
    process.env.CATALYST_HOME = newHome
    try {
      expect(locations.CATALYST_HOME()).toBe(newHome)
    }
    finally {
      delete process.env.CATALYST_HOME
    }
  })
})

describe('CATALYST_API_SPEC', () => {
  test("defaults to '<CATALYST_HOME>/api.json'", () =>
    expect(locations.CATALYST_API_SPEC()).toBe(fsPath.join(locations.CATALYST_HOME(), 'api.json')))

  test('updates location when CATALYST_HOME is overriden', () => {
    const newHome = fsPath.sep + 'foo'
    const newAPI = fsPath.join(newHome, 'api.json')
    process.env.CATALYST_HOME = newHome
    try {
      expect(locations.CATALYST_API_SPEC()).toBe(newAPI)
    }
    finally {
      delete process.env.CATALYST_HOME
    }
  })
})
