import { isValid_72, isValid } from './20-valid-parentheses'

/* eslint-disable */
const example = [
  ["()", true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
  ['', true]
]
/* eslint-enable */

describe('valid-parentheses', () => {
  it('isValid_72', () => {
    example.forEach(item => {
      expect(isValid_72(item[0])).toBe(item[1])
    })
  })
  it('isValid', () => {
    example.forEach(item => {
      expect(isValid(item[0])).toBe(item[1])
    })
  })
})
