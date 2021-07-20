import { maximumElementAfterDecrementingAndRearranging } from './1846-maximum-element-after-decreasing-and-rearranging'

/* eslint-disable */
const example = [
  [
    [
      [2,2,1,2,1]
    ],
    2
  ],
  [
    [
      [100,1,1000]
    ],
    3
  ],
  [
    [
      [1,2,3,4,5]
    ],
    5
  ]
]
/* eslint-enable */

describe('1846-maximumElementAfterDecrementingAndRearranging', () => {
  example.forEach((item, index) => {
    it('result - ' + index + ': ====> ' + item[0] + ' result is :' + item[1], () => {
      expect(maximumElementAfterDecrementingAndRearranging(...item[0])).toEqual(item[1])
    })
  })
})
