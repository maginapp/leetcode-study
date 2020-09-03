import { decodeString } from './03-decode-str'

const example = [
  [['3[a]2[bc]'], 'aaabcbc'],
  [['3[a2[c]]'], 'accaccacc'],
  [['2[abc]3[cd]ef'], 'abcabccdcdcdef'],
  [['abc3[cd]xyz'], 'abccdcdcdxyz']
]

describe('03-decode-str test', () => {
  it('expect-decodeString', () => {
    example.forEach(item => {
      expect(decodeString(...item[0])).toEqual(item[1])
    })
  })
})
