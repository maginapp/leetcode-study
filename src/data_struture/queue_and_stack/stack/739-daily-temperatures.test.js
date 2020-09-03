import { dailyTemperatures, dailyTemperatures_1388, dailyTemperatures_176 } from './739-daily-temperatures'

/* eslint-disable */
const example = [
  [[73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]]
]
/* eslint-enable */

describe('valid-parentheses', () => {
  it('dailyTemperatures_1388', () => {
    example.forEach(item => {
      expect(dailyTemperatures_1388(item[0])).toEqual(item[1])
    })
  })
  it('dailyTemperatures_176', () => {
    example.forEach(item => {
      expect(dailyTemperatures_176(item[0])).toEqual(item[1])
    })
  })
  it('dailyTemperatures', () => {
    example.forEach(item => {
      expect(dailyTemperatures(item[0])).toEqual(item[1])
    })
  })
})
