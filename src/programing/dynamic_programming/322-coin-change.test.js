import { coinChange, coinChange_dfs } from './322-coin-change'

/* eslint-disable */
const example = [
  [[[1, 2, 5], 11], 3],
  [[[1, 2, 5], 3], 2],
  [[[6, 2, 5], 3], -1],
  [[[6, 2, 5], 7], 2],
  [[[6, 2, 5, 4], 7], 2],
  [[[6, 4, 5, 2], 7], 2]
]
/* eslint-enable */

describe('322.coin-change', () => {
  it('coinChange', () => {
    example.forEach(item => {
      expect(coinChange(...item[0])).toBe(item[1])
    })
  })
  it('coinChange_dfs', () => {
    example.forEach(item => {
      expect(coinChange_dfs(...item[0])).toBe(item[1])
    })
  })
})
