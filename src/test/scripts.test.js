/* global describe expect test */
import * as scripts from '../scripts'

describe('CATALYST_GENERATED_FILE_NOTICE', () => {
  const notice = scripts.CATALYST_GENERATED_FILE_NOTICE({ builderNPMName : '@acme/foo', commentToken : '#' })

  test('wraps lines to 80 or less', () => {
    for (const line of notice.split('\n')) {
      expect(line.length).toBeLessThanOrEqual(82) // 82 with comment
    }
  })

  test('prefixes line with padded comment token', () => {
    for (const line of notice.split('\n')) {
      expect(line.startsWith('# ')).toBe(true)
    }
  })
})
