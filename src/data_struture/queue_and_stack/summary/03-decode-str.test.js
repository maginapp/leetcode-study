import { decodeString, decodeString_for } from './03-decode-str'

const example = [
  [['3[a]2[bc]'], 'aaabcbc'],
  [['3[a2[c]]'], 'accaccacc'],
  [['2[abc]3[cd]ef'], 'abcabccdcdcdef'],
  [['abc3[cd]xyz'], 'abccdcdcdxyz'],
  [['10[a]'], 'aaaaaaaaaa']
]

describe('03-decode-str test', () => {
  it('expect-decodeString', () => {
    example.forEach(item => {
      expect(decodeString(...item[0])).toEqual(item[1])
    })
  })
  it('expect-decodeString_for', () => {
    example.forEach(item => {
      expect(decodeString_for(...item[0])).toEqual(item[1])
    })
  })
})
