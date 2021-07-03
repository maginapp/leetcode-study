import { numWays } from './07-lcp-chuan-di-xin-xi'

/* eslint-disable */
const example = [
  [
    [
      5,
      [[0,4],[0,1],[3,4],[0,3],[1,4]],
      2
    ],
    2
  ],
  [
    [
      3,
      [[0,1],[0,2],[2,1],[1,2],[1,0],[2,0]],
      5
    ],
    11
  ]
]
/* eslint-enable */

describe('test: 07-lcp-chuan-di-xin-xi', () => {
  it('result', () => {
    example.forEach(item => {
      expect(numWays(...item[0])).toEqual(item[1])
    })
  })
})
